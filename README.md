ASSIGNMENT:
 create a phonebook API which will enable a user to save a persons details edit and delete also assign a person to a certain group. persons details include full name, mobile number ,work number, email, home address and group id

 Before using the API create this:
CREATE DATABASE phoneBook;

create table groups
	(id int primary key,
	GroupName varchar(20),
	Descriptions varchar(20)
);

create table Contacts
	(id int primary key,
	fullName varchar(100),
	email varchar(255),
	mobileNo varchar(20),
	workNo varchar(20),
	address varchar(20),
	groupId int, 

FOREIGN KEY(groupId) REFERENCES groups(id)
);