import * as React from "react";
import { connect } from "react-redux";
import { HeaderContainer as Header } from "./Header";
import { BodyContainer as Body } from "./Body";
import { addToCart, removeFromCart } from "../redux/actions/miniCart";
import "./StoreApp.scss";

function StoreApp(props) {
  const addRandomItemToCart = (id, item) => {
    props.addToCart(id, item);
  };
  const removeItemsFromCart = id => {
    props.removeFromCart(id);
  };
  return (
    <div className="baseContainer">
      {" "}
      <ul>{everyCartItem(props, removeItemsFromCart)}</ul>
      <Header cartCount={props.cartItems} />
      <Body onClick={(id, item) => addRandomItemToCart(id, item)} />
    </div>
  );
}

function everyCartItem(props, removeItemsFromCart) {
  return props.cartItems.map((element, i) => {
    return (
      <li key={i} onClick={() => removeItemsFromCart(element.id)}>
        <img
          src={"https://picsum.photos/id/" + element.id + "/100/200"}
          alt=""
        />{" "}
        id:{element.id} item:{element.item}
      </li>
    );
  });
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
