import React from "react";
import { NavLink } from "react-router-dom";

export default class CartItem extends React.Component {
  render() {
    return (
      <li>
        {/* get random images */}
        <NavLink to={"/item/" + this.props.element.id}>
          <img
            src={
              "https://picsum.photos/id/" + this.props.element.id + "/100/200"
            }
            alt=""
          />{" "}
        </NavLink>
        <button onClick={this.props.removeItem}> Remove this item</button>
        id:{this.props.element.id} item:{this.props.element.item}
      </li>
    );
  }
}
