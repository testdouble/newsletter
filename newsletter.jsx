const React = require('react')
const {Email, Item, Image, A, Row, Col} = require('react-html-email')

module.exports = ({css, assets}) =>

<Email title='Test Double Intelligence Briefing' headCSS={css}>
  <Item className="header">
    <A href='https://testdouble.com'>
      <Image data-mc-edit='logo' alt='react'
        src={assets.logo} width={104} height={92} />
    </A>
  </Item>
  <Row className="content">
    <Col>
      Left!
    </Col>
    <Col>
      Right!
    </Col>
  </Row>
  <Item className="footer">
  </Item>
</Email>


