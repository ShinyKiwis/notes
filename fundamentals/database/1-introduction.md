**Table of contents** 
${toc}
# Introduction 
I don't know how you reach this notes, maybe you are me from the future, trying to review database knowledge or you are someone who come across my notes from my blog. 
Fun fact, at the time I was writing this note, i haven't decide the name for my blog.

Anyway, these notes are my little journey, trying to relearn database, I have participated in a database course in my university, but I have soon forgotten most of the theory.

Therefore, you will see my notes for this journey, relearn everything I could for better understanding in this crucial topic. There are many books writing about database outthere, a lot of them are written in academic style with lengthy sentences cause confusing for readers. 

I will try my best to write everything in informal way and easy to understand as well as remember, I was planning to create a system for creating cards to review what we have learnt for different topics, but I don't have time for that at this moment.

Berfore we start, the reference book can be bought at:

[Database Systems: Design, Implementation, & Management ](https://www.amazon.com/Database-Systems-Design-Implementation-Management/dp/1337627909) 

Let's get started.

# Why databases ?
Before learning about database, we have to know why we need database. Everything we do daily involving some type of database. 
For example, you go to a grocery store to  buy something, there must be a way to store the product name, price, information about it, even some stores store your orders.

In today's world, data is **ubiquitous (That word is surely rare to see in daily life)** and **pervasive (Another scary word)**: 
- ubiquitous: abundant, global, everywhere
- pervasive: unescapable, prevalent, presistent

The day we were born, we have begun to generate and consume data, from your birth certificate and continues all the way to a death certificate. That process produces and consumer an enormous amounts of data. **Database is the best way to store and manage the data**, with database data is **persistent**, and **shareable** in secure way.

Data is not only ubiquitous and pervasive, it is also essential for organizations to survive and prosper. You can imagine running a business without knowing who your customers are, what products you are selling, what the prices are; literally, you  can't do anything at all.

However, one important thing makes data valuable is the information we get from it, organizations have to store data, quickly retrieve them, but also have to derive some meaning from it, otherwise, we are just wasting our storage. Thus, it is important to understand the difference betwen data and information.

# Data versus Information
I will start this section with two definitions 
| Terminology | Definition                                                                               |
|-------------|------------------------------------------------------------------------------------------|
| Data        | Raw facts, or facts that have not yet been processed to reveal their meaning to end user |
| Information | The result or processing raw data to reveal its meaning                                  |

Let's have an example, an university collect grades of many students in different subject. They may have an automatic system or a form for students to fill in. Although after that process, the university have something call **facts** in their hand, those facts are not useful at all. Why ? Simply, it just numbers without any meaning.

Reading those numbers doesn't provide much insight about students' perfomance, we may know student A have high grade in math, low grade in soft skill, ...
We have to process and summarize the percentage of students with high grade, to know how everyone is doing, that is what we call **information**.

But as you can see to reveal the meaning, information requires **context**, if we don't know those numbers are grade, what do you think those numbers can be ? Number of exercise students do everyday for that subject ? Number of classes for that course ?  

Lastly, keep in mind that **raw data must be properly formatted for storage, processing and presentation.** 

Finally,data is the foundation of information, which is the bedrock of **knowledge**, that is the body of information and facts about a specific subject. Knowledge implies familiarity,  awareness, and understanding of information as it applies to an environment.

**Summary** 
- Data constitutes the building blocks of information 
- Information is produced by processing data 
- Information is used to reveal the meaning of data 
- Accurate, relevant, and timely information is the key to good decision making
- To survive in this harsh global environment, we need good decision making

# Introduction the Database
In last section, we stated that "Raw data must be properly formatted for storage, processing and presentation", but effecient data management requires the use of a computer database. So what is database ? 

| Terminology | Definition                                                                           |
|-------------|--------------------------------------------------------------------------------------|
| Database    | A shared, integrated  computer structure that  houses a collection of  related data. |

A database contains two types of data:
- end-user data (raw facts)
- metadata: data baout data, though which the end-user data is integrated and managed

When I studied this course with my lecturer, I was very confuse about the term **data about data**, but now I will try to understand it.

The meta data describes the data characteristics and the set of relationships that links the data found within the database. Let's have an example.

The metadata component stores information such as the name of each data element, type of values (numeric, dates or text) stored on each data element, and whether the data element can be left empty.

That example clears everything!

Another terminology worth knowing is **database management system**, it is a collection of programs that manages the database structure and controls access to the data stored in the database.

## Role and Advantages of the DBMS
DBMS serves as the intermediary between the user and the database. The  database structure itself is stored as a collection of files, and the only way to access  the data in those files is through the DBMS.

A DBMS provides these advantages:
- **Improved data sharing:** It helps create an enviroment in which end users have better access to more and better-managed data.
- **Improved data security** 
- **Better data integration:** **Data integrity**: although putting this here is not accurate but, I want to take note that data integrity means the following things: 
    - Data is accurate: not data inconsistencies 
    - Data is verifiable: data will always yield consistent results
- **Minimized data inconsistency**: 
    - **Data inconsistency** exists when different versions of the same data appear in different places. 
    - **Data redundancy** exists when the same data is stored unnecessarily at different places.
- **Improved data access:** The DBMS makes it possible to produce quick answers to ad hoc queries.
- **Improved decision making** 
- **Increased end-user productivity** 

But what is **query** and **ad hoc query** means ?
- **Query:** a specific request issued to the  DBMS for data manipulation
- **Ad hoc query:** A “spur-of-the-moment” question. I come across this "spur" thing, I simply roll my eyes, what is this ?? (“spur-of-the-moment”: a decision, action done without planning in advance)

## Types of Databases 

Database can be classified by:
- Number of users supported
- Where the data is located 
- Type of data stored 
- The intended data usage 
- The degree to which the data is structued (unstructured, structured, semistructured)

| Database                     | Definition                                                                                                                                                      |
|------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Single-user database         | A database that supports  only one user at a time.                                                                                                              |
| Desktop database             | A single-user database runs on a personal database                                                                                                              |
| Multiuser database           | A database that supports  multiple concurrent  users.                                                                                                           |
| Workgroup database           | A multiuser database  that usually supports  fewer than 50 users or  is used for a specific  department in an  organization.                                    |
| Enterprise database          | The overall company  data representation,  which provides support  for present and expected  future needs.                                                      |
| Centralized database         | A database located at a  single site.                                                                                                                           |
| Distributed database         | A logically related  database that is stored in  two or more physically  independent sites.                                                                     |
| Cloud database               | A database that  is created and  maintained using  cloud services, such  as Microsoft Azure  or Amazon AWS.
| General-purpose database     | A database that contains  a wide variety of  data used in multiple  disciplines.                                                                                |
| Discipline-specific database | A database that contains  data focused on specific  subject areas.                                                                                              |
| Operational database         | A database designed  primarily to support a  company’s day-to-day  operations. Also known  as a transactional database, OLTP database, or  production database. |
| Analytical database          | A database focused primarily on storing historical  data and business metrics  used for tactical or strategic decision making.                                  |
| Data warehouse               | A specialized database  that stores historical  and aggregated data in  a format optimized for  decision support.                                               |

# Data Anomalies
If you follow the reference books with me, you will see I have skipped a lot of pages since they are for reading purposes, you can go read it in the book, the notes will become length and boring if includes those information (Ah information).

Now, let's talk about anomalies, the dictionary defines *anomaly* as "an abnormality". Ideally, a field value change should  be made in only a single place. Data redundancy, however, fosters an abnormal condition by forcing field value changes in many different locations.

There are three commons anomalies:

| Anomaly type   | Definition                                                                                                                                                   |
|----------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Update Anomaly | An update anomaly occurs when updating a piece of data in a database results in inconsistencies within the data                                              |
| Insertion Anomaly | An insertion anomaly occurs when it is not possible to insert a piece of data into the database without adding additional, unrelated data.                   |
| Deletion Anomaly | A deletion anomaly occurs when deleting a record or piece of data from a database unintentionally removes other related data that should have been preserved |

Let's have a look at each anomaly's example:

- **Update Anomaly:** Consider a database table that stores employee information, including the department they belong to. If an employee's department is updated in one record but not updated in all related records, it can lead to a mismatch or contradiction in the data. 
- **Insertion Anomaly:** Suppose you have a database table to store customer orders, and one of the columns represents the customer's shipping address. If a new customer places an order, but they don't have a shipping address yet, you might be required to add a null or default value for the address, which can lead to inconsistency.
- **Deletion Anomaly:** Imagine a database table that contains information about courses and students enrolled in each course. If you delete a course record, but that course is the only one taken by a specific student, you might unintentionally delete the student's information as well.

For more example, visit the following links:
- [Database Anomalies](https://www.scaler.com/topics/anomalies-in-dbms/) 
