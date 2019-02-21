import React from "react";
import { connect } from "react-redux";
import { updateStore } from "./redux/actions/homepageActions";

const stateProps = state => ({
  greeting: state.homepageReducer.result
});

const dispatchProps = dispatch => ({
  updateStore: msg => dispatch(updateStore(msg))
});

const App = props => {
  console.log(props);

  function click() {
    console.log("clicked");
    props.updateStore("updated using click event");
  }
  return (
    <div>
      <h1>Hello there freind, git established!!! {props.greeting}</h1>
      <button onClick={click}>update store</button>
    </div>
  );
};

export default connect(
  stateProps,
  dispatchProps
)(App);
