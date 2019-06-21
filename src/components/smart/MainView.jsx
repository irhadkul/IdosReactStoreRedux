import React from "react";

export default class MainView extends React.Component {
  render() {
    return (
      <main className="main">
        <p>I am Store body</p>
        <button className="btn btn--gold" onClick={this.props.addRandomItems}>
          Add random item to cart
        </button>
        <div className="mainScroller">
          <ul>{this.props.cartItems}</ul>
        </div>
      </main>
    );
  }
}
