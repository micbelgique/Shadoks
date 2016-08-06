import React from 'react';
import ReactDOM from 'react-dom';
import Layout from './components/_layout';
import './index.css';
import Room from './components/room';
import {createStore, combineReducers, applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import {syncHistoryWithStore, routerReducer} from 'react-router-redux'
import Login from './components/Login'

// const history = syncHistoryWithStore(browserHistory, store)

const Text = (props) =>
  <p>COUCOU</p>;

ReactDOM.render(
    <Router history={browserHistory}>
    <Route path="/" component={Layout}>
        <IndexRoute component={Text}/>
        <Route path="foo" component={Room}/>
        <Route path="/Login" component={Login} />
    </Route>
</Router>, document.getElementById('root'));
