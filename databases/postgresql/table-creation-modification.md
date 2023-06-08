**Table of contents** 
${toc}

Before going further, please note that, these notes are just for syntax purposes, for better explanation visit the official documentation of PostgreSQL

# Table Creation and Modification
## Table Creation 
```sql 
CREATE TABLE ingredients (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  title VARCHAR ( 255 ) UNIQUE NOT NULL
);
```
There are two things, I want to take notes here:
- `PRIMARY KEY`: This mean `id` value will be used as a primary key 
- `GENERATED ALWAYS AS IDENTITY`: When inserting or deleting the table records, this field will be updated/created automatically by the DBMS

## Table Modification
### Table Insertion
To insert something, we will use `INSERT INTO`. 

For example:
```sql
INSERT INTO ingredients (title) VALUES ('pepper');
```
### Table Deletion 
Simply drop it, however please becareful when doing this.
```sql 
DROP TABLE <table-name>;
```
### Table Alteration
```sql 
ALTER TABLE ingredients ADD COLUMN image VARCHAR ( 255 );

# for multiple columns 
ALTER TABLE ingredients
ADD COLUMN image VARCHAR ( 255 ),
ADD COLUMN type VARCHAR ( 50 ) NOT NULL DEFAULT 'vegetable';
```

There are again two things worth noticing here:
- Why should we add 2 columns at the same time ?
- Why there is a `DEFAULT` value in the `type` column ?
#### Why should we add 2 columns at the same time ?
When operating something on the production, we want to have a transaction here, or in other words, if something works, they have to all works, if they don't, all don't work, we must not allow **partially work**. Since if all wrong, we can redo it without any problems.

#### Why there is a `DEFAULT` value in the `type` column ?
As you can see fro the code this column is `NOT NULL`, but when we altering it, the existing records will now have a `NULL` value for this column, so that is why we need to specifiy a `DEFAULT` value, so we can later modify it.
