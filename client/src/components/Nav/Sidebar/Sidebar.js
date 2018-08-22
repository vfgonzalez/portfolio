import React, {Component} from 'react'
import {SideNav, SideNavItem, Button, Icon} from 'react-materialize'
import profile from "../../../profile.jpg"
import lamp from "../../../lamp.jpg"


class Sidebar extends Component{
    render(){
        return(

            <SideNav
            trigger={<Button flat ><Icon large left>menu</Icon></Button>}
            options={{ closeOnClick: true }}
            >
            <SideNavItem userView
              className="left-align"
              user={{
                background: lamp,
                image: profile,
                name: `714-650-4700`,
                email: 'vgonzalez28@gmail.com',
              }}
              />

            <a href="https://github.com/vfgonzalez" target="_blank" rel="noopener noreferrer">
              <h4 className="left-align">
                <i className="fab fa-github-square"></i> | Github
          </h4>
            </a>

            <a href="https://www.linkedin.com/in/vfgonzalez/" target="_blank" rel="noopener noreferrer">
              <h4 className="left-align">
                <i className="fab fa-linkedin"></i> | LinkedIn
          </h4>
            </a>

            <a href="https://www.facebook.com/profile.php?id=100011258105181" target="_blank" rel="noopener noreferrer">
              <h4 className="left-align">
                <i className="fab fa-facebook-square"></i> | Facebook
          </h4>
            </a>
          </SideNav>


        )
    }
}

export default Sidebar;