import os
from flask import Flask, request, jsonify
from werkzeug.utils import secure_filename
import sqlite3
import datetime
import uuid
from dataclasses import dataclass
import cv2
import pytesseract
import openai
from collections import Counter
import re
import numpy as np
import imutils
from imutils.perspective import four_point_transform
from skimage.filters import threshold_local
import mysql.connector
import traceback
import json




openai.api_key = "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"

# List of properties for each digitized letter
letterproperties = [
    "Sent from",
    "Subject",
    "Date Received",
    "Date Uploaded"
    "Category",
    "Tags",
    "Actions",
    "Preview",
    "Sent to",
    "Source Image",
    "Searchable Content",
    "Notes"
]


# List of categories for organizing digitized mail
lettercategories = [
    "Bills",
    "Financial Documents",
    "Correspondence",
    "Official Documents",
    "Healthcare",
    "Education",
    "Home",
    "Work",
    "Subscriptions",
    "Travel",
    "Government",
    "Personal",
    "Receipts",
    "Miscellaneous"
]








app = Flask(__name__)

ADD_CONTENT_DESCRIPTIONS='\"ADD_CONTENT_DESCRIPTIONS\"'
REMOVE_CONTENT_DESCRIPTIONS='\"REMOVE_CONTENT_DESCRIPTIONS\"'
NO_COMMAND="404"
command=NO_COMMAND
image = 0;
UPLOAD_FOLDER ='uploads'
DATABASE = 'file_db.sqlite'  # SQLite database file
app.config['DATABASE'] = DATABASE


@dataclass
class letterentry:
	filename: str
	filepath: str
	title: str = 'TBD'
	category: str = 'General'
	sender: str = 'Unknown'

@dataclass
class LetterEntry:
    sent_from: str
    subject: str
    date_received: str
    date_uploaded: str
    category: str
    tags: list[str]
    actions: list[str]
    preview: str
    sent_to: str
    source_image_path: str
    searchable_content: str
    notes: str


def create_tables():
    # Replace these with your own database credentials
    cursor= get_db()
            
    try:
        
        # Create 'users' table
        create_users_table = """
        CREATE TABLE IF NOT EXISTS users (
            user_id INT AUTO_INCREMENT PRIMARY KEY,
            username VARCHAR(50) NOT NULL,
            email VARCHAR(100) NOT NULL
        )
        """
        cursor.execute(create_users_table)

        # Create 'letters' table
        create_letters_table = """
        CREATE TABLE IF NOT EXISTS letters (
            letter_id INT AUTO_INCREMENT PRIMARY KEY,
            user_id INT NOT NULL,
            sent_from VARCHAR(100),
            subject VARCHAR(200),
            date_received DATE,
            date_uploaded DATETIME,
            category VARCHAR(50),
            tags TEXT,
            actions TEXT,
            preview TEXT,
            sent_to VARCHAR(100),
            source_image_path VARCHAR(200),
            searchable_content TEXT,
            notes TEXT,
            FOREIGN KEY (user_id) REFERENCES users(user_id)
        )
        """
        cursor.execute(create_letters_table)


        print("Tables created successfully!")

    except mysql.connector.Error as error:
        print("Error:", error)

def add_letter(user_id, sent_from, subject, date_received, date_uploaded, category, tags, actions, preview, sent_to, source_image_path, searchable_content, notes):
    print('adding letter.../n')
    # Replace these with your own database credentials
    cursor = get_db()
    try:
        
        # Insert letter into the 'letters' table
        insert_query = """
        INSERT INTO letters (user_id, sent_from, subject, date_received, date_uploaded, category, tags, actions, preview, sent_to, source_image_path, searchable_content, notes)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)"""
        cursor.execute(insert_query, (user_id, sent_from, subject, date_received, date_uploaded, category, tags, actions, preview, sent_to, source_image_path, searchable_content, notes))

        
        print("Letter added successfully!")

    except mysql.connector.Error as error:
        print("Error:", error)


def add_user(username, email,userid):
    print('adding user.../n')
    cursor = get_db()
    try:
        # Insert user into the 'users' table
        insert_query = "INSERT INTO users (username, email,user_id) VALUES (?, ?, ?)"
        cursor.execute(insert_query,(username, email, userid))

        print("User added successfully!")

    except mysql.connector.Error as error:
        print("Error:", error)



def edit_letter(letter_id, new_subject, new_category, new_tags, new_actions, new_preview, new_notes):
    cursor = get_db()

    try:

        # Update letter in the 'letters' table
        update_query = """
        UPDATE letters
        SET subject = %s, category = %s, tags = %s, actions = %s, preview = %s, notes = %s
        WHERE letter_id = %s
        """
        letter_data = (new_subject, new_category, new_tags, new_actions, new_preview, new_notes, letter_id)
        cursor.execute(update_query, letter_data)

        print("Letter updated successfully!")

    except mysql.connector.Error as error:
        print("Error:", error)

