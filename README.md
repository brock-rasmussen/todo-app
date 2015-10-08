# Todo App

This is an (almost) empty repository, meant for you to fill (from scratch) to
make a front end app using modern web development build tools.

# Prerequisites

* [node](https://nodejs.org/en/)
* [npm](https://www.npmjs.com/) (should come with node)
* [bower](http://bower.io/) (install with `npm install -g bower`)
* [git](http://git-scm.com/)
* A command-line terminal
  * OS X - Look in /Applications/Utilities/Terminal.app
  * Windows - When git is installing, select the bash tool and use that.
    Other-wise, use PuTTY, or you're on your own.

# Instructions

## Clone

Fork this repository to your github user account, and clone it to your computer.
Navigate to the project directory in your terminal.

## Project Setup

### `.gitignore`

First, you'll need a `.gitignore` file. This tells git which files to ignore
so you don't accidentally commit them to source control. You usually want to
ignore things like log files, sensitive configuration files, system generated
files like `.DS_Store` and `Thumbs.db` files. In our case, we want to ignore the
`node_modules/` and `bower_components/` directories as well. This is what your
`.gitignore` file should look like:

```
.DS_Store
*.db
*.log
node_modules
bower_components
```

You might note that there is also a folder called `.git/`. This is ignored
always by git. This is where it stores all of the revision information for your
repository and keeps track of where to push your code changes.

### `package.json`

Next, you'll want to have a `package.json` to keep track of your project
dependencies. To auto-generate a `package.json` file, run the following command:

```sh
npm init
```

After you press enter, it will ask you a series of questions, like the project
name, description, version, and other things. It's not super important what you
answer because you can always change them.

After that's done, you should have a `package.json` in your directory. Great!
To make sure that we don't accidentally publish this as an `npm` module, add
`"private": true,` to your `package.json`. So your `package.json` should look
something like this:

```json
{
  "name": "todo-app",
  "version": "1.0.0",
  "description": "",
  "private": true,
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "repository": {
    "type": "git",
    "url": "gh:dgm-ria-fall-2015/todo-app"
  },
  "author": "",
  "license": "ISC"
}
```

### `bower.json`

To initialize your `bower.json`, run:

```
bower init
```

It will go through the same types of questions as `npm init` asked. One of the
last ones will ask you if you want to mark it as private. The default is no,
but you'll want to say yes to that one so you don't accidentally publish it as
a bower component.

Your `bower.json` should look something like this:

```json
{
  "name": "todo-app",
  "version": "0.0.0",
  "authors": [
    "ksmithut <ksmith.ut@gmail.com>"
  ],
  "description": "",
  "main": "",
  "moduleType": [],
  "license": "MIT",
  "homepage": "",
  "private": true,
  "ignore": [
    "**/.*",
    "node_modules",
    "bower_components",
    "test",
    "tests"
  ]
}
```

### `src/`

We need to set up our source code directory. This directory will be where we put
the files we'll actually work with. The files we actually want the browser to
use will be minified, concatenated, versioned, and have source maps. So, we need
to have a good folder schema in order to keep track of everything. Here are the
things we need:

* Scripts
* Styles
* Templates
* Other Static Files (such as images and fonts)

So, let's make directories for each of those. Your directory structure should
look something like this:

```
src/
├── scripts/   - This is where our javascript will go
├── static/    - This is where our images and stuff will go
├── styles/    - This is where our css/styles will go
└── templates/ - This is where our templates will go
```

### `gulpfile.js`

We're going to be using [`gulp`](http://gulpjs.org/) as our build process tool.
Gulp facilitates the reading of files and passing them through processing
plugins that modify the contents and then stream the results to an output
directory. We'll use several plugins to help process and minify our code to be
super optimized for downloading and parsing.

Let's start by installing `gulp` as a global module:

```sh
npm install -g gulp
```

Next, let's install some gulp plugins locally so that we can use them in our
project. We're going to use the `--save-dev` flag to save these dependencies as
devDependencies in our `package.json`.

```sh
npm install --save-dev gulp gulp-sourcemaps gulp-uglify gulp-concat gulp-pleeease
```

Now that we've got our dependencies, go ahead and create a `gulpfile.js` in your
project directory.

We will go over it in class and I will update this readme.
