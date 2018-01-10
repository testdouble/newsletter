require('babel-core/register')
const fs = require('fs')
const reactHtmlEmail = require('react-html-email')
const previewEmail = require('preview-email')
const mailchimpify = require('mailchimpify')

const newsletter = require('./newsletter')
const assets = require('./assets')
const css = fs.readFileSync('./newsletter.css').toString()

const html = mailchimpify(reactHtmlEmail.renderEmail(newsletter({css, assets})))
fs.writeFileSync('newsletter.html', html)
previewEmail({html})