def process_letterentry(currentfile, file_path,filename):
	print ('processing letter entry for file: '+currentfile.filename+' original and generated: ' +filename)
	ltr = letterentry(filename,file_path, 'TBD','General','Unknown') 

	return ltr

def get_value_from_key(key, str):
    key = key+  "(.+)"
    value = re.search(key, str)
    if(value != None):
        return value.group(1)
    else:
        return ""

def image_to_text(img):
    print('processing OCR ')
    
   # Pass the image through pytesseract
    result_text = pytesseract.image_to_string(img, lang="nld")
    #print ('Result text is: '+result_text)
    #angle_freq_dict[i] = result_text
    #print ('number of keywords = '+str(result_text.count("\n")))
    
    return result_text

   

def order_points(pts):
    '''Rearrange coordinates to order:
      top-left, top-right, bottom-right, bottom-left'''
    rect = np.zeros((4, 2), dtype='float32')
    pts = np.array(pts)
    s = pts.sum(axis=1)
    # Top-left point will have the smallest sum.
    rect[0] = pts[np.argmin(s)]
    # Bottom-right point will have the largest sum.
    rect[2] = pts[np.argmax(s)]
 
    diff = np.diff(pts, axis=1)
    # Top-right point will have the smallest difference.
    rect[1] = pts[np.argmin(diff)]
    # Bottom-left will have the largest difference.
    rect[3] = pts[np.argmax(diff)]
    # Return the ordered coordinates.
    return rect.astype('int').tolist()

def find_dest(pts):
    (tl, tr, br, bl) = pts
    # Finding the maximum width.
    widthA = np.sqrt(((br[0] - bl[0]) ** 2) + ((br[1] - bl[1]) ** 2))
    widthB = np.sqrt(((tr[0] - tl[0]) ** 2) + ((tr[1] - tl[1]) ** 2))
    maxWidth = max(int(widthA), int(widthB))
 
    # Finding the maximum height.
    heightA = np.sqrt(((tr[0] - br[0]) ** 2) + ((tr[1] - br[1]) ** 2))
    heightB = np.sqrt(((tl[0] - bl[0]) ** 2) + ((tl[1] - bl[1]) ** 2))
    maxHeight = max(int(heightA), int(heightB))
    # Final destination co-ordinates.
    destination_corners = [[0, 0], [maxWidth, 0], [maxWidth, maxHeight], [0, maxHeight]]
 
    return order_points(destination_corners)



def scan_orig(imgfile):
    img = cv2.imread(imgfile)
    # Resize image to workable size
    dim_limit = 1080
    max_dim = max(img.shape)
    if max_dim > dim_limit:
        resize_scale = dim_limit / max_dim
        img = cv2.resize(img, None, fx=resize_scale, fy=resize_scale)
    # Create a copy of resized original image for later use
    orig_img = img.copy()
    # Repeated Closing operation to remove text from the document.
    kernel = np.ones((5, 5), np.uint8)
    img = cv2.morphologyEx(img, cv2.MORPH_CLOSE, kernel, iterations=3)
    
    cv2.imshow("blank", img)
    
    
    # GrabCut
    mask = np.zeros(img.shape[:2], np.uint8)
    bgdModel = np.zeros((1, 65), np.float64)
    fgdModel = np.zeros((1, 65), np.float64)
    rect = (20, 20, img.shape[1] - 20, img.shape[0] - 20)
    cv2.grabCut(img, mask, rect, bgdModel, fgdModel, 5, cv2.GC_INIT_WITH_RECT)
    mask2 = np.where((mask == 2) | (mask == 0), 0, 1).astype('uint8')
    img = img * mask2[:, :, np.newaxis]
 
    gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)
    gray = cv2.GaussianBlur(gray, (11, 11), 0)
    # Edge Detection.
    canny = cv2.Canny(gray, 0, 200)
    canny = cv2.dilate(canny, cv2.getStructuringElement(cv2.MORPH_ELLIPSE, (5, 5)))
 
    con = np.zeros_like(img)
    # Finding contours for the detected edges.
    contours, hierarchy = cv2.findContours(canny, cv2.RETR_LIST, cv2.CHAIN_APPROX_NONE)
    # Keeping only the largest detected contour.
    page = sorted(contours, key=cv2.contourArea, reverse=True)[:5]
    con = cv2.drawContours(con, page, -1, (0, 255, 255), 3)
    cv2.imshow("Contour", con)

    # Detecting Edges through Contour approximation.
    # Loop over the contours.
    if len(page) == 0:
        return orig_img
    for c in page:
        # Approximate the contour.
        epsilon = 0.02 * cv2.arcLength(c, True)
        corners = cv2.approxPolyDP(c, epsilon, True)
        # If our approximated contour has four points.
        if len(corners) == 4:
            break
    # Sorting the corners and converting them to desired shape.
    corners = sorted(np.concatenate(corners).tolist())
    # For 4 corner points being detected.
    corners = order_points(corners)
 
    destination_corners = find_dest(corners)
 
    h, w = orig_img.shape[:2]
    # Getting the homography.
    M = cv2.getPerspectiveTransform(np.float32(corners), np.float32(destination_corners))
    # Perspective transform using homography.
    final = cv2.warpPerspective(orig_img, M, (destination_corners[2][0], destination_corners[2][1]),
                                flags=cv2.INTER_LINEAR)
    
    cv2.imshow("Final", final)
    cv2.waitKey(0)
    cv2.destroyAllWindows()

    return final

