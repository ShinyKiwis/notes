**Table of contents** 
${toc}

# Table Insertion
The `table-creation-modification.md` just barely introduce about the `INSERT INTO`, in this note, the command will be presented in more detailed.

Let's have a look at this code block:

```sql 
INSERT INTO ingredients (
 title, image, type
) VALUES (
  'red pepper', 'red_pepper.jpg', 'vegetable'
);
```
This is the standard way of doing an insert. In the first set of parens you list out the column names then in the values column you list the actual values you want to insert.

But you might wonder what does `''` means, so the following code is equivalent with this:

```sql 
INSERT INTO "ingredients" (
 "title", "image", "type" -- Notice the " here
) VALUES (
  'broccoli', 'broccoli.jpg', 'vegetable' -- and the ' here
);
```
> `--` This is a comment 

In SQL, quotes have different meanings:
- Single quote: a literal string value 
- Double quotes: an identifier of some thing

However, in practice, there is a chance where our insertion may cause some conflict, like the `title` must be `UNIQUE`, but we may want to add it again. Instead of receiving error, we can handle the conflict:

```sql 
INSERT INTO ingredients (
  title, image, type
) VALUES
  ( 'avocado', 'avocado.jpg', 'fruit' ),
  ( 'banana', 'banana.jpg', 'fruit' ),
  ( 'beef', 'beef.jpg', 'meat' ),
  ( 'black_pepper', 'black_pepper.jpg', 'other' ),
  ( 'blueberry', 'blueberry.jpg', 'fruit' ),
  ( 'broccoli', 'broccoli.jpg', 'vegetable' ),
  ( 'carrot', 'carrot.jpg', 'vegetable' ),
  ( 'cauliflower', 'cauliflower.jpg', 'vegetable' ),
  ( 'cherry', 'cherry.jpg', 'fruit' ),
  ( 'chicken', 'chicken.jpg', 'meat' ),
  ( 'corn', 'corn.jpg', 'vegetable' ),
  ( 'cucumber', 'cucumber.jpg', 'vegetable' ),
  ( 'eggplant', 'eggplant.jpg', 'vegetable' ),
  ( 'fish', 'fish.jpg', 'meat' ),
  ( 'flour', 'flour.jpg', 'other' ),
  ( 'ginger', 'ginger.jpg', 'other' ),
  ( 'green_bean', 'green_bean.jpg', 'vegetable' ),
  ( 'onion', 'onion.jpg', 'vegetable' ),
  ( 'orange', 'orange.jpg', 'fruit' ),
  ( 'pineapple', 'pineapple.jpg', 'fruit' ),
  ( 'potato', 'potato.jpg', 'vegetable' ),
  ( 'pumpkin', 'pumpkin.jpg', 'vegetable' ),
  ( 'raspberry', 'raspberry.jpg', 'fruit' ),
  ( 'red_pepper', 'red_pepper.jpg', 'vegetable' ),
  ( 'salt', 'salt.jpg', 'other' ),
  ( 'spinach', 'spinach.jpg', 'vegetable' ),
  ( 'strawberry', 'strawberry.jpg', 'fruit' ),
  ( 'sugar', 'sugar.jpg', 'other' ),
  ( 'tomato', 'tomato.jpg', 'vegetable' ),
  ( 'watermelon', 'watermelon.jpg', 'fruit' )
ON CONFLICT DO NOTHING;
```

For this case, `ON CONFLICT`, we `DO NOTHING`. Welp, we do nothing, but what if we want to do something ?

```sql 
INSERT INTO ingredients (
  title, image, type
) VALUES
  ( 'watermelon', 'banana.jpg', 'this won''t be updated' )
ON CONFLICT (title) DO UPDATE SET image = excluded.image;
```

When there is a conflict we simply, update the image field of that conflict record.
As you see, we are doing insertion and update at the same time, it can be called as an **"upsert"**.
