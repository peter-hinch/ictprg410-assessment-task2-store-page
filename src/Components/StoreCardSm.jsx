import React, { Component } from 'react';

class StoreCardSm extends Component {
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
        <div className="row">
          <div className="col-12">
            <div className="card mb-4">
              <div className="row">
                <div className="col-2">
                  <img className="card-img" src={this.state.imgUrl} alt={this.state.imgAlt} />
                </div>
                <div className="col-10">
                  <h3 className="card-title pt-3">{this.state.title}</h3>
                  <p className="card-text">{this.state.desc}</p>
                  <span className="font-weight-bold">
                    AUD ${this.state.price}
                  </span>
                  <button
                    type="button"
                    className="btn btn-primary ml-3 mb-3"
                    onClick={() => this.props.onAddToCart(this.props.id)}
                  >
                    {this.state.callToAction}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
 
export default StoreCardSm;