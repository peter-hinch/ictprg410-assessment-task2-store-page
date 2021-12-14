import React, { Component } from 'react';

class FooterContact extends Component {
  state = {  }
  render() { 
    return ( 
      <React.Fragment>
        <div className="col-md-4">
          <div className="card">
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <a href="https://www.google.com/maps/place/Parc/@-37.7093491,145.04753,17z/data=!4m11!1m2!3m1!2sParc!3m7!1s0x6ad648aacc4f75ad:0xeb5930b5d7f2964a!5m2!4m1!1i2!8m2!3d-37.709327!4d145.0494761">
                  <img
                  src="./images/staticmap.png"
                  alt="map depicting street location of Parc Hotel Bundoora"
                  className="img-fluid" />
                </a>
              </li>
              <li className="list-group-item">
                <p>1091 Plenty Rd Bundoora, Melbourne VIC 3083 Australia</p>
                <p>Tel: (03) 9002 5100</p>
                <p>Email: reservations@parchotel.com.au</p>
              </li>
            </ul>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
 
export default FooterContact;