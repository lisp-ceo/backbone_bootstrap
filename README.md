Monstrous Shoes
===============

## Usage

: git clone
: jekyll --server --auto
: begin development! Make sure you look at the .gitignore and ensure it suits your needs
: When you're done. Go to the admin folder and run ./build.sh, ensuring you have the relevant node dependencies. Will produce 1-liner for your backone src

## Deps:
  * Jekyll - suuuuuuuper lightweight, move to Django eventually
  * Optional: npm - minification, testing

## Technologies used:
  * Backbone.js
  * Require.js
  * Twitter bootstrap
  * Minification
  * long backwards compat

Everything you need to start developing push-based web apps with Jekyll and Backbone.
Will require some manipulation if being used as part of a bigger framework (but if you're doing that, you're probably doing something wrong.

## File system:

 - css
   - app - app-specific
   - libs - static libs
 - js 
   - app  - app-specific
   - libs - static libs
 - img
   - app 
   - libs
 - admin - largely docs and todos
 - tests - standard test suite


