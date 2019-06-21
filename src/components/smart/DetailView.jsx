import React from "react";
import { NavLink } from "react-router-dom";

export default class DetailView extends React.Component {
  showDetailComponent(cartItems, id) {
    return cartItems.filter(item => {
      return item.props.element.id === parseInt(id);
    });
  }

  render() {
    const match = this.props.match;
    const id = match.params.id;
    const cartItems = this.props.cartItems;
    return (
      <div className="main">
        <NavLink to="/">Go Back to Home</NavLink>
        <hr />
        <div>{this.showDetailComponent(cartItems, id)}</div>
      </div>
    );
  }
}
