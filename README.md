ASSIGNMENT:
 create a phonebook API which will enable a user to save a persons details edit and delete also assign a person to a certain group. persons details include full name, mobile number ,work number, email, home address and group id

 looking at our file structure we created one file named src to carry all the api's logic which include the controllers and routes.

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


//Sample data for  group and contact tables


INSERT INTO groups (id, GroupName, Descriptions) VALUES
(1, 'Group 1', 'Description 1'),
(2, 'Group 2', 'Description 2'),
(3, 'Group 3', 'Description 3'),
(4, 'Group 4', 'Description 4'),
(5, 'Group 5', 'Description 5'),
(6, 'Group 6', 'Description 6'),
(7, 'Group 7', 'Description 7'),
(8, 'Group 8', 'Description 8'),
(9, 'Group 9', 'Description 9'),
(10, 'Group 10', 'Description 10');


INSERT INTO Contacts (id, fullName, email, mobileNo, workNo, address, groupId) VALUES
(1, 'John Doe', 'john.doe@example.com', '1234567890', '0987654321', '123 Main St', 1),
(2, 'Jane Smith', 'jane.smith@example.com', '9876543210', '0123456789', '456 Elm St', 2),
(3, 'David Johnson', 'david.johnson@example.com', '4561237890', '9876543210', '789 Oak St', 1),
(4, 'Emily Davis', 'emily.davis@example.com', '7890123456', '5432109876', '321 Maple Ave', 3),
(5, 'Michael Wilson', 'michael.wilson@example.com', '5678901234', '6789012345', '567 Pine Rd', 2),
(6, 'Sarah Brown', 'sarah.brown@example.com', '8901234567', '3456789012', '890 Cedar Ln', 1),
(7, 'Andrew Miller', 'andrew.miller@example.com', '2345678901', '9012345678', '234 Birch Dr', 3),
(8, 'Olivia Taylor', 'olivia.taylor@example.com', '9012345678', '2345678901', '678 Walnut Ave', 2),
(9, 'James Anderson', 'james.anderson@example.com', '3456789012', '8901234567', '901 Oakwood Blvd', 1),
(10, 'Sophia Martinez', 'sophia.martinez@example.com', '6789012345', '5678901234', '123 Elmwood Ln', 3);
