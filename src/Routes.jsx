import React from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'

import Todo from './components/todo/Todo'
import About from './components/about/About'
import Menu from './components/layout/Menu'



export default props => (
    <div className="routes">
        <Router>
            < Menu />
            <Switch>
                <Route exact path="/" component={Todo} />
                <Route exact path="/about" component={About} />
                <Redirect from="*" to="/" />
            </Switch>
        </Router>
    </div>
)