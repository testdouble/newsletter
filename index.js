require('babel-core/register')
const fs = require('fs')
const sass = require('node-sass')
const postcss = require('postcss')
const autoprefixer = require('autoprefixer')
const reactHtmlEmail = require('react-html-email')
const previewEmail = require('preview-email')
const mailchimpify = require('mailchimpify')

const newsletter = require('./newsletter')
const assets = require('./assets')
const rawCss = sass.renderSync({
  data: fs.readFileSync('./newsletter.sass').toString(),
  indentedSyntax: true
}).css.toString()

postcss([autoprefixer]).process(rawCss, {from: undefined}).then(function (result) {
  const css = result.toString()
  const html = mailchimpify(reactHtmlEmail.renderEmail(newsletter({css, assets})))
  fs.writeFileSync('newsletter.html', html)
  previewEmail({html})
})

