# minimal-react
A single page static site using react.

Includes 
* [browserify](http://browserify.org/) for browser-side js imports
* [uglifyify](https://github.com/hughsk/uglifyify) to compress js for production
* [sass](https://www.npmjs.com/package/sass) for smarter css
* [babel](https://babeljs.io/) and [babelify](https://www.npmjs.com/package/babelify) for es6 normalization

Requires `entr` for watching and recompiling the project when files change. This is only available on mac / linux systems.

## Install and build process

First run `npm install` to install all dependencies. 

The `package.json` includes settings for babel and browserify. To build the project run:

```npm run build```

Then run a webserver of your choice at the root folder, or just point your browser to the index.html file.

To continuously rebuild when files change, run 

```npm run watch```

Note, this requires `entr` to be abvailable.

To build for production run 

```npm run build:prod```

## Deploying to a static site host

You can deploy to either netlify or gitlab. There's an included `.gitlab-ci.yml` file that will instruct gitlab to build and deploy the site.
