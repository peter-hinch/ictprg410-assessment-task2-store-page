import React, { Component } from 'react';
import CartLineItem from './CartLineItem';

class Cart extends Component {
  render() { 
    return ( 
      <React.Fragment>
        <div className="container-fluid bg-color5">
          <div className="container py-3">
            {this.renderContents()}
          </div>
        </div>
      </React.Fragment>
    );
  }
  renderContents(){
    if (this.props.cart.length === 0){
      return (
        <table className="table">
          <thead className="color4 bg-color10">
            <th scope="col">Your cart is currently empty.</th>
          </thead>
          <tbody></tbody>
        </table>
      );
    }
    return (
      <table className="table">
        <thead className="color4 bg-color10">
          <th scope="col">Description</th>
          <th scope="col">Price</th>
          <th scope="col">Qty</th>
          <th scope="col">Remove</th>
        </thead>
        <tbody>
          {this.props.cart.map((i) => (
            <CartLineItem
              onDecrement={this.props.onDecrement}
              onIncrement={this.props.onIncrement}
              onRemoveFromCart={this.props.onRemoveFromCart}
              id={i.id}
              lineitem={i}
              title={i.title}
              imgUrl={i.imgUrl}
              imgAlt={i.imgAlt}
              desc={i.desc}
              price={i.price}
              qty={i.qty}
            />
          ))}
        </tbody>
      </table>
    )
  }
}
 
export default Cart;