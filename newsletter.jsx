const React = require('react')
const {Email, Box, Item, Image, A, Row, Col} = require('react-html-email')

module.exports = ({css, assets}) =>

<Email title='Test Double Intelligence Briefing' headCSS={css}>
  <Item className="header">
    <div className="strip"></div>
    <div className="logo">
      <A href='https://testdouble.com'>
        <Image data-mc-edit='logo' alt='react'
          src={assets.logo} width={52} height={46} />
      </A>
    </div>
    <div className="title">
      <h3 data-mc-edit='classification'>Unclassified//For Official Use Only</h3>
      <h1 data-mc-edit='title'>Test Double Intelligence Briefing</h1>
      <h2 data-mc-edit='subtitle'>2008//08//31</h2>
    </div>
  </Item>
  <Item className="content">
    <Box>
      <Row>
        <Col>
          Left!
        </Col>
        <Col>
          Right!
        </Col>
      </Row>
    </Box>
  </Item>
  <Item className="footer">
  </Item>
</Email>


