**Table of contents** 
${toc}

> This note contains anything you think it will be dynamic xD
# Dynamic Title 
## Problem
In Rails, there is one main file call `application.html.erb` in `views/layouts`,
as the name has already describe its usage, the file is used for main layout of the application.

Since we want to change the title of each page, we have to focus on the `<head>` tag (in case you don't know why
,please read about HTML).

Here is an example of `<head>` in `application.html.erb`:

```erb
<head>
    <title>Sample App</title>
    <meta name="viewport" content="width=device-width,initial-scale=1">
    <%= csrf_meta_tags %>
    <%= csp_meta_tag %>

    <%= stylesheet_link_tag "application", "data-turbo-track": "reload" %>
</head>
```
## Solution
In each page of each view, simply use `provide()`, and let the `application.html.erb` use the dynamic title symbol.

For example:

In `home.html.erb`:
```erb
// Notice me
<% provide(:title, 'Home') %>

<!DOCTYPE html>
<html>
  <head>
    <title><%= yield(:title) %> | Ruby on Rails Tutorial Sample App</title>
  </head>
  <body>
    <h1>Sample App</h1>
    <p>
      This is the home page for the
      <a href="https://www.railstutorial.org/">Ruby on Rails Tutorial</a>
      sample application.
    </p>
  </body>
</html>
```

In `application.html.erb`:
```erb
<head>
    // Aha here is how to use that `title` symbol!
    <title><%= yield(:title) %> | Ruby on Rails Tutorial Sample App</title>
    <meta name="viewport" content="width=device-width,initial-scale=1">
    <%= csrf_meta_tags %>
    <%= csp_meta_tag %>

    <%= stylesheet_link_tag "application", "data-turbo-track": "reload" %>
</head>
```
