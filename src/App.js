import React from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import Home from './pages/Home'
import { CATEGORY_ROUTE, HOME_PAGE_ROUTE } from './constants/routes'
import './App.scss'

const App = () => {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path={HOME_PAGE_ROUTE} exact>
            <Home />
          </Route>
          <Route path={`${HOME_PAGE_ROUTE}${CATEGORY_ROUTE}/:id`}>
            <Home />
          </Route>
          <Redirect from="/" to={HOME_PAGE_ROUTE} />
        </Switch>
      </div>
    </Router>
  )
}

export default App
