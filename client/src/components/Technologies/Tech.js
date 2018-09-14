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
                <Collapsible  defaultActiveKey={0}>
                    <CollapsibleItem className='hovertech' header='HTML'>
                        <img className="tech-icons" src="../images/technologies/html5.png" alt="html5"/>
                        <img className="tech-icons" src="../images/technologies/jsx.png" alt="JSX"/>
                        
                        </CollapsibleItem>
                    <CollapsibleItem className='hovertech' header='CSS'>
                    <div className="row">
                        <img className="tech-icons" src="../images/technologies/css3.png" alt="CSS"/>
                        <img className="tech-icons" src="../images/technologies/bootstrap.png" alt="Bootstrap"/>
                        <img className="tech-icons" src="../images/technologies/foundation.png" alt="Foundation"/>
                        <img className="tech-icons" src="../images/technologies/materialize.png" alt="Bootstrap"/>
                        <img className="tech-icons" src="../images/technologies/semanticui.png" alt="Semantic UI"/>
                    </div>
                        </CollapsibleItem>
                    <CollapsibleItem className='hovertech' header='Javascript'>
                    <div className="row">
                        <img className="tech-icons" src="../images/technologies/react.png" alt="React"/>
                        <img className="tech-icons" src="../images/technologies/nodejs.png" alt="Node.js"/>
                        <img className="tech-icons" src="../images/technologies/jquery.png" alt="jQuery"/>
                        <img className="tech-icons" src="../images/technologies/javascript.png" alt="Javascript"/>
                        <img className="tech-icons" src="../images/technologies/meteor.png" alt="Meteor"/>
                    </div>
                        </CollapsibleItem>

                    <CollapsibleItem className='hovertech' header='Back End'>
                    <div className="row">
                        <img className="tech-icons" src="../images/technologies/mongodb.png" alt="MongoDB"/>
                        <img className="tech-icons" src="../images/technologies/sql.png" alt="SQL"/>
                        <img className="tech-icons" src="../images/technologies/mysql.png" alt="MySQL"/>
                    </div>
                        </CollapsibleItem>
                    <CollapsibleItem className='hovertech' header='Other' >
                    <div className="row">
                        <img className="tech-icons" src="../images/technologies/github.png" alt="Github"/>
                        <img className="tech-icons" src="../images/technologies/heroku.png" alt="Heroku"/>
                        <img className="tech-icons" src="../images/technologies/csharp.jpeg" alt="C#"/>
                        <img className="tech-icons" src="../images/technologies/slack.png" alt="Slack"/>
                        <img className="tech-icons" src="../images/technologies/vscode.png" alt="Visual Studio"/>
                        <img className="tech-icons" src="../images/technologies/circleci.png" alt="Circle CI"/>
                        <img className="tech-icons" src="../images/technologies/meistertask.png" alt="MeisterTask"/>

                    </div>
                        </CollapsibleItem>
                        <CollapsibleItem className='hovertech' header="APIs" >
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