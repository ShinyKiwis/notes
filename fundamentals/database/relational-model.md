**Table of contents** 
${toc}

# Relation Models
## Entity
An entity is something of importance to a user or organization that needs to be represented in a database 

It can represent one theme, topic or business concept.

In the entity-relationship model, entities are restricted to things that can be represented using a single table.

For example: To track Employee entity, we can store the employee id, the name, the phone number

| Employee ID | Name | Phone number |
|-------------|------|--------------|
| 1000        | John | 3000         |

## Relation 
A relation is a two-dimensional table that has specific characteristics, it like a matric consitst of rows and columns.

> A relation is a table.

Some characteristics of the relation:
- Rows contain data about instances of an entity 
- Columns contains attribute of the entity
- All data in one column are of same kind (data type)
- Each column must be unique
- The order of rows, columns is unimportant
- No two rows can be identical
## Terminology
These are synonyms 
| Table         | Row            | Column    |
|---------------|----------------|-----------|
| File (rarely) | Record         | Field     |
| Relation      | Tuple (rarely) | Attribute |

## Keys
A key is one (or more) columns of a relation whose values are used to identify a row.

### Uniqueness of keys 
| Unique Key                           | Nonunique Key                               |
|--------------------------------------|---------------------------------------------|
| Data value is unique for each row    | Data value may be shared among several rows |
| The key will uniquely identify a row | The key will identify a set of rows         |
| Employee ID                         | Department ID                               |
### Types of keys

``` dot
digraph G {
  "Database Keys" -> Unique;
  "Database Keys" -> "Non-Unique";
  Unique -> "Candidate
Key";
  Unique -> "Composite 
Key";
  Unique -> "Primary 
Key";
  Unique -> "Surrogate 
Key";
  "Non-Unique" -> "Forein 
Key";

  "Database Keys" [shape=box];
}
```

#### Composite Key 
A composite key is a key that is composed of two or more attributes.

For a key to be unique, it must often become a composite key.

Let's have an example, asumming an airpot managing multiple flights a day. They have a plane with ID of `UA 36`. If letting the ID alone be the key, how can they manage since every day have the flight of this plane, they have to compose it with another information such as `Data`

| Flight Number | Date        |
|---------------|-------------|
| UA 36         | 03 Sep 2023 |
| AA 704        | 31 OCt 2023 |
| UA 36         | 04 Sep 2023 |
| BA 9          | 31 Oct 2023 |

Using these two columns combined, we can identify unique records.

#### Candidate Key 
A candidate key is called "candidate" because it has the potential to become the **primary key** and it is unique. 

#### Primary Key 
A primary key is a candidate key chosen to be the main key for the relation (main identifier)

If we know the value of the primary key, we will be able to uniquely identify a single row within the table.

Let's have an example:
| Employee Number | First Name | Last Name |
|-----------------|------------|-----------|
| 100             | Yousef     | Hassan    |
| 101             | John       | Doe       |
| 102             | Alex       | Doe       | 

If we know the `Employee Number`, we will be able to identify the single employee with that number.

#### Surrogate Key
A surrogate key is a unique, numeric value that is added to a relatiopn to serve as the primary key. This key values have no meaning to the users and are usually hidden on forms, queries and reports.

A surrogate key is often used in place of composite primary key.

In the previous example:
| Employee Number | First Name | Last Name |
|-----------------|------------|-----------|
| 100             | Yousef     | Hassan    |
| 101             | John       | Doe       |
| 102             | Alex       | Doe       |

The `Employee Number` is a primary key and this type of primary key is called a **surrogate key**.

## Relationships between tables 
A table may be related to other tables, in this concept we will discuss about **foregin key**. 

For example:
- An Employee works in a Department
- A Manager controls a Project
### Forein key (Non-Unique)
To establish relationships, we need to implement a foregin key. 

Forein key is a primary key from one table that is placed into another table.

That key is called a foregin key in the table that receives the key.

Let's have an example:

| Project      |
|--------------|
| Project ID   |
| Project Name |
| Manager ID   |

| Manager      |
|--------------|
| Manager ID   |
| Manager Name |

As we can see, the `Manager ID` appear in the `Manager` table as well as `Project`.

## Referential Integrity
Referential Integrity states that every value of a foregin key **must** match a value of an existing primary key. 

## Null Values 
Null value means that no data exists, or we can think of a null value as an empty cell in the table. 

This is different from a zero, space character, empty string or tab character!

The problem with it is ambiguity, it could means:
- The column value is not approriate for the specific row 
- The column value has not beed decided
- The column value is unknown.

> Each may have different implications.


## Functional Dependency
A relationship between attributes in which one attribute (or group of attributes) determines the value of another attribute in the same table. 

Illustration:

The price of one delicious Girl Scout cookie can determine the price of a box of 12 cookies

$(CookiePrice,Quantity) -> BoxPrice$

The attribute (or attributes) that we use as the starting point ( on the left side of the equaiton ) is called a **determinant**. Since we can use them to determine the value of the value on the right.

### Candidate/Primary Keys and Functional Dependency
By definition, a candidate key of a relation will functionally determine all other non-key attributes in the row. Likewise, by definition, a primary key of a relation will functionally determine all other non-key attributes in the row also.

Let's have some example:

$(EmployeeID) -> (EmpLastName, EmpPhone)$

or 

$(ProjectID) -> (ProjectName, StartDate)$

## Data Normalization (Introduction)

A process of analyzing a relation to ensure that it is well formed. Normalization involves decomposing relations with anomalies to produce smaller, well-structured relations. 

More specifically, if a relation is normalized (well-formed), rows can be inserted, deleted, or modified without creating anomalies.

Data anomalies contains:
- Deletion anomalies
- Update anomalies 
- Insertion anomalies

## Normalization Principles 
Relational design principles for normalized relations:
- To be a well-formed relation, every **determinant** must be a candidate key 
- Any relation that is not well-formed shoukd be broken into two or more well-formed relations! 

> As a general rule, a well-formed relation will not encompass more than one business concept!

Let's have a simple example:

$(StudentID) -> (StudentName, DormName, DormCost)$

However, if ...

$(DormName) -> (DormCost)$

Then DormCost should be placed into its own relation, resulting in the relations.

$(StudentID) -> (StudentName, DormName)$

$(DormName) -> (DormCost)$
## Normalization Steps 
1. Table with multivalued attributes 
-> Remove multivalued attributes 
2. First Normal Form (1NF)
-> Remove partial dependencies 
3. Second Normal Form (2NF)
-> Remove transitive dependencies
4. Third Normal Form (3NF)

### First Normal Form 
Table contains no multivalued attributes 
-> Every attribute value is atomic 

All relation are in First Normal Form.
### Second Normal Form
1NF plus every non-key attribute is fully functionally dependent on the entire primary key. 
- Every non-key attribute must be defined by the entire key, not by only part of the key. 
- No partial dependencies

### Third Normal Form 
2NF plus no transitive dependencies (functional dependencies on non-primary-key attributes)
- Such dependencies are called transitive because the primary key is a determinant for another attribute, which in turn is a determinant for another non-key attribute.

Solution: Non-key determinant with transitive dependencies goes into a new table, non-key determinant becomes primary key in the new table and remains as a foregin key in the old table.
