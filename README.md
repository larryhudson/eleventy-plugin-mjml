# Eleventy plugin template

This is my template for creating Eleventy plugins.

## What this does

## Installation

### Install package

`npm install PLUGIN_NAME`
`npm install github:larryhudson/PLUGIN_NAME`

### Add to `.eleventy.js`

```js
const { MyPlugin } = require("PLUGIN_NAME");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(MyPlugin);
};
```

## Configuration options

```js
eleventyConfig.addPlugin(MyPlugin {
    option1: 'blah', // explanation
    option2: true // explanation
})
```

## To do list

1. Create a plugin!
