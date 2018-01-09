const path = require('path')
const fs = require('fs')
const mkdirp = require('mkdirp')
const Email = require('email-templates')
const previewEmail = require('preview-email')

const email = new Email({
  juice: true,
  juiceResources: {
    preserveImportant: true,
    webResources: {
      relativeTo: path.resolve('emails/v1')
    }
  }
})

email.render('v1/html', {
  name: 'Test'
}).then(function (html) {
  previewEmail({html})
  mkdirp.sync('dist')
  fs.writeFileSync('dist/v1.html', html)
}).catch(console.error)
