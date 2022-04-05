const { MjmlPlugin } = require("./index");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(MjmlPlugin, {
    preprocessWithNunjucks: true,
  });

  return {
    dir: {
      input: "test_input",
      output: "test_output",
    },
  };
};
