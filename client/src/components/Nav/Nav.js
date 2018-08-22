import React, { Component } from 'react'
import { Row, Col } from 'react-materialize'
import FormDialog from "./Dialog/Dialog"
// import Login from "./Login/Login"


import Sidebar from "./Sidebar/Sidebar"

class Nav extends Component {
  render() {
    return (
      <div className="top-nav">
        <Row>
          <Col s="2" >
            <Sidebar />
          </Col>
          <Col s="2" >
            {/* <Icon>settings</Icon> */}
          </Col>
          <Col className="right-align" s="8">
            <FormDialog className="right-align" />
          </Col>
        </Row>
      </div>

    )
  }
}
export default Nav;

