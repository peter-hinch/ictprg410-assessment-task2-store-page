import React, { Component } from 'react'
import FooterContact from './FooterContact';
import FooterLinks from './FooterLinks';
import FooterSocial from './FooterSocial';

class Footer extends Component {
  state = {  }
  render() { 
    return (
      <React.Fragment>
        <footer className="navbar navbar-dark bg-color3 align-items-start pl-0 pr-0 pt-3">
          <FooterLinks />
          <FooterSocial />
          <FooterContact />
        </footer>
      </React.Fragment>
    );
  }
}
 
export default Footer;