def processimageforocr2(imgfilepath):
    
    # Grayscale, Gaussian blur, Otsu's threshold
    image = cv2.imread(imgfilepath)
    gray = cv2.cvtColor(image, cv2.COLOR_BGR2GRAY)
    blur = cv2.GaussianBlur(gray, (1,1), 0)
    thresh = cv2.threshold(blur, 0, 255, cv2.THRESH_BINARY_INV + cv2.THRESH_OTSU)[1]

    # Morph open to remove noise and invert image
    kernel = cv2.getStructuringElement(cv2.MORPH_RECT, (1,1))
    opening = cv2.morphologyEx(thresh, cv2.MORPH_OPEN, kernel, iterations=1)
    invert = 255 - opening

    # Perform text extraction
    #data = pytesseract.image_to_string(invert, lang='eng', config='--psm 6')
    #print(data)

    #cv2.imshow('thresh', thresh)
    #cv2.imshow('opening', opening)
    #cv2.imshow('invert', invert)
    #cv2.waitKey()
    return invert

def findtextareas(imgfilepath):
    # Load image, grayscale, Gaussian blur, adaptive threshold
    image = cv2.imread(imgfilepath)
    gray = cv2.cvtColor(image, cv2.COLOR_BGR2GRAY)
    blur = cv2.GaussianBlur(gray, (9,9), 0)
    thresh = cv2.adaptiveThreshold(blur,255,cv2.ADAPTIVE_THRESH_GAUSSIAN_C, cv2.THRESH_BINARY_INV,11,2)

    # Dilate to combine adjacent text contours
    kernel = cv2.getStructuringElement(cv2.MORPH_RECT, (7,7))
    dilate = cv2.dilate(thresh, kernel, iterations=4)

    # Find contours, highlight text areas, and extract ROIs
    cnts = cv2.findContours(dilate, cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_SIMPLE)
    cnts = cnts[0] if len(cnts) == 2 else cnts[1]

    ROI_number = 0
    for c in cnts:
        area = cv2.contourArea(c)
        if area > 10000:
            x,y,w,h = cv2.boundingRect(c)
            cv2.rectangle(image, (x, y), (x + w, y + h), (36,255,12), 3)
            # ROI = image[y:y+h, x:x+w]
            # cv2.imwrite('ROI_{}.png'.format(ROI_number), ROI)
            # ROI_number += 1

    cv2.imshow('thresh', thresh)
    cv2.imshow('dilate', dilate)
    cv2.imshow('image', image)
    cv2.waitKey()

def scan2(imgfilepath):
    #Read the original image
    big_img = cv2.imread(imgfilepath)
    #cv2.imshow('org img',big_img)
    #cv2.waitKey(0)

    #Resize the image
    ratio = big_img.shape[0] / 500.0
    org = big_img.copy()
    img = imutils.resize(big_img, height = 500)
    #cv2.imshow('resizing',img)
    #cv2.waitKey(0)

    #Blur the image to extract shapes only
    kernel = np.ones((5,5),np.uint8)

    img = cv2.morphologyEx(img, cv2.MORPH_CLOSE, kernel, iterations= 5)

    #cv2.imshow('blank',img)
    #cv2.waitKey(0)

    img = cv2.medianBlur(img, 5)
    #cv2.imshow('Noise reduction',img)
    #cv2.waitKey(0)

    #grayscal image
    gray_img = cv2.cvtColor(img.copy(),cv2.COLOR_BGR2GRAY)
    #blur_img = cv2.GaussianBlur(gray_img,(5,5),0)
    
    #cv2.imshow('grayed blured image',gray_img)
    #cv2.waitKey(0)
    #Extract edges from image
    imageMedian = np.median(gray_img)
    s = 0.33
    if imageMedian > 191:  # light images
        cannyTh1 = max(0, int((1 - 2*s) * (255 - imageMedian)))
        cannyTh2 = max(85, int((1 + 2*s) * (255 - imageMedian)))
    elif imageMedian > 127:
        cannyTh1 = max(0, int((1 - s) * (255 - imageMedian)))
        cannyTh2 = min(255, int((1 + s) * (255 - imageMedian)))
    elif imageMedian < 63:  # dark images
        cannyTh1 = max(0, int((1 - 2*s) * imageMedian))
        cannyTh2 = max(85, int((1 + 2*s) * imageMedian))
    else:
        cannyTh1 = max(0, int((1 - s) * imageMedian))
        cannyTh2 = min(255, int((1 + s) * imageMedian))


    #edged_img = cv2.Canny(blur_img,cannyTh1,cannyTh2)
    edged_img = cv2.Canny(gray_img,0,100)

    #cv2.imshow('edged',edged_img)
    #cv2.waitKey(0)
    #dialate the found edges
    dilated = cv2.dilate(edged_img.copy(), None, iterations=3)
    #cv2.imshow('dilated',dilated)
    #cv2.waitKey(0)

    #identify the largest rectangle, assume it is our piece of paper
    cnts,_ = cv2.findContours(dilated.copy(),cv2.RETR_LIST,cv2.CHAIN_APPROX_SIMPLE)
    cnts = sorted(cnts,key=cv2.contourArea,reverse=True)[:5]
    found = False

    for c in cnts:
        peri = cv2.arcLength(c,True)
        approx = cv2.approxPolyDP(c,0.02*peri,True)
        if len(approx)==4:
            found = True
            doc = approx
            break
    #couldn't find proper contour, we couldn't find the rectangular form of the letter, return error
    if (found == False):
        print ('failed to process for OCR. Send original image to pytesseract')

        #Apply threashold on the original picture - assuming it is already correctly positioned for OCR
        T = threshold_local(org, 35, offset = 10, method = "gaussian")
        org = (org > T).astype("uint8") * 255
        return org

            
    #Rotate the image to be aligned
    p=[]
    for d in doc:
        tuple_point = tuple(d[0])
        cv2.circle(img,tuple_point,3,(0,0,255),4)
        p.append(tuple_point)
    #cv2.imshow('Corner points detected',img)
    #cv2.waitKey(0)


    warped = four_point_transform(org, doc.reshape(4, 2) * ratio)
    warped = cv2.cvtColor(warped, cv2.COLOR_BGR2GRAY)
    #cv2.imshow("Warped", imutils.resize(warped, height = 650))
    #cv2.waitKey(0)


    T = threshold_local(warped, 35, offset = 10, method = "gaussian")
    warped = (warped > T).astype("uint8") * 255
    #cv2.imshow("Scanned", imutils.resize(warped, height = 650))
    #cv2.waitKey(0)
    #cv2.destroyAllWindows()
    return warped

