**Table of contents** 
${toc}

# Sass 
## How to use global variables in sass 
### Problem
This is just a small note about sass, using variables is one of key features in sass. 

However, simply declaring all your sass files in `app/assets/stylesheets/`, will cause 2 errors:
> This note was written on 30 June, 2023 - Rails version was 7.0.5
- Undefined variables `$xxx`
- Asset `xxx.xxx` was not declared to be precompiled in production

### Solution 
Trying to edit the `manifest.js` file will solve this problem, however, this is just a hacky one!

To really solve it, move all sass files into a folder, then importing them in `application.sass`. 

> All files, not just the file containing the variables!
