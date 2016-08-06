import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.js';
import './index.css';
import Room from './components/room';
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { Router, Route, browserHistory } from 'react-router'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'

// const history = syncHistoryWithStore(browserHistory, store)

ReactDOM.render(
  <Router history={browserHistory}>
     <Route path="/" component={App}/>
     <Route path="/foo" component={Room}/>
  </Router>,
  document.getElementById('root')
);
