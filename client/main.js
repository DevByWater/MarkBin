import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import { Meteor } from 'meteor/meteor'

import App from './components/app'
import BinsMain from './components/bins/bins_main'
import BinsList from './components/bins/bins_list'
import BinsWorplace from './components/bins/bins_workplace'
import { Bins } from '../imports/collections/bins'
import Home from './components/home'
import AuthForm from './components/forms/auth'

import AuthenticatedApp from './handlers/AuthenticatedApp'

const routes = (
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={Home} />
            <Route path="auths/:action" component={AuthForm} />
            <Route path="bins/:username" component={AuthenticatedApp} >
                <IndexRoute  component={BinsMain} />
                <Route path="workplace/:binName" component={BinsWorplace} />
            </Route>
        </Route>
    </Router> 
)

Meteor.startup(()=>{
    ReactDOM.render(routes, document.querySelector('.render-target'))
})