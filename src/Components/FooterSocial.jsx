import React, { Component } from 'react';

class FooterSocial extends Component {
  state = {  }
  render() { 
    return ( 
        <React.Fragment>
          <div className="col-md-4">
            <div className="card">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <p className="card-text">
                    Allow us to keep you posted with news from Parc Hotel. We will send 
                    occasional news and special offers directly to your email inbox. 
                  </p>
                  <form>
                    <div className="form-row form-group">
                      <div className="col-lg-12 pb-3">
                        <input type="email" className="form-control" placeholder="Email Address" />
                      </div>
                      <div className="col-lg-12">
                        <button type="submit" className="btn btn-small btn-block btn-secondary">Keep me informed</button>
                      </div>
                    </div>
                    <small>
                      We value your privacy and you can unsubscribe at any time. Feel free to read our Privacy Policy {/*<a href="#">*/}here{/*</a>*/}.
                    </small>
                  </form>
                </li>
                <li className="list-group-item">
                  <div className="row">
                    <div className="col-lg-6 col-md-12 mb-md-3" style={{textAlign: "center"}}>
                      <img src="./images/assets/facebook-24px.svg" width="30" height="30" className="mr-2" alt="Parc Hotel on Facebook" />
                      <span>Like us on Facebook</span>
                    </div>
                    <div className="col-lg-6 col-md-12" style={{textAlign: "center"}}>
                      <img src="./images/assets/instagram-glyph-1.svg" width="30" height="30" className="mr-2" alt="Parc Hotel on Instagram" />
                      <span>Follow us on Instagram</span>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </React.Fragment>
    );
  }
}
 
export default FooterSocial;