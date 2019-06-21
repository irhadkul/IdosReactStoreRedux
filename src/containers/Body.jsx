import * as React from "react";
export class BodyContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      idCount: 0
    };
  }
  render() {
    return (
      <main className="main">
        <p>I am Store body</p>
        <button
          className="btn btn--gold"
          onClick={() => {
            this.props.onClick(this.state.idCount, this.randomItem());
            this.setState({ idCount: this.state.idCount + 1 });
          }}
        >
          Add random item to cart
        </button>
        <div className="mainScroller">
          <ul>{this.props.cartItems}</ul>
        </div>
      </main>
    );
  }
  randomItem() {
    return Math.random() * 1000;
  }
}
