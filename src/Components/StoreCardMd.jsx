import React, { Component } from 'react';

class StoreCardMd extends Component {
  state = { 
    id: this.props.id,
    imgUrl: this.props.imgUrl,
    imgAlt: this.props.imgAlt,
    title: this.props.title,
    desc: this.props.desc,
    price: this.props.price,
    callToActionUrl: this.props.callToActionUrl,
    callToAction: this.props.callToAction
  }

  render() {
    return ( 
      <React.Fragment>
        <div className="col-lg-4 col-md-6 col-sm-12">
          <div className="card mb-4">
            <ul className="list-group list-group-flush">
              <img className="card-img-top" src={this.state.imgUrl} alt={this.state.imgAlt} />
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
            </ul>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
 
export default StoreCardMd;