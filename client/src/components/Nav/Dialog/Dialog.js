import React, {Component} from 'react';
import { Row, Button, Modal, Icon } from 'react-materialize'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Form, FormGroup, Input, Label } from 'reactstrap'
import Recaptcha from 'react-recaptcha'



class FormDialog extends Component {

    constructor(){
      super()

      this.state = {
        name: "",
        number: "",
        email: "",
        message: "",
        isVerified: false
      }

      this.handleChange = this.handleChange.bind(this)
      this.handleSubmit = this.handleSubmit.bind(this)

    }

    handleChange(e){
      this.setState ({
        [e.target.name] : e.target.value
      })
    }
  
   handleSubmit (e) {
    if(!this.state.isVerified){
      alert("Please verify you are a human")
    }else{
    e.preventDefault()
    
    const {name, email, message, number} = this.state
    
    const form =  axios.post("/send", {
      name,
      number,
      email,
      message
    })
    
    this.notify()
  }
  }

  notify = () => toast.success("Your message has been sent.");


  render() {
    return (
      <div>
        <Modal
          // fixedFooter
          trigger={<Button className='btn-flat transparent'>CONTACT ME</Button>}>


          {/* Trial Code */}

          <h5>For inquiries please fill out below.</h5>
          <p>I will reply within 24 hours. Thank you.</p>
          {/* <p>Contact Form Under Construction, please email or call me via number below:</p>
          <p>Thank you.</p> */}
          <hr />
          <br />

          <Form 
          onSubmit={this.handleSubmit}>
              <FormGroup>
                <Label for="name">Name</Label>
                <Input 
                name="name"
                type="text"
                placeholder="e.g. Vicente Gonzalez"
                onChange={this.handleChange}
                />
              </FormGroup>
              <FormGroup>
                <Label for="number">Number</Label>
                <Input 
                placeholder="e.g. 714-650-4700"
                name="number"
                type="text"
                onChange={this.handleChange}
                />
              </FormGroup>
              <FormGroup>
                <Label for="email">Email</Label>
                <Input 
                placeholder="e.g. vgonzalez28@gmail.com"
                name="email"
                type="email"
                onChange={this.handleChange}
                />
              </FormGroup>
              <FormGroup>
                <Label for="message">Message</Label>
                <Input 
                placeholder="Please type message here."
                name="message"
                type="textarea"
                onChange={this.handleChange}
                />
              </FormGroup>
                <br/>
                <br/>
              <Button
                type="submit"
                value="submit"
                className="floating grey darken-2 white-text modal-close"
              >SUBMIT<Icon right>send</Icon></Button>
          </Form>


          {/* <Row
          onSubmit={this.handleSubmit}
          >
            <Input
            label="Name"
            name="name"
            type="text"
            placeholder="e.g. Vicente Gonzalez"
            s={6}
            onChange={this.handleChange}
            />
            <Input
            validate
            label="Number"
            name="number"
            type="tel"
            placeholder="e.g. 714-650-4700"
            s={6}
            onChange={this.handleChange}
            />
            <Input
            validate
            label="Email"
            name="email"
            type="email"
            placeholder="e.g. vgonzalez28@gmail"
            s={12}
            onChange={this.handleChange}
            />
            <Input
            label="Message"
            name="message"
            type="textarea"
            placeholder="Please type your message here"
            s={12}
            onChange={this.handleChange}
            />
            
            
              <Button
                // onSubmit={this.handleSubmit}
                type="submit"
                value="submit"
                className="floating grey darken-2 white-text modal-close"
                >SUBMIT<Icon right>send</Icon></Button>
          </Row>  
       */}



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

export default FormDialog;