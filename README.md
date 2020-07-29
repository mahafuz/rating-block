# Rating Block

Display rating stars using gutenberg block.

[![Build Status](https://travis-ci.org/tasnimAlam/rating-block.svg?branch=master)](https://travis-ci.org/tasnimAlam/rating-block)
**Rating Block** allows you to display star rating to your WordPress site.
Using this plugin, you can easily create and display star rating within Gutenberg.

### Usage

Easy way ( WordPress 5.5 or above ):

- Go to WordPress Gutenberg editor.
- Search for "rating".
- Click Install.

For WordPress < 5.5

- Upload "rating-block" to the **/wp-content/plugins/rating** directory.
- Activate the plugin through the 'Plugins' screen in WordPress.

### Installation

Rating block requires [Node.js](https://nodejs.org/) v10+ to run.
Inside your WordPress plugin folder:

```sh
$ git clone https://github.com/tasnimAlam/rating-block.git
$ cd rating-block
$ npm install
$ npm start
```

For production build

```sh
$ npm run build
```
