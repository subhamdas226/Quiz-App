CREATE TABLE CANDIDATE(
CandidateId NUMBER (11) NOT NULL PRIMARY KEY,
Name VARCHAR (50) NOT NULL,
Email VARCHAR (50) NOT NULL,
Score VARCHAR (30) NOT NULL,
TimeSpent NUMBER NOT NULL
);
SELECT * FROM CANDIDATE;
CREATE SEQUENCE seq_candidate
minvalue 500
start with 500
increment by 1
cache 1000;

CREATE OR REPLACE TRIGGER candidate_trigger 
BEFORE INSERT 
ON CANDIDATE
REFERENCING NEW AS NEW 
FOR EACH ROW 
BEGIN 
SELECT seq_candidate.nextval INTO :NEW.CandidateId FROM dual; 
END;


CREATE TABLE QUESTION(
QnId NUMBER (11) NOT NULL PRIMARY KEY,
Qn VARCHAR (250) NOT NULL,
ImageName VARCHAR (50) NOT NULL,
Option1 VARCHAR (250) NOT NULL,
Option2 VARCHAR (250) NOT NULL,
Option3 VARCHAR (250) NOT NULL,
Option4 VARCHAR (250) NOT NULL,
Answer NUMBER NOT NULL
);
SELECT * FROM QUESTION;
CREATE SEQUENCE seq_qn
minvalue 500
start with 500
increment by 1
cache 1000;

CREATE OR REPLACE TRIGGER qn_trigger 
BEFORE INSERT 
ON QUESTION
REFERENCING NEW AS NEW 
FOR EACH ROW 
BEGIN 
SELECT seq_qn.nextval INTO :NEW.QnId FROM dual; 
END;

INSERT INTO QUESTION (QnID, Qn, ImageName, Option1, Option2, Option3, Option4, Answer) 
    VALUES (1, N'What does HTML stand for?', 'NULL', N'Hyper Trainer Marking Language', N'Hyper Text Marketing Language', N'Hyper Text Markup Language', N'Hyper Text Markup Leveler', 2);

INSERT INTO QUESTION (QnID, Qn, ImageName, Option1, Option2, Option3, Option4, Answer) 
    VALUES (2, N'In Java, a method is a container that holds classes.', 'NULL', N'True', N'False', 'NULL', 'NULL', 1);

INSERT INTO QUESTION (QnID, Qn, ImageName, Option1, Option2, Option3, Option4, Answer) 
    VALUES (3, N'Who invented the first computer ?', 'NULL', N'Charles Babbage', N'Linus Torvalds', N'Dennis Ritchie', N'James Gosling', 0);
    
INSERT INTO QUESTION (QnID, Qn, ImageName, Option1, Option2, Option3, Option4, Answer) 
    VALUES (4, N'Which of the following languages is more suited to a structured program?', 'NULL', N'FORTRAN', N'BASIC', N'PASCAL', N'PL/1', 2);
    
INSERT INTO QUESTION (QnID, Qn, ImageName, Option1, Option2, Option3, Option4, Answer) 
    VALUES (5, N'The brain of any computer system is', 'NULL', N'ALU', N'Memory', N'CPU', N'Control unit', 2);
    
INSERT INTO QUESTION (QnID, Qn, ImageName, Option1, Option2, Option3, Option4, Answer) 
    VALUES (6, N'Which of the following computer language is used for artificial intelligence?', 'NULL', N'FORTRAN', N'PROLOG', N'C', N'COBOL', 1);
    
INSERT INTO QUESTION (QnID, Qn, ImageName, Option1, Option2, Option3, Option4, Answer) 
    VALUES (7, N'Which of the following is the 1''s complement of 10?', 'NULL', N'01', N'110', N'11', N'10', 0);
    
INSERT INTO QUESTION (QnID, Qn, ImageName, Option1, Option2, Option3, Option4, Answer) 
    VALUES (8, N'The binary system uses powers of', 'NULL', N'2', N'10', N'8', N'16', 0);
    
INSERT INTO QUESTION (QnID, Qn, ImageName, Option1, Option2, Option3, Option4, Answer) 
    VALUES (9, N'A computer program that convert sassembly language to machine language is', 'NULL', N'Compiler', N'Interpreter', N'Assembler', N'Comparator', 2);
    
INSERT INTO QUESTION (QnID, Qn, ImageName, Option1, Option2, Option3, Option4, Answer) 
    VALUES (10, N'You can add a row using SQL in a database with which of the following?', 'NULL', N'ADD', N'CREATE', N'INSERT', N'MAKE', 2);
    
INSERT INTO QUESTION (QnID, Qn, ImageName, Option1, Option2, Option3, Option4, Answer) 
   VALUES (11, N'The SQL keyword(s)________ is used with wildcards.', 'NULL', N'LIKE only', N'IN only', N'NOT IN only', N'IN and NOT IN', 0);
    
INSERT INTO QUESTION (QnID, Qn, ImageName, Option1, Option2, Option3, Option4, Answer) 
    VALUES (12, N'SQL query and modification commands make up a(n)', 'NULL', N'DDL', N'DML', N'HTML', N'XML', 1);

INSERT INTO QUESTION (QnID, Qn, ImageName, Option1, Option2, Option3, Option4, Answer) 
    VALUES (13, N'Inside which HTML element do we put the JavaScript?', 'NULL', N'<javascript>', N'<js>', N'<scripting>', N'<script>', 3);
    
INSERT INTO QUESTION (QnID, Qn, ImageName, Option1, Option2, Option3, Option4, Answer) 
    VALUES (14, N'The external Java Script file must contain the <script> tag.', 'NULL', N'True', N'False', 'NULL', 'NULL', 1);
    
INSERT INTO QUESTION (QnID, Qn, ImageName, Option1, Option2, Option3, Option4, Answer) 
    VALUES (15, N'How can you add a comment in a JavaScript?', 'NULL', N'''This is a comment', N'<!--This is a comment-->', N'//This is a comment', 'NULL', 2);
    
INSERT INTO QUESTION (QnID, Qn, ImageName, Option1, Option2, Option3, Option4, Answer) 
    VALUES (16, N'Name the following device.', N'q16.jpg', N'Graphics card', N'Keyboard', N'CPU', N'Mouse', 3);

INSERT INTO QUESTION (QnID, Qn, ImageName, Option1, Option2, Option3, Option4, Answer)
    VALUES (17, N'Following picture represnts.', N'q17.png', N'Full Outer Join', N'Left Join', N'Right Join', N'Inner Join', 3);
