const lodashMerge = require("lodash.merge");

const MyPlugin = (eleventyConfig, suppliedOptions) => {
  const defaultOptions = {};

  const options = lodashMerge(defaultOptions, suppliedOptions);

  //   do stuff here!
};

module.exports = {
  MyPlugin,
};
