import React, { Component } from 'react';

class Header extends Component {
  state = {  }
  render() { 
    return ( 
      <React.Fragment>
        <header>
          <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-color10 py-0">
            <img className="navbar-brand py-0 d-inline-block align-top" src="./images/assets/parc-hotel-logo.png" width="183" height="97"  alt="Parc Hotel" />
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div id="navbarNav" className="collapse navbar-collapse">
              <ul className="navbar-nav ml-auto mt-2 mt-sm-0">
                  <li className="nav-item">
                    <a className="nav-link disabled" href="./" alt="Book Now">Book Now</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link disabled" href="./" alt="Special Offers">Special Offers</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link disabled" href="./" alt="Store">Store</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link disabled" href="./" alt="Contact Us">Contact Us</a>
                  </li>
              </ul>
              <span className="badge badge-primary ml-1 bg-color3">${this.props.cartValue} ({this.props.cartQty})</span>
              <img src="images/shopping_cart-32px.png" alt="shopping cart" className="ml-1" />
            </div>
          </nav>
          <div className="row my-3 py-3">&nbsp;</div>
        </header>
      </React.Fragment>
     );
  }
}
 
export default Header;