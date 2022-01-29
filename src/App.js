import React from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import Home from './pages/Home'
import { CATEGORY_ROUTE, HOME_PAGE_ROUTE } from './constants/routes'
import Categories from './components/categories/Categories'
import './App.scss'

const App = () => {
  return (
    <Router>
      <div className="App">
        <Categories />
        <Switch>
          <Route path={HOME_PAGE_ROUTE} exact>
            <Home />
          </Route>
          <Route path={`${HOME_PAGE_ROUTE}${CATEGORY_ROUTE}/:id`} exact>
            <Home />
          </Route>
          <Redirect from="/" to={HOME_PAGE_ROUTE} />
        </Switch>
      </div>
    </Router>
  )
}

export default App
