const path = require('path')
const fs = require('fs')
const mkdirp = require('mkdirp')
const Email = require('email-templates')

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
  mkdirp.sync('dist')
  fs.writeFileSync('dist/v1.html', html)
  console.log(html)
}).catch(console.error)
