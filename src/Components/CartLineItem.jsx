import React, { Component } from 'react';

class CartLineItem extends Component {
  state = { 
    title: this.props.title,
    imgUrl: this.props.imgUrl,
    imgAlt: this.props.imgAlt,
    desc: this.props.desc,
    price: this.props.price,
    qty: this.props.qty,
  }
  render() { 
    return ( 
      <React.Fragment /*key={this.props.id}*/>
        <tr>
          <td>{this.props.title}</td>
          <td>${this.props.price}</td>
          <td>
            <button
              type="button"
              className="btn btn-secondary bg-color3 mx-2"
              onClick={() => this.props.onDecrement(this.props.lineitem)}
            >
              -
            </button>
            {this.props.qty}
            <button
              type="button"
              className="btn btn-secondary bg-color3 mx-2"
              onClick={() => this.props.onIncrement(this.props.lineitem)}
            >
              +
            </button>
          </td>
          <td>
            <button
              type="button"
              className="btn btn-danger mx-2"
              onClick={() => this.props.onRemoveFromCart(this.props.id)}
            >
              Remove
            </button>
          </td>
        </tr>
      </React.Fragment>
    );
  }
}
 
export default CartLineItem;