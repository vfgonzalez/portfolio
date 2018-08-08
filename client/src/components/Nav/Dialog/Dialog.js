import React from 'react';
import { Row, Modal, Icon, Button} from 'react-materialize'
import axios from 'axios'
import API from '../../../utils/API'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {Form, FormGroup, Input, Label} from 'reactstrap'

export default class FormDialog extends React.Component {

  state = {
    name: '',
    email: '',
    phone: '',
    message: ''
  }


handleInputChange = event => {
  const { name, value } = event.target;
  this.setState({
    [name]: value
  });
};


 handleSubmit = e => {
  e.preventDefault()
  // console.log(
  //  this.state.title +  
  //  this.state.email + 
  //  this.state.phone +
  //  this.state.message

  // );
  
//  API.sendMessage( {
//    title: this.state.title,
//    email: this.state.email,
//    phone: this.state.phone,
//    message: this.state.message
//  })
//   .catch(err => console.log(err)); 
//   this.notify()
}

notify = () => toast.success("Your message has been sent.");

  render(){
    return (
      <div>
        <Modal
          fixedFooter
          trigger={<Button className='btn-flat transparent'>CONTACT ME</Button>}>
          {/* <Row>
            <p>For inquiries please contact me below.</p>
          <p>I will respond within 24 hours. Thank you.</p>
          <hr/>
          <br/>
          <form method="POST" action="/send">

          <Input s={6} placeholder="ex. Vicente Gonzalez" 
            label="Name" 
            type="text"
            name="name"
            onChange={this.handleChange}
            validate><Icon>account_circle</Icon></Input>
          <Input s={6} label="Telephone" placeholder="714-650-4700" 
            name="telephone"
            onChange={this.handleChange}
            type='text'
            validate 
            ><Icon>phone</Icon></Input>
          <Input s={8} type='text' placeholder="ex. vgonzalez28@gmail.com"
           name="email"
           onChange={this.handleChange}
           label="Email" />
          <Input s={12} placeholder="Type Message Here" label="Message" type='textarea'
            name="message"
            />
          <Input name='validator' type='checkbox' value='black' label="I am not a Robot" />
          <br/>
            </form>

         

          </Row>
          <Button modal="close" onClick={this.handleSubmit} type="submit" className="justify-content center grey darken-3">Submit</Button>
       
        */}
       
          {/* Trial Code */}

          {/* <h5>For inquiries please fill out below.</h5>
          <p>I will reply within 24 hours. Thank you.</p> */}
          <p>Contact Form Under Construction, please email or call me via number below:</p>
          <p>Thank you.</p>
          <hr/>
          <br/>

        <Form >
            <FormGroup>
              <Label for="name">Name
              </Label>
              <Input 
                value={this.state.title}
                onChange={this.handleInputChange}
                placeholder="ex. Vicente Gonzalez"
                type="text"
                name="title"
              ></Input>

            </FormGroup>
            <FormGroup>
              <Label for="email">Email
              </Label>
              <Input 
                value={this.state.email}
                onChange={this.handleInputChange}
                placeholder="ex. vgonzalez28@gmail.com"
                type="email"
                name="email"
              ></Input>

            </FormGroup>

            <FormGroup>
              <Label for="phone">Phone
              </Label>
              <Input 
                value={this.state.phone}
                onChange={this.handleInputChange}
                placeholder="ex. 714-650-4700"
                type="text"
                name="phone"
              ></Input>

            </FormGroup>
            <FormGroup>
              <Label for="message">Message
              </Label>
              <Input 
                value={this.state.message}
                onChange={this.handleInputChange}
                placeholder="Type Message Here"
                type="textarea"
                name="message"
              ></Input>

            </FormGroup>
            <Button 
            onClick={this.handleSubmit} disabled type="submit" className="grey darken-3 modal-close">Submit</Button>

        </Form>


       
        </Modal>
          <ToastContainer 
            position="top-right"
            autoClose={2500}
            hideProgressBar={true}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnVisibilityChange
            draggable
          />
      </div>
    );
  }
}