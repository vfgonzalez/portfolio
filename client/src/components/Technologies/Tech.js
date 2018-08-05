import React, { Component } from 'react'
import { Collapsible, CollapsibleItem, Col, Row } from 'react-materialize'
import "./tech.css"



class Tech extends Component {
    
    render() {
        return (
            <div> 

            <h1>Skills
            </h1>

            <div className=''>
                <Row className="valign">

                <Col offset='s2 l2' s={8} >
                <Collapsible>
                    <CollapsibleItem header='HTML'>
                        <img className="tech-icons" src="../images/technologies/html5.png" alt="html5"/>
                        <img className="tech-icons" src="../images/technologies/jsx.png" alt="JSX"/>
                        
                        </CollapsibleItem>
                    <CollapsibleItem header='CSS'>
                    <div className="row">
                        <img className="tech-icons" src="../images/technologies/css3.png" alt="CSS"/>
                        <img className="tech-icons" src="../images/technologies/bootstrap.png" alt="Bootstrap"/>
                        <img className="tech-icons" src="../images/technologies/foundation.png" alt="Foundation"/>
                        <img className="tech-icons" src="../images/technologies/Materialize.png" alt="Bootstrap"/>
                    </div>
                        </CollapsibleItem>
                    <CollapsibleItem header='Javascript'>
                    <div className="row">
                        <img className="tech-icons" src="../images/technologies/react.png" alt="React"/>
                        <img className="tech-icons" src="../images/technologies/nodejs.png" alt="Node.js"/>
                        <img className="tech-icons" src="../images/technologies/jquery.png" alt="jQuery"/>
                        <img className="tech-icons" src="../images/technologies/javascript.png" alt="Javascript"/>
                    </div>
                        </CollapsibleItem>

                    <CollapsibleItem header='Back End'>
                    <div className="row">
                        <img className="tech-icons" src="../images/technologies/mongodb.png" alt="MongoDB"/>
                        <img className="tech-icons" src="../images/technologies/sql.png" alt="SQL"/>
                    </div>
                        </CollapsibleItem>
                    <CollapsibleItem header='Other' >
                    <div className="row">
                        <img className="tech-icons" src="../images/technologies/github.png" alt="Github"/>
                        <img className="tech-icons" src="../images/technologies/heroku.png" alt="Heroku"/>
                        <img className="tech-icons" src="../images/technologies/csharp.jpeg" alt="C#"/>
                        <img className="tech-icons" src="../images/technologies/slack.png" alt="Slack"/>
                        <img className="tech-icons" src="../images/technologies/vscode.png" alt="Visual Studio"/>

                    </div>
                        </CollapsibleItem>
                        <CollapsibleItem header="API's" >
                    <div className="row">
                        <img className="tech-icons" src="../images/technologies/meetup.png" alt="Meetup"/>
                        <img className="tech-icons" src="../images/technologies/googlemaps.png" alt="Google Maps"/>
                        <img className="tech-icons" src="../images/technologies/spotify.png" alt="Spotify"/>
                        <img className="tech-icons" src="../images/technologies/twitter.png" alt="Twitter"/>
                        <img className="tech-icons" src="../images/technologies/giphy.png" alt="Giphy"/>
                    </div>
                        </CollapsibleItem>
                </Collapsible>

                </Col>
                </Row>
            </div>


            </div>







        )


    }


}


export default Tech;