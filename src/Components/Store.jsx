import React, { Component } from 'react';
import StoreCardLg from '../Components/StoreCardLg';
import StoreCardMd from '../Components/StoreCardMd';
import StoreCardSm from '../Components/StoreCardSm';

class Store extends Component {
  state = { products: this.props.products }
  render() { 
    return ( 
      <React.Fragment>
        <main>
          <div className="container-fluid bg-color1 pt-3">
            {this.renderRooms()}
            {this.renderAddOns()}
            {this.renderProducts()}
          </div>
        </main>
      </React.Fragment>
     );
  }
  renderRooms() {
    let rooms = this.state.products.filter((p) => p.category === "room");
    if (rooms.length === 0){
      return "";
    }
    return (
      <div className="row">
        {rooms.map((r) => (
          <StoreCardLg
            key={r.id}
            id={r.id}
            onAddToCart={this.props.onAddToCart}
            title={r.title}
            imgUrl={r.imgUrl}
            imgAlt={r.imgAlt}
            desc={r.desc}
            feat={r.feat}
            price={r.price}
            callToAction={"Book Now"}
            callToActionUrl={"#"}
          />
        ))}
      </div>
    );
  }
  renderAddOns() {
    let addOns = this.state.products.filter((p) => p.category === "add-on");
    if (addOns.length === 0){
      return "";
    }
    return (
      <React.Fragment>
        {addOns.map((a) => (
          <StoreCardSm
            key={a.id}
            id={a.id}
            onAddToCart={this.props.onAddToCart}
            title={a.title}
            imgUrl={a.imgUrl}
            imgAlt={a.imgAlt}
            desc={a.desc}
            price={a.price}
            callToAction={"Add to My Stay"}
            callToActionUrl={"#"}
          />
        ))}
      </ React.Fragment>
    );
  }
  renderProducts() {
    let products = this.state.products.filter((p) => p.category === "product");
    if (products.length === 0){
      return "";
    }
    return (
      <div className="row">
        {products.map((p) => (
          <StoreCardMd
            key={p.id}
            id={p.id}
            onAddToCart={this.props.onAddToCart}
            title={p.title}
            imgUrl={p.imgUrl}
            imgAlt={p.imgAlt}
            desc={p.desc}
            price={p.price}
            callToAction={"Add to Cart"}
            callToActionUrl={"#"}
          />
        ))}
      </div>
    );
  }
}
 
export default Store;