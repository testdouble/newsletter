# E-mail Newsletter Template Compiler

This project uses
[react-html-email](https://github.com/chromakode/react-html-email) and
[mailchimpify](https://github.com/Roilan/mailchimpify) to generate a newsletter
e-mail template.

## Compiling the template

```
$ npm install
$ npm run compile
```

This will open a browser window to preview the e-mail via the
[preview-email](https://github.com/niftylettuce/preview-email) module.

The template HTML will have been compiled to the git-ignored `newsletter.html`,
which can then be uploaded to Mailchimp's [template
manager](https://admin.mailchimp.com/templates/create-template/)

## Editing the template

How to edit things:

* The JSX template in `newsletter.jsx` is compiled via Babel into the sort of
  XHTML that e-mail clients crave
* The CSS in `newsletter.css` will be inlined into a style tag in the e-mail's
  `<head>` tag
* Any URLs to assets (e.g. logo) named in `assets.json` will be available to the
  newsletter component as properties on the `assets` argument passed to it
* Any `data-mc-edit` attributes are converted to Mailchimp's propietary
  `mc:edit` attributes so that they're available to be edited in its WYSIWIG UI