def scan(imgfile):
    img = cv2.imread(imgfile)
    orig_img = img.copy()

    # Repeated Closing operation to remove text from the document.
    kernel = np.ones((5,5),np.uint8)
    
    img = cv2.morphologyEx(orig_img, cv2.MORPH_CLOSE, kernel, iterations= 3)
    blankimg = img.copy()
    #cv2.imshow("Blank image", blankimg)
    gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)
    gray= cv2.GaussianBlur(gray, (11, 11), 0)
    img=gray
    #img  = cv2.bilateralFilter(img,9,75,75)
    # define the alpha and beta
    alpha = 1.5 # Contrast control
    #alpha = 1.5 # Contrast control
    
    beta = 10 # Brightness control
    #beta = 10 # Brightness control

    # call convertScaleAbs function
    #adjusted = cv2.convertScaleAbs(gray, alpha=alpha, beta=beta)
    #img=adjusted
    mask = np.zeros(img.shape[:2],np.uint8)
    bgdModel = np.zeros((1,65),np.float64)
    fgdModel = np.zeros((1,65),np.float64)
    rect = (20,20,img.shape[1]-20,img.shape[0]-20)
    cv2.grabCut(img,mask,rect,bgdModel,fgdModel,8,cv2.GC_INIT_WITH_RECT)
    mask2 = np.where((mask==2)|(mask==0),0,1).astype('uint8')
    img = img*mask2[:,:,np.newaxis]
    
    cv2.imshow("Removed background", img)
    
    gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)
    gray = cv2.GaussianBlur(gray, (11, 11), 0)
    # Edge Detection.
    canny = cv2.Canny(gray, 0, 200)
    canny = cv2.dilate(canny, cv2.getStructuringElement(cv2.MORPH_ELLIPSE, (5, 5)))
 
    con = np.zeros_like(img)
    # Finding contours for the detected edges.
    contours, hierarchy = cv2.findContours(canny, cv2.RETR_LIST, cv2.CHAIN_APPROX_NONE)
    # Keeping only the largest detected contour.
    page = sorted(contours, key=cv2.contourArea, reverse=True)[:5]
    con = cv2.drawContours(con, page, -1, (0, 255, 255), 3)
    cv2.imshow("Contour", con)

    # Detecting Edges through Contour approximation.
    # Loop over the contours.
    if len(page) == 0:
        return orig_img
    for c in page:
        # Approximate the contour.
        epsilon = 0.02 * cv2.arcLength(c, True)
        corners = cv2.approxPolyDP(c, epsilon, True)
        # If our approximated contour has four points.
        if len(corners) == 4:
            break
    # Sorting the corners and converting them to desired shape.
    corners = sorted(np.concatenate(corners).tolist())
    # For 4 corner points being detected.
    corners = order_points(corners)
 
    destination_corners = find_dest(corners)
 
    h, w = orig_img.shape[:2]
    # Getting the homography.
    M = cv2.getPerspectiveTransform(np.float32(corners), np.float32(destination_corners))
    # Perspective transform using homography.
    final = cv2.warpPerspective(orig_img, M, (destination_corners[2][0], destination_corners[2][1]),
                                flags=cv2.INTER_LINEAR)
    
   # cv2.imshow("Final", final)
   # cv2.waitKey(0)
   # cv2.destroyAllWindows()

    return final


