**Table of contents** 
${toc}

# Introduction
## Purpose of a Database 
The purpose of database is:
- To store data 
- To provide an organizational structure for data 
- To provide a mechanism for querying, creating, modifying, and deleting data 

A database can store information and relationships that are more complicated than a simple list.
## Problems with using lists 
### Redundacy
In a list, each row is intended to stand on its own. As a result, the same information 
may be entered several times.

For example, a list of projects may include the project manager's name, ID and phone extension.

If a particular person is currently managing 10 projects, his/her information would appear in the list 10 times. 

| Project Manager | Manger ID | Phone Extension |
|-----------------|-----------|-----------------|
| Dan             | 3         | x7270           |
| Dan             | 3         | x7270           |
| Dan             | 3         | x7270           |
| Cho             | 2         | x2114           |

### Multiple Themes
In a list, each row may contain information on more than one theme or business concept.

As a result, certain information might appear in the list only if information about other themes or business concepts is also present.

For example, a list of projects may include project manager information (name, id, phone extension) and project information (project name, id, start date, budget) in same row.

| Project Manager | Manager ID | Phone Extension | Project Name | Project ID | Start Date  | Budget |
|-----------------|------------|-----------------|--------------|------------|-------------|--------|
| Dan             | 3          | 0x7270          | Os upgrade   | 102        | 01 May 2023 | $12000 |

### Modication issues
There are three problems for modification:
- Deletion problems 
- Update problems 
- Insertion problems 
#### Deletion problems
When deleting some information, you can't partially delete it but have to delete whole row (record), containing other information that aren't necessary to delete.

For example:
| ID  | Name     | Department | Department ID | Phone number |
|-----|----------|------------|---------------|--------------|
| 101 | John Doe | English    | E1001         | 2000         |

Assume we want to delete just John Doe, we will also delete the information of English department 

#### Update problems 
When updating some information, due to **redundacy**, same information appear multiple times, updating it require updating it in multiple records.

For example:

| ID  | Name     | Department | Department ID | Phone number |
|-----|----------|------------|---------------|--------------|
| 101 | John Doe | English    | E1001         | 2000         |
| 102 | Alex Doe | English    | E1001         | 2000         |

As you see, we have to update English department's phone number in two records instead of one.

#### Insertion problems 
With the example, you see if we just want to add department information, we will have to leave the employee information empty, but these information are stored together.

## Relational Database 
Relational database stores information in tables. Each information theme (business concept) is stored in its own table. 

In essence, a relation database will break-up a list into several parts:
- One part for each theme in the list 
- For example, a Project list might be divided into a CUSTOMER table, a PROJECT table, and a PROJECT MANAGER table.

In relational database, as we broke the information into multiple tables. Somehow table must be joined back together to extract required information.

Tables are joined together using **matched pairs** of data values.

## Database Systems 
There are four components of a database system: 

**Users**

The people who are using the database application

**Database Application(s)**

A database application is a set of one or more computer programs or webssites that server as an intermediary between the user and the DBMS

**Database Management System(DBMS)**

DBMS serves as an intermediary between database applications and the database 

DBMS does several things:
- Manages and controls database activities 
- Creates, processes and administers the database it controls

One important thing, a DBMS can enforce many constraints such as **referential integrity constrants**. This constraint ensure that the values of a column in one table are valid based on the values in another table.

For example, if a 5 was entered as a CustomerID in the PROJECT table, then a Customer having a CustomerID value of 5 **must** exist in the CUSTOMER table. 

**Database** 

Database is a *self-describing* collection of related records

Self-describing: 
- The database itself contains the definition of its structure 
- **Metadata** are data describing the structure of the data in the database
