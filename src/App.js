import React from "react"
import { connect } from "react-redux"
import { updateStore } from "./redux/actions/homepageActions"
import Navigation from './Navigation'

const stateProps = state => ({
  greeting: state.homepageReducer.result
})

const dispatchProps = dispatch => ({
  updateStore: msg => dispatch(updateStore(msg))
})

const App = props => {
  console.log(props)

  function click() {
    console.log("clicked")
    props.updateStore("updated using click event")
  }
  return (
    <div>
      <Navigation />
      <h1>Home Page</h1>

      <h2>Hello there freind, git established!!! {props.greeting}</h2>
      <button onClick={click}>update store</button>
    </div>
  )
}

export default connect(
  stateProps,
  dispatchProps
)(App)
