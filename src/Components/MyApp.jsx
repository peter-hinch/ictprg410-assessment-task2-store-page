import React, { Component } from 'react';
import Header from './Header';
import Store from './Store';
import Cart from './Cart';
import Footer from './Footer';

import {getProducts} from '../Services/productApi.js'

class MyApp extends Component {
  state = {
    products: getProducts(),
    cart: []
  }

  // handle the increment button press (item in shopping cart)
  handleIncrement = (lineitem) => {
    const cart = [...this.state.cart];
    const index = cart.indexOf(lineitem);
    cart[index] = {...lineitem};
    cart[index].qty++;
    this.setState({cart});
  };
  // handle the decrement button press (item in shopping cart)
  handleDecrement = (lineitem) => {
    const cart = [...this.state.cart];
    const index = cart.indexOf(lineitem);
    cart[index] = {...lineitem};
    if (cart[index].qty > 1) {
      cart[index].qty--;
    }
    this.setState({cart});
  };
  // handle the add to cart button (various item cards)
  handleAddToCart = (id) => {
    const addition = this.state.products.filter((p) => p.id === id);
    addition[0].qty = 1;
    const cart = this.state.cart.concat(addition);
    this.setState({cart});
  };
  // handle the remove from cart button (various item cards)
  handleRemoveFromCart = (lineItem) => {
    const cart = this.state.cart.filter((i) => i.id !== lineItem);
    this.setState({cart});
  };
  render() { 
    return ( 
      <React.Fragment>
        <Header
          cart={this.state.cart}
          // find the length of the shopping cart array to display item count
          cartQty={this.state.cart.filter((i) => i.id > 0).length}
          // multiply the quantity of each item in the cart by the unit price
          cartValue={this.state.cart.reduce((a,c)=>(a+c.qty*c.price),0)} 
        />
        <Store  
          products={this.state.products}
          onAddToCart={this.handleAddToCart}
        />
        <Cart
          cart={this.state.cart}
          onDecrement={this.handleDecrement}
          onIncrement={this.handleIncrement}
          onRemoveFromCart={this.handleRemoveFromCart}
        />
        <Footer />
      </React.Fragment>
    );
  }
}
 
export default MyApp;