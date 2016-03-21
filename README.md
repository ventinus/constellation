# Constellation

> Development environment for Constellation.js


## What is Constellation.js?

Uses HTML5 Canvas to animate dots ("stars") as they fall like snowflakes and connect ones in close proximity to each other. the "stars" also grow if they are near the cursor.


## A few things about the structure


- HTML
⋅⋅- Assemble/Handlebars for templating
- CSS
⋅⋅- Scss
⋅⋅- PostCSS Autoprefixer
- Javascript
⋅⋅- RequireJS
⋅⋅- Babel (ES6 Transpiling)
- Bower
- Grunt


## Setup

1. Clone/download repo
2. Run `cp build-env.js-dist build-env.js` to make a local copy of the build environment variables
3. Run `npm install -g grunt-cli`
4. Run `npm install`
5. Run `bower install`
6. Run `grunt`
7. Run `grunt connect`
8. Navigate to `localhost:4000` in browser to view output
9. Optionally run `grunt watch` to watch for changes


## Errors or want changes?

Submit an issue or pull request. 
