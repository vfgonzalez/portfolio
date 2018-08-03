import React, {Component} from "react";
import Grid from "@material-ui/core/Grid";
import { withStyles } from '@material-ui/core/styles';
import "./body.css"
import profile from "../../profile.jpg"
import Typography from "@material-ui/core/Typography"
import {Col, Button} from 'react-materialize'

const styles = theme => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing.unit * 2,
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  });

class Body extends Component {
    render() {
      return (
    <div>
        <Grid container
        justify="space-around"
        alignItems="center"
        >
        
      

        <Grid item xs >
        <section>

        <h1 className="welcome"> Welcome.</h1>
       <div>
         <img className="profileimg" src={profile} alt="Vicente"/>
       </div>
       <Typography >
          <Col xl={6}>
            <h5>
              Hi! My name is Vicente Gonzalez, and I am a Full Stack Developer from UCI's Continuing Education Full Stack Web Development Program.
              I'm an ambitious creator with real life problem solving experience. Please enjoy browsing through my page to learn more about my projects and tech knowledge.
            </h5>
          </Col>
         
          {/* <h5>Thanks for Visiting! Please contact me for any questions or inquiries.</h5> */}
          </Typography>
        </section>
        </Grid>
        
        
        </Grid>

        <Button floating fab='horizontal' icon='expand_less' className='grey' large style={{bottom: '45px', right: '24px'}}>
            
          </Button>
        
    </div>



      )
    }

}

export default withStyles(styles) (Body);