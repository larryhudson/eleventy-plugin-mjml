const lodashMerge = require("lodash.merge");
const mjml2Html = require("mjml");
const nunjucks = require("nunjucks");

const MjmlPlugin = (eleventyConfig, suppliedOptions) => {
  const defaultOptions = {
    preprocessWithNunjucks: false,
  };

  const options = lodashMerge(defaultOptions, suppliedOptions);

  eleventyConfig.addTemplateFormats("mjml");

  eleventyConfig.addExtension("mjml", {
    compile: function (str) {
      return async (data) => {
        var mjmlContent = str;

        if (options.preprocessWithNunjucks) {
          mjmlContent = nunjucks.renderString(mjmlContent, data);
        }

        return mjml2Html(mjmlContent).html;
      };
    },
  });
};

module.exports = {
  MjmlPlugin,
};
