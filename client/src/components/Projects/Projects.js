import React, { Component } from 'react';
import { Card, CardTitle, Col, Row, Button } from 'react-materialize'
import './projects.css'

class Projectsect extends Component {

  render() {
    return (

      <div>
        <h2>Projects</h2>
        <Row s={4} className="valign">

          <Col l={4}>
            <Card className='grey projecthover' header={<CardTitle reveal image={"./images/projects/slackoverflow2/main.png"} waves='light' />}
              title="Slack Overflow 2.0"
              reveal={
                <div>

                  <p>MERN Stack Application, polished User Experience to Version 1.0. Serves as a webpage and link storing resource for new students and continuous learners.</p>
                  <hr />
                  <h5>Tech</h5>
                  <p>Slack API, MERN, Materialize CSS, Javascript, JSX, Mongoose, jQuery, React-Materialize, Font Awesome </p>
                  <hr/>
                  <h5>Role</h5>
                  <p>Lead Developer, API Integration, Git merge resolution, Project Management</p>
                </div>
              }>
              <Button className='btn-flat grey'>
                <a href="http://slackoverflow2.herokuapp.com/" rel="noopener noreferrer" target='_blank'><i className="fas fa-external-link-alt black-text"></i></a>
              </Button>
              <Button className=' btn-flat grey'>
                <a href="https://github.com/vfgonzalez/slackoverflow1" rel="noopener noreferrer" target='_blank'><i className="fab fa-github black-text"></i></a>
              </Button>
            </Card>
          </Col>
          <Col l={4}>
            <Card className='grey projecthover' header={<CardTitle reveal image={"./images/projects/slackoverflow1/slackoverflow1.png"} waves='light' />}
              title="Slack Overflow"
              reveal={
                <div>
                  <p>UCI Coding Bootcamp Resource for students to share, contribute and vote on Links and pages that are most beneficial. </p>
                  <hr />
                  <h5>Tech</h5>
                  <p>HTML, CSS, JavaScript, Bootstrap 4, AJAX Requests, jQuery, Slack API</p>
                  <hr/>
                  <h5>Role</h5>
                  <p>Lead Developer, API Integration, Git merge resolution, Project Management</p>
                </div>
              }>
              <Button className=' btn-flat grey'>
                <a href="https://slackerflow.herokuapp.com/" rel="noopener noreferrer" target='_blank'><i className="fas fa-external-link-alt black-text"></i></a>
              </Button>
              <Button className='btn-flat grey'>
                <a href="https://github.com/vfgonzalez/slackoverflow1" rel="noopener noreferrer" target='_blank'><i className="fab fa-github black-text"></i></a>
              </Button>
            </Card>
          </Col>
          <Col l={4}>
            <Card className='grey projecthover' header={<CardTitle reveal image={"./images/projects/enablr/enablr.png"} waves='light' />}
              title="Enablr"
              reveal={
                <div>
                  <p>Meetup Search Engine refined to provide user local Tech events based on City Search.</p>
                  <hr />
                  <h5>Tech</h5>
                  <p>Meetup API, Google API, HTML, CSS, Google Fonts, Bootstrap 4, Firebase Hosting, jQuery, CORS Callback </p>
                  <hr/>
                  <h5>Role</h5>
                  <p>API Integration, Git merge resolution, Project Management, Back End Development</p>
                </div>
              }>
              <Button className=' btn-flat grey'>
                <a href="https://vfgonzalez.github.io/Enablr/" rel="noopener noreferrer" target='_blank'><i className="fas fa-external-link-alt black-text"></i></a>
              </Button>
              <Button className=' btn-flat grey'>
                <a href="https://github.com/vfgonzalez/Enablr" rel="noopener noreferrer" target='_blank'><i className="fab fa-github black-text"></i></a>
              </Button>


            </Card>
          </Col>

        </Row>
        <Row>
          <Col offset="m4" l={4}>
            <Card className='grey projecthover' header={<CardTitle reveal image={"./images/projects/lirinode/lirinode.png"} waves='light' />}
              title="LIRINode Bot"
              reveal={
                <div>
                  <p>Command Line Tool embedding Twitter, Spotify and IMDB [OMDB] API's to render data searched.</p>
                  <hr />
                  <h5>Tech</h5>
                  <p>Twitter API, Spotify API, OMDB API, Node.js, NPM Inquirer, Asciify, Figlet</p>
                  <hr/>
                  <h5>Role</h5>
                  <p>Sole Developer</p>
                </div>
              }>
              <Button className=' btn-flat grey'>
                <a href="https://github.com/vfgonzalez/liri-node-app" rel="noopener noreferrer" target='_blank'><i className="fab fa-github black-text"></i></a>
              </Button>

            </Card>
          </Col>
          <Col l={4}>
            <Card className='grey projecthover' header={<CardTitle reveal image={"./images/projects/trainschedule/trainschedule.png"} waves='light' />}
              title="Train Scheduler"
              reveal={
                <div>
                  <p>Real Time Database Update of Simulated Train Schedule, allows user to input new train to be updated. </p>
                  <hr />
                  <h5>Tech</h5>
                  <p>HTML, CSS, JavaScript, Bootstrap 4, jQuery, Firebase</p>
                  <hr/>
                  <h5>Role</h5>
                  <p>Sole Developer</p>
                </div>
              }>
              <Button className='btn-flat grey'>
                <a href="https://vfgonzalez.github.io/Train-Scheduler/" rel="noopener noreferrer" target='_blank'><i className="fas fa-external-link-alt black-text"></i></a>
              </Button>
              <a href="https://github.com/vfgonzalez/Train-Scheduler" rel="noopener noreferrer" target='_blank'><i className="fab fa-github black-text"></i></a>
              <Button className=' btn-flat grey'></Button>
            </Card>
          </Col>
          <Col l={4}>
            <Card className='grey projecthover' header={<CardTitle reveal image={"./images/projects/rpg/rpg.png"} waves='light' />}
              title="Big Bang Theory Game"
              reveal={
                <div>
                  <p>Nerd Battle! RPG Game that challenges each scientist until the end. </p>
                  <hr />
                  <h5>Tech</h5>
                  <p>HTML, CSS, JavaScript, Bootstrap 4, jQuery</p>
                  <hr/>
                  <h5>Role</h5>
                  <p>Sole Developer</p>
                </div>
              }>
              <Button className=' btn-flat grey'>
                <a href="https://vfgonzalez.github.io/bigbangtheorygame/" rel="noopener noreferrer" target='_blank'><i className="fas fa-external-link-alt black-text"></i></a>
              </Button>
              <Button className=' btn-flat grey'>
                <a href="https://github.com/vfgonzalez/bigbangtheorygame" rel="noopener noreferrer" target='_blank'><i className="fab fa-github black-text"></i></a>
              </Button>
            </Card>
          </Col>
        </Row>

      </div>

    );
  }

}

export default Projectsect;