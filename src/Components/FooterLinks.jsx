import React, { Component } from 'react';

class FooterLinks extends Component {
  state = { 
    links: [
      {id: 1, text: "Terms of Service", url: "#"},
      {id: 2, text: "Privacy Policy", url: "#"},
      {id: 3, text: "Contact Us", url: "#"},
      {id: 4, text: "Careers", url: "#"},
      {id: 5, text: "Sitemap", url: "#"},
      {id: 6, text: "Apartments", url: "#"},
      {id: 7, text: "Facilities", url: "#"},
      {id: 8, text: "Parc Vue Social", url: "#"},
      {id: 9, text: "Business Travel", url: "#"},
      {id: 10, text: "Long Stay", url: "#"}
    ]
  }
  renderLinks(){
    if (this.state.links.length === 0){
      return "";
    }
    return (
      <ul className="list-group list-group-flush">
        {this.state.links.map((l) => (
          <li key={l.id} className="list-group-item">
            <span>{l.text}</span>
          </li>
        ))}
      </ul>
    );
  }
  render() { 
    return (
      <React.Fragment>
        <div className="col-md-4">
          <div className="card">
            <div className="row">
              <div className="col-lg-12">
                <small>
                  {this.renderLinks()}
                </small>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default FooterLinks;