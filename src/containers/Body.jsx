import * as React from "react";
export class BodyContainer extends React.Component {
  constructor(props) {
    super(props);
    this.idCount = 0;
  }
  render() {
    return (
      <main className="main">
        {" "}
        I am Store body{" "}
        <div
          onClick={() => {
            this.props.onClick(this.idCount, this.randomItem());
            this.idCount += 1;
          }}
        >
          {" "}
          click me
        </div>{" "}
      </main>
    );
  }
  randomItem() {
    return Math.random() * 1000;
  }
}
