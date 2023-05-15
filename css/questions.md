# Questions 
## What is box model ?
Box model is essentially a box that wraps around every HTML element, containing:
- Content
- Padding
- Border
- Margin

Explanation of each components:
- Content: The content of the box, where text and images appear 
- Padding: Space between the content area and the element's border 
- Border: This is the line that surrounds the padding and content area
- Margin: This is the space between the element's border and the neighboring elements

## Explain different CSS selectors 
### Type selectors 
These select elements based on their HTML tag name such as `p`, `div`, `h1`
### Class selectors
These select elements based on their class attribute value such as `.container` for `class="container"`
### ID selectors
These select elements based on their unique ID attribute value such as `#container`for `id="container"`
### Attribute selectors
These select elements based on their attribute values, for example:
```
input[type="text"] {
  border: 1px solid red;
}
```
### Descendant selectors
These select elements that are descendants of another element. For example, `ul li` selects all `li` elements that are descendants of `ul` elements.
### Child selectors
These select elements that are direct children of another element. For example, `ul > li` selects all `li` elements that are direct children of `ul` elements.
### Adjacent sibling selectors
These select elements that come immediately after another element. For example, `h2 + p` selects the first `p` element that comes immediately after an `h2` element.
### General sibling selectors
These select elements that come after another element, regardless of whether they are immediate siblings or not. For example,`h2 ~ p` selects all `p` elements that come after an `h2` element.

## Three main display: `inline`, `inline-block`, `block`
### `inline`
For elements having `display: inline`, we **can't** define the height or width for it. 

It is automatically adjust its height and weight according to the content.

**Notes:** 
-  `margin-top` and `margin-bottom` don't affect inline elements
<hr>

### `inline-block`
Like `inline` element, it doesn't start on new line and like `block` level element,height and width can be defined.  
<hr>

### `block`
For elements having `display: block`, we **cant** define the height or width for it. 

Block element **always starts** on a new line.

By default it occupies full line space. 

It does **not** let anything else come after it in the same line 

## What are Pseudo elements and Pseudo classes?
### Pseudo elements 
Pseudo-elements allows us to create items that do not normally exist in the document tree, for examples:
- ::before
- ::after 
- ::first-letter
- ::first-line 
- ::selection
### Pseudo classes 
Pseudo-classes select regular elements but under certain conditions like when the user is hovering over the link, for examples:
- :link 
- :visited 
- :hover 
- :active 
- :focus 

## `:active` and `:focus`
### `:active`
It is a pseudo-class that targets the active state of an element, i.e., when the element is being clicked or activated. It's typically used to style buttons or links when they're being clicked or tapped by the user. The `:active` state is usually short-lived and lasts only as long as the mouse button or touch screen is held down.

```
div:active {
    background-color: red
}
```
### `:focus`
It is a pseudo-class that targets the focused state of an element, i.e., when the element has been selected by the user. It's typically used to style form elements like input fields, dropdown menus, and buttons when they have been selected by the user. The `:focus` state is persistent and lasts until the user clicks outside the element or presses the Tab key to move focus to another element.

```
input:focus {
  border: 2px solid blue;
}
```

## Explain flexbox 
Flexbox stands for flexible box, it provides an enhanced ability to alter the dimensions of the items and make use of the available space in the container efficiently.
In order to achieve this, CSS3 provides some properties.
#### flex-direction 
This property helps in defining the direction the container should stack the items targetted for flex. The values of this property can be:
 - row 
 - column 
 - row-reverse 
 - column-reverse
#### flex-wrap 
This property specifies of the flex items should be wrapped or not. Possible values are:
 - wrap 
 - nowrap 
 - wrap-reverse 
#### flex-flow
This property is used for setting both flex-direction and flex-wrap properties in one statement.
#### justify-content - main axis
Used for aligning the flex items. Possible values are:
- center 
- flex-start
- flex-end 
- space-around
- space-between

#### align-items - cross axis
Used for aligning the flex items

**Notes** 
- Main axis is determined with the `flex-direction`
