import React from 'react';
import ReactDOM from 'react-dom';
import Layout from './components/_layout';
import './index.css';
import Rooms from './components/rooms';
import {createStore, combineReducers, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import {syncHistoryWithStore} from 'react-router-redux';
import Login from './components/Login';
import store from './store';

const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
    <Provider store={store}>
    <Router history={history}>
        <Route path="/" component={Layout}>
            <IndexRoute component={Rooms}/>
            <Route path="Rooms" component={Rooms}/>
            <Route path="Room/:roomId" component={RoomDetails}/>
        </Route>
        <Route path="/Login" component={Login}/>
    </Router>
</Provider>, document.getElementById('root'));
