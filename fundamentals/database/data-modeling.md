**Table of contents** 
${toc}

# Data Modeling 
## Three Stages of Database Management 
There are 3 main stages of database management:
1. Requirements Analysis Stage  
2. Component Design Stage 
3. Implementation Stage

### Requirements Analysis Stage
The main objective of this stage is to **understanding the data problem**. 

There are various sources of requirements: 
- Forms 
- User interviews 
- Uses cases 
- Business Rules 
- Reports
- JAD (Joint Application Developmen) session

After the requirements have been gathered, they are transformed into an **Entity Relationship (E-R) Data Model**

> Sum up, requirements will be transformed into a data model (Entity Relationship Diagram)

## Entity Relationship (E-R)
This model consists of:
- Entities 
- Attributes
    - Identifiers (Keys)
    - Non-key attributes 
- Relationships
### Entity Class and Entity Instance 
An entity class is a description of the structure and format of the occurences of the entity. 

Meanwhile, an entity instance is a specific occurence of an entity class.

Let's have a look at an example:

**This is an entity class** 

| Item           |
|----------------|
| ItemNumber     |
| Description    |
| Cost           |
| ListPrice      |
| QuantityOnHand |

**And these are entity instances**

| ItemA         |
|---------------|
| 1100          |
| 100 amp panel |
| $127.50       |
| $170.00       |
| 2             |

| ItemB          |
|----------------|
| 1100           |
| 100 wood plank |
| $127.50        |
| $190.00        |
| 4              |

### Attributes 
Entities have attributes that together describe the entity, and each attribute has a **data type**  and other properties.

There are two types of attributes:
- Key attributes: identifiers 
- None-key attributes: normal attribute 

#### Identifiers (Keys)
Entity instances have identifiers (keys), and keys are **a type of attribute!**. A key will identify a specific instace in the entity class such ass 
- studentID
- employeeID
- emailAddress
- socialSecurityNumber

### Relationships
Entities can be connected to each other in relationships. 

The degree of the relationship is the number of entity class that paritipate in the relation ship 
- Degree 1: unary relationship
- Degree 2: binary relationship 
- Degree 3: ternary relationship

There are 3 main types of relationships: 
- One to one 
- One to many 
- Many to many

### Strong and Weak Entities
So what is a weak entity ? 

**Weak entity** is an entity whose instances can't exist in the database without the existence of an instance of another entity. 

Any entity that is not a weak entity is called a **a strong entity**. 
> Instances of a strong entity can exist in the database **INDEPENDENTLY** 
