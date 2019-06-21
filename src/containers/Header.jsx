import * as React from "react";
import MiniCart from "../components/ui/MiniCart";
export class HeaderContainer extends React.Component {
  render() {
    return (
      <header className="header">
        {" "}
        <MiniCart
          cartCount={this.countNumberOfCartItems(this.props.cartCount)}
        />
      </header>
    );
  }
  countNumberOfCartItems(cartCount) {
    return cartCount.length;
  }
}
