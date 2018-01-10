require('babel-core/register')
const React = require('react')
const reactHtmlEmail = require('react-html-email')
const path = require('path')
const fs = require('fs')
const previewEmail = require('preview-email')

const newsletter = require('./newsletter')
const assets = require('./assets')
const css = fs.readFileSync('./email.css').toString()

const html = reactHtmlEmail.renderEmail(newsletter({css, assets}))
fs.writeFileSync('newsletter.html', html)
previewEmail({html})
