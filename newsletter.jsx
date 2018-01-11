const React = require('react')
const {Email, Item, Image, A} = require('react-html-email')

module.exports = ({css, assets}) =>

<Email title='Test Double Intelligence Briefing' headCSS={css}>
  <Item align="left">
    <A href='https://testdouble.com'>
      <Image data-mc-edit='logo' alt='react' src={assets.logo} width={100} height={100} />
    </A>
  </Item>
</Email>


