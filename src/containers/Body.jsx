import * as React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MainView from "../components/smart/MainView";
import DetailView from "../components/smart/DetailView";
export class BodyContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      idCount: 0
    };
  }

  render() {
    return (
      <Router>
        <Switch>
          <Route
            path={"/"}
            exact
            render={() => {
              return (
                <MainView
                  addRandomItems={() => {
                    this.addRandomItems();
                  }}
                  cartItems={this.props.cartItems}
                />
              );
            }}
          />
          <Route
            render={props => {
              return (
                <DetailView
                  {...props}
                  {...this.props}
                  cartItems={this.props.cartItems}
                />
              );
            }}
            path={"/item/:id"}
          />
        </Switch>
      </Router>
    );
  }
  addRandomItems() {
    this.props.onClick(this.state.idCount, this.randomItem());
    this.setState({ idCount: this.state.idCount + 1 });
  }
  clickMainItem() {
    console.log("ido");
  }
  randomItem() {
    return Math.random() * 1000;
  }
}
