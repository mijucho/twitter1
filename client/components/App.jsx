import React from "react";
import { connect } from "react-redux";

class App extends React.Cpmponent {
  componentDidMount() {
    this.props.dispatchEvent(getTweets());
  }

  render() {
    return <h1>Hello, World!</h1>;
  }
}

function mapStateToProps(state) {
  return {
    tweets: state.tweets
  };
}

export default connect(mapStateToProps)(App);