def processimageforocr(filename):
        # load the image and compute the ratio of the old height
    # to the new height, clone it, and resize it
    image = cv2.imread(filename)
    ratio = image.shape[0] / 500.0
    orig = image.copy()

    # Repeated Closing operation to remove text from the document.
    kernel = np.ones((5,5),np.uint8)
    
    img = cv2.morphologyEx(orig, cv2.MORPH_CLOSE, kernel, iterations= 3)
    blankimg = img.copy()
    #cv2.imshow("Blank image", blankimg)
   
    mask = np.zeros(img.shape[:2],np.uint8)
    bgdModel = np.zeros((1,65),np.float64)
    fgdModel = np.zeros((1,65),np.float64)
    rect = (20,20,img.shape[1]-20,img.shape[0]-20)
    cv2.grabCut(img,mask,rect,bgdModel,fgdModel,5,cv2.GC_INIT_WITH_RECT)
    mask2 = np.where((mask==2)|(mask==0),0,1).astype('uint8')
    img = img*mask2[:,:,np.newaxis]
    
    #cv2.imshow("Removeed background", img)
    

    gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)
    gray = cv2.GaussianBlur(gray, (11, 11), 0)
    # Edge Detection.
    canny = cv2.Canny(gray, 0, 200)
    canny = cv2.dilate(canny, cv2.getStructuringElement(cv2.MORPH_ELLIPSE, (5, 5)))

    #cv2.imshow("Edges image", canny)
    
    # Blank canvas.
    con = np.zeros_like(img)
    # Finding contours for the detected edges.
    contours, hierarchy = cv2.findContours(canny, cv2.RETR_LIST, cv2.CHAIN_APPROX_NONE)
    # Keeping only the largest detected contour.
    page = sorted(contours, key=cv2.contourArea, reverse=True)[:5]
    con = cv2.drawContours(con, page, -1, (0, 255, 255), 3)

    cv2.imshow("Contour", con)

    # Blank canvas.
    con = np.zeros_like(img)
    # Loop over the contours.
    for c in page:
        # Approximate the contour.
        epsilon = 0.02 * cv2.arcLength(c, True)
        corners = cv2.approxPolyDP(c, epsilon, True)
        # If our approximated contour has four points
        if len(corners) == 4:
            break
    cv2.drawContours(con, c, -1, (0, 255, 255), 3)
    cv2.drawContours(con, corners, -1, (0, 255, 0), 10)
    # Sorting the corners and converting them to desired shape.
    corners = sorted(np.concatenate(corners).tolist())
    
    # Displaying the corners.
    for index, c in enumerate(corners):
        character = chr(65 + index)
        cv2.putText(con, character, tuple(c), cv2.FONT_HERSHEY_SIMPLEX, 1, (255, 0, 0), 1, cv2.LINE_AA)


# For 4 corner points being detected.
    corners = order_points(corners)
 
    cv2.imshow("Points", con)

    destination_corners = find_dest(corners)
 
    h, w = orig.shape[:2]
    # Getting the homography.
    M = cv2.getPerspectiveTransform(np.float32(corners), np.float32(destination_corners))
    # Perspective transform using homography.
    final = cv2.warpPerspective(orig, M, (destination_corners[2][0], destination_corners[2][1]),
                                flags=cv2.INTER_LINEAR)
    
    cv2.imshow("Final", final)





    image = imutils.resize(image, height = 500)
    # convert the image to grayscale, blur it, and find edges
    # in the image
    gray = cv2.cvtColor(image, cv2.COLOR_BGR2GRAY)
    gray = cv2.GaussianBlur(gray, (5, 5), 0)
    # define the alpha and beta
    alpha = 1 # Contrast control
    #alpha = 1.5 # Contrast control
    
    beta = 1 # Brightness control
    #beta = 10 # Brightness control

    # call convertScaleAbs function
    adjusted = cv2.convertScaleAbs(gray, alpha=alpha, beta=beta)
    
    edged = cv2.Canny(adjusted, 50, 100)
    #edged = cv2.Canny(adjusted, 75, 200)
    
    # show the original image and the edge detected image
    print("STEP 1: Edge Detection")
    #cv2.imshow("Image", image)
    #cv2.imshow("Edged", edged)
    cv2.waitKey(0)
    cv2.destroyAllWindows()

    #step 2
    # find the contours in the edged image, keeping only the
    # largest ones, and initialize the screen contour
    cnts = cv2.findContours(edged.copy(), cv2.RETR_LIST, cv2.CHAIN_APPROX_SIMPLE)
    cnts = imutils.grab_contours(cnts)
    cnts = sorted(cnts, key = cv2.contourArea, reverse = True)[:5]
    print('number of contours found: '+str(len(cnts)))
    # loop over the contours
    for c in cnts:
        # approximate the contour

        peri = cv2.arcLength(c, True)
        approx = cv2.approxPolyDP(c, 0.02 * peri, True)
        cv2.drawContours(image, [approx], -1, (0, 255, 0), 2)    
        # if our approximated contour has four points, then we
        # can assume that we have found our screen
        print('approx is '+ str(approx))

       # if len(approx) == 4:
       #     screenCnt = approx
       #     break
    # show the contour (outline) of the piece of paper
    print("STEP 2: Find contours of paper")
    #cv2.drawContours(image, [screenCnt], -1, (0, 255, 0), 2)
    #cv2.imshow("Outline", image)
    cv2.waitKey(0)
    cv2.destroyAllWindows()




