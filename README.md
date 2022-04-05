# `eleventy-plugin-mjml`

Generate HTML email content with Eleventy and MJML.

## What this does

This allows you to add `.mjml` template files to your Eleventy input directory, which are then converted to HTML during your Eleventy build.

I'm working out how you could build your HTML emails within your Eleventy site, and then send them using an email API like [Mailjet](https://www.mailjet.com/).

## Installation

### Install package

`npm install eleventy-plugin-mjml`

### Add to `.eleventy.js`

```js
const { MjmlPlugin } = require("eleventy-plugin-mjml");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(MjmlPlugin, {
    // if you want to use Nunjucks syntax within your MJML files, set to true
    preprocessWithNunjucks: false,
  });
};
```

### Add an `.mjml` file to your input directory

Eg. `src/index.mjml`

```mjml
<mjml>
  <mj-body>
    <mj-section>
      <mj-column>
        <mj-text> {{title}}! </mj-text>
      </mj-column>
    </mj-section>
  </mj-body>
</mjml>
```

If you enable the `preprocessWithNunjucks` option, you can use Nunjucks within the `.mjml` files:

```mjml
---
title: My Newsletter
---

<mjml>
  <mj-body>
    <mj-section>
      <mj-column>
        <mj-text>{{title}}</mj-text>
      </mj-column>
    </mj-section>
  </mj-body>
</mjml>
```
