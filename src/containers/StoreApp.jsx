import * as React from "react";
import { connect } from "react-redux";
import { HeaderContainer as Header } from "./Header";
import { BodyContainer as Body } from "./Body";
import CartItem from "../components/smart/CartItem";
import { addToCart, removeFromCart } from "../redux/actions/miniCart";
import "./StoreApp.scss";

class StoreApp extends React.Component {
  constructor(props) {
    super(props);
    this.addRandomItemToCart = (id, item) => {
      this.props.addToCart(id, item);
    };
    this.removeItemsFromCart = id => {
      this.props.removeFromCart(id);
    };
  }
  renderCartItems(cartItems) {
    return cartItems.map((element, index) => {
      return (
        <CartItem
          element={element}
          key={index}
          removeItem={() => this.removeItemsFromCart(element.id)}
        />
      );
    });
  }
  render() {
    return (
      <div className="baseContainer">
        {" "}
        <Header cartCount={this.props.cartItems} />
        <Body
          cartItems={this.renderCartItems(this.props.cartItems)}
          onClick={this.addRandomItemToCart.bind(this)}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { cartItems: state.cartItems };
};
const mapDispatchToProps = {
  addToCart: addToCart,
  removeFromCart: removeFromCart
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StoreApp);