def alignimage(filename):
        # Load image, grayscale, Gaussian blur, Otsu's threshold
    image = cv2.imread(filename)
    gray = cv2.cvtColor(image, cv2.COLOR_BGR2GRAY)
    blur = cv2.GaussianBlur(gray, (7,7), 0)
    thresh = cv2.threshold(blur, 0, 255, cv2.THRESH_BINARY + cv2.THRESH_OTSU)[1]

    # Find contours and sort for largest contour
    cnts = cv2.findContours(thresh, cv2.RETR_EXTERNAL,cv2.CHAIN_APPROX_SIMPLE)
    cnts = cnts[0] if len(cnts) == 2 else cnts[1]
    cnts = sorted(cnts, key=cv2.contourArea, reverse=True)
    displayCnt = None

    for c in cnts:
        # Perform contour approximation
        peri = cv2.arcLength(c, True)
        approx = cv2.approxPolyDP(c, 0.02 * peri, True)
        if len(approx) == 4:
            displayCnt = approx
            break

    # Obtain birds' eye view of image
    warped = four_point_transform(image, displayCnt.reshape(4, 2))
    cv2.imshow("thresh", thresh)
    cv2.imshow("warped", warped)
    cv2.waitKey()
    return warped
    


def extract_logo(image_path):
    # Load the image
    image = cv2.imread(image_path)
    
    # Preprocess the image (e.g., resize, blur, etc.)
    # ...

    # Convert to grayscale
    gray = cv2.cvtColor(image, cv2.COLOR_BGR2GRAY)
    
    # Apply edge detection (Canny)
    edges = cv2.Canny(gray, threshold1=100, threshold2=200)  # Adjust thresholds as needed
    
    # Find contours
    contours, _ = cv2.findContours(edges, cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_SIMPLE)
    

    # Set a minimum area threshold for logo extraction
    min_area_threshold = 1000  # Adjust this value based on your data
    # Filter contours based on area or other criteria
    filtered_contours = [contour for contour in contours if cv2.contourArea(contour) > min_area_threshold]
    
    # Create a mask to extract the logo
    mask = np.zeros_like(gray)
    cv2.drawContours(mask, filtered_contours, -1, 255, thickness=cv2.FILLED)
    
    # Bitwise AND to extract logo region
    extracted_logo = cv2.bitwise_and(image, image, mask=mask)
    # Display or save the extracted logo
    cv2.imshow("Extracted Logo", extract_logo)
    cv2.waitKey(0)
    cv2.destroyAllWindows()
    
    return extracted_logo


def detect_logos(image_path):
    # Load YOLO model
    net = cv2.dnn.readNet("/home/ohad/darknet/yolov3.weights", "/home/ohad/darknet/cfg/yolov3.cfg")  # Path to YOLO files

    # Load classes
    classes = []
    with open("/home/ohad/darknet/coco.names", "r") as f:  # COCO class names
        classes = f.read().strip().split("\n")

    # Load image
    image = cv2.imread(image_path)
    height, width, _ = image.shape

    # Prepare image for YOLO input
    blob = cv2.dnn.blobFromImage(image, scalefactor=1/255, size=(416, 416), swapRB=True, crop=False)

    # Set input for YOLO model
    net.setInput(blob)
    output_layers_names = net.getUnconnectedOutLayersNames()
    layer_outputs = net.forward(output_layers_names)

    # Process YOLO outputs
    class_ids = []
    confidences = []
    boxes = []

    for output in layer_outputs:
        for detection in output:
            scores = detection[5:]
            class_id = np.argmax(scores)
            confidence = scores[class_id]

            if confidence > 0.5:  # Minimum confidence threshold
                center_x = int(detection[0] * width)
                center_y = int(detection[1] * height)
                w = int(detection[2] * width)
                h = int(detection[3] * height)

                # Rectangle coordinates
                x = int(center_x - w / 2)
                y = int(center_y - h / 2)

                boxes.append([x, y, w, h])
                confidences.append(float(confidence))
                class_ids.append(class_id)

    # Apply non-maximum suppression to remove overlapping boxes
    indexes = cv2.dnn.NMSBoxes(boxes, confidences, 0.5, 0.4)

    # Draw boxes and labels on the image
    for i in range(len(boxes)):
        if i in indexes:
            x, y, w, h = boxes[i]
            label = str(classes[class_ids[i]])
            confidence = confidences[i]

            cv2.rectangle(image, (x, y), (x + w, y + h), (0, 255, 0), 2)
            cv2.putText(image, f"{label}: {confidence:.2f}", (x, y - 10), cv2.FONT_HERSHEY_SIMPLEX, 0.5, (0, 255, 0), 2)

    cv2.imshow("Detected Logos", image)
    cv2.waitKey(0)
    cv2.destroyAllWindows()



