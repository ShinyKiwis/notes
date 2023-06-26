**Table of contents** 
${toc}

# Helpers 
## `_url` vs `_path`
When using the command `rails routes` to see the set-up route, any value in `Prefix` column can be added a suffix of `_url` or `_path` to have a link to that route.

The difference is:
- `_url`: Absolute path, often use when creating a link to the application from outside such as links in email.
- `_path`: Relative path, mostly use for moving in the application between routes.
