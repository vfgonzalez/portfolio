import React, { Component } from "react";
import "./body.css"
import profile from "../../profile.jpg"
import { Col, Row, Button } from 'react-materialize'

import ScrollToTop from 'react-scroll-up'

class Body extends Component {
  render() {
    return (
      <div>
        <Row className="justify-content center">
          <section>
            <h1 className="welcome animated fadeInDown slower delay-5s"> Welcome.</h1>
            <div>
              <img className="profileimg animated fadeIn slower delay-5s" src={profile} alt="Vicente" />
            </div>
            <Row>
              <Col offset='m3' m={6}>
                <h5 className="animated fadeInUp slower delay-5s">
                  Hi! My name is Vicente Gonzalez, and I'm a Software Developer from UCI's Continuing Education Full Stack Web Development Program.
                </h5>
                <h5 className="animated fadeInRight slower delay-5s">
                  Having a background in Business Administration with an emphasis in Finance from Cal Poly Pomona,I dove into the world of underwriting consumer loans.
                  After being involved user acceptance testing (UAT) for new software releases, I knew learning the how and why development works would be my next calling.
                </h5>
                <h5 className="animated fadeInLeft slower delay-5s">
                  I'm an ambitious creator with real life problem solving experience, and as my knowledge and projects expand, I am intrigued with the world of Internet of Things, and passionate about learning more.
                  Please enjoy browsing through my page to learn more about my projects and tech knowledge.
                </h5>
                <h5 className="animated fadeInUp slower delay-5s">Thanks for visiting!</h5>
              </Col>
            </Row>
          </section>
        </Row>

        <ScrollToTop showUnder={160}>
          <Button floating className='grey darken-2' icon='expand_less' fab='horizontal' large style={{ bottom: '45px', right: '24px' }}>

          </Button>
        </ScrollToTop>
      </div>
    )
  }

}

export default Body;