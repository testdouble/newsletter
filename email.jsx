const React = require('react')
const {Email, Item, Image, A, renderEmail} = require('react-html-email')
const path = require('path')
const fs = require('fs')
const fse = require('fs-extra')
const mkdirp = require('mkdirp')
const previewEmail = require('preview-email')

const assets = require('./assets')
const css = fs.readFileSync('./email.css').toString()
const Newsletter = () => (
  <Email title='Test Double Intelligence Briefing' headCSS={css}>
    <Item style={{ paddingLeft: 10 }}>
      <Image data-mc-bar='bar' data-mc-baz='baz' alt='react' src={assets.logo} width={100} height={100} />
    </Item>
    <Item>
      <A href='https://testdouble.com'>Click me!</A>
    </Item>
  </Email>
)

const html = renderEmail(<Newsletter />)

fse.removeSync('dist')
mkdirp.sync('dist')
fs.writeFileSync('dist/index.html', html)
previewEmail({html})
