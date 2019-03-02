import React from "react"
import { Switch, Route } from 'react-router-dom'
import App from './src/App'
import About from './src/About'
import NoMatch from './src/NoMatch'

const Main = () => {
  return (
      <Switch>
        <Route exact path='/' component={App}/>
        <Route exact path='/about' component={About}/>
        <Route path="*" component={NoMatch} />
      </Switch>
  );
}

export default Main