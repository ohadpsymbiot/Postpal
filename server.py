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
    "Miscellaneous",
    "Custom Categories"
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
	

def process_letterentry(currentfile, file_path,filename):
	print ('processing letter entry for file: '+currentfile.filename+' original and generated: ' +filename)
	ltr = letterentry(filename,file_path, 'TBD','General','Unknown') 
	return ltr

def image_to_text(filepath):
    print('processing OCR for file: '+filepath)
    # Load image
    img = cv2.imread(filepath)

    # Convert image to grayscale
    gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)

    for i in range(3):
        rotate_img = cv2.rotate(gray, cv2.ROTATE_90_CLOCKWISE)
        gray = rotate_img
        # Apply threshold to convert to binary image
        threshold_img = cv2.threshold(gray, 0, 255, cv2.THRESH_BINARY + cv2.THRESH_OTSU)[1]
        adaptiveimage = cv2.adaptiveThreshold(threshold_img,255,cv2.ADAPTIVE_THRESH_GAUSSIAN_C,\
                cv2.THRESH_BINARY,11,2)
        
        # Pass the image through pytesseract
        result_text = pytesseract.image_to_string(adaptiveimage)
        print('Result text is: '+result_text)
    return result_text 

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
        print (request.files)
        if 'picture' not in request.files and 'uploadedfile' not in request.files:
            print ('error no pictur eor uploadedfile part')
            return jsonify({'error': 'No file part'}), 400
        
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
            print(file_path)
            file.save(file_path)
            print ('File saved to local filesystem successfully')
            str = image_to_text(file_path)
            print('image_to_text output: '+str)
            currentfile = file
            letter = process_letterentry(currentfile, file_path, filename)
            print (letter.filename)
            print (letter.title)
            print (letter.category)
            print (letter.sender)

            
            # Save file data to the database  
            db = get_db()
            with db:
                db.execute("INSERT INTO files (filename, filepath) VALUES (?, ?)", (filename, file_path))
            print ('File saved to database successfully')
            
            return jsonify({'message': 'File uploaded successfully'}), 200
        else:
            return jsonify({'error': 'Invalid file type'}), 400
    
    except Exception as e:
        print (str(e))
        return jsonify({'error': str(e)}), 500


#@app.route('/')
#def display_image():
 #   return render_template('index.html', image=encoded_image)


if __name__ == '__main__':
    init_db()  # Initialize the database
    
    app.run(port=443, host="0.0.0.0", ssl_context=('cert.pem', 'key.pem'))
