require('babel-core/register')
const fs = require('fs')
const sass = require('node-sass')
const reactHtmlEmail = require('react-html-email')
const previewEmail = require('preview-email')
const mailchimpify = require('mailchimpify')

const newsletter = require('./newsletter')
const assets = require('./assets')
const css = sass.renderSync({
  data: fs.readFileSync('./newsletter.sass').toString(),
  indentedSyntax: true
}).css.toString()

const html = mailchimpify(reactHtmlEmail.renderEmail(newsletter({css, assets})))
fs.writeFileSync('newsletter.html', html)
previewEmail({html})
