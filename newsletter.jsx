const React = require('react')
const {Email, Box, Item, Image, A, Span, Row, Col} = require('react-html-email')

module.exports = ({css, assets}) =>

<Email title='Test Double Intelligence Briefing' headCSS={css}>
  <Item className="header">
    <div className="strip"></div>
    <div className="logo">
      <A href='https://testdouble.com'>
        <Image data-mc-edit='logo' src={assets.logo} width={52} height={50} />
      </A>
    </div>
    <div className="title">
      <del><h3>Unclassified//For Official Use Only</h3></del>
      <h1>Test Double <br className="sm"/> Intelligence Briefing</h1>
      <h2 data-mc-edit='subtitle'>2008.08.31</h2>
    </div>
  </Item>
  <Item className='content'>
    <Box>
      <Row>
        <Col>
          <div className='item story' data-mc-repeatable='left-col-story'>
            <h3 data-mc-edit='left-col-story-title'>
              I'm a fat small header
            </h3>
            <p data-mc-edit='left-col-story-blurb'>
               I'm thin body text about this long to explain the thing and why
               it's interesting and so forth
            </p>
            <span className='link' data-mc-edit='left-col-story-link'>
              <A href='https://URL_GOES_HERE'>Read &#10513;</A>
            </span>
            <hr className="divider" noshade/>
          </div>
        </Col>
        <Col className="right-col">
          {/*
          <div className='item dossier' data-mc-hideable>
            <div className='tab'>Agent Dossier</div>
            <div className='agent'>
              <Image data-mc-edit='dossier-pic' src='*|DOSSIER_PIC|*'
                width='na' height='na' />
              <div className='name'>
                <h1 data-mc-edit='dossier-name'>Sterling Archer</h1>
                <h2 data-mc-edit='dossier-00'>000</h2>
              </div>
            </div>
            <p class='bio' data-mc-edit='dossier-bio'>
              Sterling Malory Archer, known primarily as Archer, is the main
protagonist of the eponymous show. He is considered to be the world's deadliest
spy. His voice is provided by H. Jon Benjamin.
            </p>
            <span className='link' data-mc-edit='dossier-link'>
              <A href='URL_GOES_HERE'>Continue &#10513;</A>
            </span>
          </div>
          */}

          <div className='item story' data-mc-repeatable='right-col-story'>
            <h3 data-mc-edit='right-col-story-title'>
              I'm a fat small header
            </h3>
            <p data-mc-edit='right-col-story-blurb'>
               I'm thin body text about this long to explain the thing and why
               it's interesting and so forth
            </p>
            <span className='link' data-mc-edit='right-col-story-link'>
              <A href='URL_GOES_HERE'>Read &#10513;</A>
            </span>
            <hr className="divider" noshade/>
          </div>
        </Col>
      </Row>
    </Box>
  </Item>
  <Item>
    <div className="footer">
      <div className="fuse">&#10042;</div>

      <div className="sign-off">
        <p>
          Not cleared to read these briefings? <A href='*|UNSUB|*'>Unsubscribe</A> or <A href='*|UPDATE_PROFILE|*'>update your settings</A>.
        </p>
        <p>
          Copyright &copy; *|CURRENT_YEAR|* <A href='https://testdouble.com'>*|LIST:COMPANY|*</A>. All rights reserved.
          <br/>
          Send us mail at: *|LIST:ADDRESS|*
        </p>
        <p>
          *|REWARDS|*
        </p>
      </div>
    </div>
  </Item>
</Email>