def extract_fields_from_text(inputtext):
    commandprompt = """
    Act as a document analyzer with expertiese in understanding context from a document. 
    Analyze the following text and extract the following fields in json format as accurately as possible.
    Keep the exact same names of the parameters case sensitive and if a certain field is not found, return the string "N/A".
    check that your answer is in a valid json format and remove any redundant text from your answer:
    - Sent from (is the entity who sent the letter)
    - Subject (is the subject or title of this letter)
    - Date Received (is the date in which the letter was sent)
    - Category (extract the most applicable  category from the text out of these categories: "Bills",
    "Financial Documents",
    "Taxes",
    "Official Documents",
    "Healthcare",
    "Education",
    "Home",
    "Work",
    "Subscriptions",
    "Travel",
    "Government",
    "Personal",
    "Receipts",
    "Miscellaneous")
    - Tags 
    - Actions
    - Preview
    - Sent to (the receipient of the letter, no title just the name)
    - Notes

    Text: """
    finalprompt = commandprompt + inputtext+"/n" 
    response = openai.Completion.create(
        engine="text-davinci-003",
        prompt = finalprompt,
        max_tokens=200, 
        temperature =0
    )
    for choice in response.choices:
        print('choices from chatgpt: '+choice.text.strip())    
    extracted_fields_from_ai = response.choices[0].text.strip()
    print('extracted_fields from chatgpt:'+extracted_fields_from_ai) 
    if(extracted_fields_from_ai  == None):
        print('could not extract fields from document')
        return

   

    return extracted_fields_from_ai 


def generate_file_name():
    current_time = datetime.datetime.now()
    timestamp = current_time.strftime("%Y%m%d%H%M%S%f")

    # Generate a unique identifier using UUID
    unique_id = str(uuid.uuid4()).replace("-", "")

    file_name = f"scanned_image_{timestamp}_{unique_id}.jpg"
    return file_name

def init_db():
    with app.app_context():
        db = get_db()
        with app.open_resource('schema.sql', mode='r') as f:
            db.cursor().executescript(f.read())
        db.commit()

def get_db():
    db = sqlite3.connect(app.config['DATABASE'])
    db.row_factory = sqlite3.Row
    return db

@app.route('/control/<what>/', methods=['POST','GET'])
def control(what):
    """
    Control server flow
    """
    global command
    if what in 'add':
        command=ADD_CONTENT_DESCRIPTIONS
    else:
        command=REMOVE_CONTENT_DESCRIPTIONS

    return command,200

@app.route('/api/messages/sessions/', methods=['POST','GET'])
def create_session():
    """
    Creates a new session for sending and receiving messages
    """
    static_json = '{"delayBetweenPolls":5,"sessionId":88}'
    # Perform any necessary logic to create a new session ID
    # ...
    return static_json, 200

@app.route('/api/messages/sessions/<session_id>', methods=["GET",'POST'])
def something_else(session_id):
    """
    Sends a message to the specified session
    """
    global command
    if command == NO_COMMAND:
        return 'NO_MESSAGE',404
    static_json='''{"payload":{"deviceList":null,"hideCaret":false,"overlap":null,"region":null,"resourceSeparation":false,"screenshotMode":null,"scrollRootElement":null,"selectorsToFindRegionsFor":null,"waitBeforeCapture":0},"key":null,"name":'''+command+''',"nextPath":null,"protocolVersion":"1.0"}'''
    command=NO_COMMAND
    return static_json, 200

@app.route('/api/messages/sessions/<session_id>/<uuid>', methods=["GET",'POST'])
def send_message(session_id, uuid):
    """
    Sends a message to the specified session
    """
    global command
    if command == NO_COMMAND:
        return 'NO_MESSAG',404
    static_json='''{"payload":{"deviceList":null,"hideCaret":false,"overlap":null,"region":null,"resourceSeparation":false,"screenshotMode":null,"scrollRootElement":null,"selectorsToFindRegionsFor":null,"waitBeforeCapture":0},"key":null,"name":'''+command+''',"nextPath":null,"protocolVersion":"1.0"}'''
    command=NO_COMMAND
    return static_json, 200

ALLOWED_EXTENSIONS = {'txt', 'pdf', 'png', 'jpg', 'jpeg', 'gif'}
def allowed_file(filename):
    return '.' in filename and \
           filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS




