**Table of contents** 
${toc}

# Table Update 
To update a record in the table we use `UPDATE`, SQL is so straight-forward.

For example:

```sql 
UPDATE ingredients SET image = 'watermelon.jpg' WHERE title = 'watermelon';
```

In case, you want to return the updated data we can modify the command as following:

```sql 
UPDATE ingredients SET image = 'watermelon.jpg' WHERE title = 'watermelon' RETURNING id, title, image;
UPDATE ingredients SET image = 'watermelon.jpg' WHERE title = 'watermelon' RETURNING *;
```
