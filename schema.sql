-- schema.sql
--note this used to be a "files" table. current code references much smaller table
-- Create a table to store file information
CREATE TABLE IF NOT EXISTS letterproperties (
    id INTEGER PRIMARY KEY,
    letterfilename TEXT NOT NULL,
    letterfilepath TEXT NOT NULL,
    sentfrom TEXT NOT NULL,
    lettersubject TEXT NOT NULL,
    datereceived DATETIME NOT NULL,
    dateuploaded DATETIME NOT NULL,
    category TEXT NOT NULL,
    tags TEXT NOT NULL,
    actions TEXT NOT NULL,
    preview BLOB NOT NULL,
    sentto TEXT NOT NULL,
    sourceimage BLOB NOT NULL,
    searchablecontent TEXT NOT NULL,
    notes TEXT NOT NULL
);