@app.route('/upload', methods=['POST'])
def upload_file():
    try:
        #print (request.files)
        if 'picture' not in request.files and 'uploadedfile' not in request.files:
            print ('error no picture or uploadedfile part')
            return jsonify({'error': 'No file part'}), 400
        
        if  request.form.get('username') is None:
            print ('error no user data available')
            return jsonify({'error': 'no user data available'}), 400
        
        username = request.form.get('username')
        email = request.form.get('email')
        userid = request.form.get('userid') 
        if userid is not None and username is not None and email is not None:
            add_user(username,email,userid)
        
        
        file = request.files['picture']
        if file.filename == '':
            print ('error no selected file')
            return jsonify({'error': 'No selected file'}), 400
        
        if file and allowed_file(file.filename):
            filename = generate_file_name()
            print ('filename: '+filename)
            #save the file to local filesystem
            if not os.path.exists(UPLOAD_FOLDER):
            	os.makedirs(UPLOAD_FOLDER, 0o777)
            app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER
            file_path = os.path.join(app.config['UPLOAD_FOLDER'], filename)
            #print(file_path)
            file.save(file_path)
            #TODO - this is not working correctly, need to fine tune yolo config
            #detect_logos(file_path)
            #extract_logo(file_path)
            print ('File saved to local filesystem successfully')
            # Align the image for pytesseract
            #alignedimg = alignimage(file_path)
        #    findtextareas(file_path)
            processedimg = processimageforocr2(file_path)
        #    processedimg = scan2(file_path)
            print ('image processed')
            #cv2.imshow('processed image',processedimg)
            #cv2.waitKey(0)
            rotate_img = cv2.rotate(processedimg, cv2.ROTATE_180)
            #cv2.imshow('rotated image',rotate_img)
            #cv2.waitKey(0)
            
            #processimageforocr(file_path)
            imagetext = image_to_text(rotate_img)
            #print('image_to_text output: '+imagetext+'End of image_to_text output')
            extracted_fields = ""
            if (imagetext != ""):
                extracted_fields = extract_fields_from_text(imagetext)
                print('extracted fields: '+ extracted_fields)
                # Load the text as JSON
                data = json.loads(extracted_fields)
                print(data)
                # Extract the fields
                sent_from = data.get("Sent from")
                subject = data.get("Subject")
                date_received = data.get("Date Received")
                category = data.get("Category")
                tags = data.get("Tags")
                actions = data.get("Actions")
                preview = data.get("Preview")
                sent_to = data.get("Sent to")
                notes = data.get("Notes")
                # Print the extracted fields
                print("Sent from:", sent_from)
                print("Subject:", subject)
                print("Date Received:", date_received)
                print("Category:", category)
                print("Tags:", tags)
                print("Actions:", actions)
                print("Preview:", preview)
                print("Sent to:", sent_to)
                print("Notes:", notes)
                date_uploaded = datetime.datetime.now()
                add_letter(userid,sent_from,subject,date_received,date_uploaded,category,tags,actions,preview,sent_to,file_path,imagetext,notes)

                #Extract specific fields using regular expressions
               # try:
               #     sent_from = re.search(r"Sent from: (.+)", extracted_fields).group(1)
               #     print('sent_from')
               #     subject = re.search(r"Subject: (.+)", extracted_fields).group(1)
               #     print('subject')
               #     date_received = re.search(r"Date Received: (.+)", extracted_fields).group(1)
               #     print('date received')
               #     date_uploaded = datetime.datetime.now()
               #     print('date uploaded')
               #     category = re.search(r"Category: (.+)", extracted_fields).group(1)
               #     tags = re.search(r"Tags: (.+)", extracted_fields).group(1)
               #     actions = re.search(r"Actions: (.+)", extracted_fields).group(1)
               #     preview = re.search(r"Preview: (.+)", extracted_fields).group(1)
               #     sent_to = re.search(r"Sent to: (.+)", extracted_fields).group(1)
               #     notes = re.search(r"Notes: (.+)", extracted_fields).group(1)
        
               #     add_letter(userid,sent_from,subject,date_received,date_uploaded,category,tags,actions,preview,sent_to,file_path,imagetext,notes)
               # except AttributeError :
               #     traceback.print_exc()
               #     return extracted_fields
            else:
                print('error processing fields')
            currentfile = file
            letter = process_letterentry(currentfile, file_path, filename)
  
            
            # Save file data to the database  
            db = get_db()
            with db:
                db.execute("INSERT INTO files (filename, filepath) VALUES (?, ?)", (filename, file_path))
            print ('File saved to database successfully')
            
            #return jsonify({'message': 'File uploaded successfully'+extracted_fields}), 200
            return jsonify( extracted_fields), 200
        
        else:
            return jsonify({'error': 'Invalid file type'}), 400
    
    except Exception as e:
        print (str(e))
        return jsonify({'error': str(e)}), 500



if __name__ == '__main__':
    #init_db()  # Initialize the database
    create_tables()
    app.run(port=443, host="0.0.0.0", ssl_context=('cert.pem', 'key.pem'))
    
