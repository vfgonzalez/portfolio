import React, { Component } from 'react'
import {Footer, Col} from 'react-materialize'


class Foot extends Component {

    render() {
        return (

            <div>
                <Footer copyrights="&copy; 2018 Vicente Gonzalez"
                    className='black'
                >
                    <Col className="justify-content-center" offset="l6" l={12}>
                    <h5 className="white-text">Contact Information</h5>
                    <p className="grey-text text-lighten-4">Email: vgonzalez28@gmail.com</p>
                    <p className="grey-text text-lighten-4">Phone: (714) 650-4700</p>
                    </Col>
                   
                </Footer>
        </div>


        )
    }
}


export default Foot;