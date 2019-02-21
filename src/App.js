import React from "react";
import { connect } from "react-redux";

const mapStateToProps = state => ({
  greeting: state.homepageReducer.result
});

const App = props => {
  console.log(props);
  return (
    <div>
      <h1>Hello there freind, git established!!! {props.greeting}</h1>
    </div>
  );
};

export default connect(mapStateToProps)(App);
