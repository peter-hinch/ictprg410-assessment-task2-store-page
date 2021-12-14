import React, { Component } from 'react';

class StoreCardLg extends Component {
  state = { 
    id: this.props.id,
    imgUrl: this.props.imgUrl,
    imgAlt: this.props.imgAlt,
    title: this.props.title,
    desc: this.props.desc,
    feat: this.props.feat,
    price: this.props.price,
    callToActionUrl: this.props.callToActionUrl,
    callToAction: this.props.callToAction
  }

  render() {
    return ( 
      <React.Fragment>
        <div className="col-lg-6 col-md-6 col-sm-12">
          <div className="card mb-4">
            <img className="card-img-top" src={this.state.imgUrl} alt={this.state.imgAlt} />
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <h3 className="card-title">{this.state.title}</h3>
                <p className="card-text">{this.state.desc}</p>
                <span className="font-weight-bold">
                  AUD ${this.state.price}
                </span>
                <button
                  type="button"
                  className="btn btn-primary ml-3"
                  onClick={() => this.props.onAddToCart(this.props.id)}
                >
                  {this.state.callToAction}
                </button>
              </li>
              <li className="list-group-item">
                <h5>Includes</h5>
                <div className="row">
                  <div className="col-lg-6 col-md-12">
                    {this.renderFeatures()}
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </React.Fragment>
    );
  }
  renderFeatures() {
    if (this.state.feat.length === 0){
      return "";
    }
    return (
      <ul className="list-group list-group-flush">
        {this.state.feat.map((f) => (
          <li key={f} className="list-group-item">
            {f}
          </li>
        ))}
      </ul>
    );
  }
}
 
export default StoreCardLg;