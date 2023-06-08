**Table of contents**
${toc}

# Table Deletion
To delete records from table, we need the table name and the condition from which statisfied record will be deleted.

```sql 
DELETE FROM ingredients
WHERE image='different.jpg'
RETURNING *;
```

The last line of `RETURNING` means that, we can confirm what record was deleted, we can use `*`, instead of explicitly specify everything.
