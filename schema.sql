-- schema.sql

-- Create a table to store file information
CREATE TABLE IF NOT EXISTS letter (
    id INTEGER PRIMARY KEY,
    filename TEXT NOT NULL,
    filepath TEXT NOT NULL,
    title TEXT NOT NULL,
    category TEXT NOT NULL,
    sender TEXT NOT NULL,
    dateandtime DATETIME NOT NULL,
    originalimage BLOB NOT NULL
);
