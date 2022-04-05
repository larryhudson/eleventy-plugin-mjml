const { MyPlugin } = require("./index");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(MyPlugin);

  return {
    dir: {
      input: "test_input",
      output: "test_output",
    },
  };
};
