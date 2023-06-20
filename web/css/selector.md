# Selectors
## `nth-child` and `nth-of-type`
Let's have a look at an HTML:

```html
<section>
  <p>Little</p>
  <p>Piggy</p> <!-- We want this p -->
</section>
```

The following code will do the exact same thing:
- `p:nth-child(2)`
- `p:nth-of-type(2)`

So what does `:nth-child` selectors actually mean in plain english ?

1. It is a paragraph element
2. It is the second child of a parent 

Meanwhile, the `:nth-of-type`, means
1. Select the second paragraph child of a parent

So if we change our HTML to this.

```html
<section>
   <h1>Words</h1>
   <p>Little</p>
   <p>Piggy</p>    <!-- We want this one -->
</section>
```
This will break:

```html
p:nth-child(2)
```

The word "Little" will be chosen since it is the paragraph tag and also the second child of the parent. The other `:nth-of-type` still works as expected.