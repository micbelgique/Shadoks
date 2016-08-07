import React, {Component} from 'react';
import 'font-awesome/css/font-awesome.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import '../../theme/css/AdminLTE.css';
import '../../theme/css/skins/_all-skins.css';
import {connect} from 'react-redux';
import * as userActions from '../../actions/user';
import store from '../../store';
import {browserHistory} from 'react-router'

class Layout extends Component {

    render() {
        return (
            <div>
                <AppHeader/>
                <NavBar/>
                        {this.props.children}
                <AppFooter/>
            </div>
        );
    }
}

class AppHeader extends Component {
    render() {
        return (
            <header className="main-header">
                <a href="#" className="logo">
                    <span className="logo-lg">
                        <b>CoWorkers</b>
                    </span>
                </a>
                <nav className="navbar navbar-static-top">
                    <div className="navbar-custom-menu">
                        <ul className="nav navbar-nav">
                            <li className="dropdown messages-menu">
                                <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                                    <i className="fa fa-envelope-o"></i>
                                    <span className="label label-success">1</span>
                                </a>
                                <ul className="dropdown-menu">
                                    <li className="header">You have 1 messages</li>
                                    <li>

                                        <ul className="menu">
                                            <li>
                                                <a href="#">
                                                    <div className="pull-left">
                                                        <img src="dist/img/user2-160x160.jpg" className="img-circle" alt="User Image"/>
                                                    </div>
                                                    <h4>
                                                        Mathis André
                                                        <small>
                                                            <i className="fa fa-clock-o"></i>
                                                            5 mins</small>
                                                    </h4>
                                                    <p>Welcome Mathieu!</p>
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="footer">
                                        <a href="#">See All Messages</a>
                                    </li>
                                </ul>
                            </li>
                            <li className="dropdown notifications-menu">
                                <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                                    <i className="fa fa-bell-o"></i>
                                    <span className="label label-warning">1</span>
                                </a>
                                <ul className="dropdown-menu">
                                    <li className="header">You have 1 notifications</li>
                                    <li>
                                        <ul className="menu">
                                            <li>
                                                <a href="#">
                                                    <i className="fa fa-users text-aqua"></i>
                                                    4 new members joined this week
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="footer">
                                        <a href="#">View all</a>
                                    </li>
                                </ul>
                            </li>

                            <li className="dropdown user user-menu">
                                <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                                    <img src="../../src/dist/img/matw_avatar.png" className="user-image" alt="User Image"/>
                                    <span className="hidden-xs">Mathieu Wautier</span>
                                </a>
                                <ul className="dropdown-menu">
                                    <li className="user-header">
                                        <img src="../src/dist/img/matw_avatar.png" className="img-circle" alt="User Image"/>

                                        <p>
                                            Mathieu Wautier - Web Developer
                                        </p>
                                    </li>
                                    <li className="user-body">
                                        <div className="row">
                                            <div className="col-xs-4 text-center">
                                                <a href="#">Followers</a>
                                            </div>
                                            <div className="col-xs-4 text-center">
                                                <a href="#">Sales</a>
                                            </div>
                                            <div className="col-xs-4 text-center">
                                                <a href="#">Friends</a>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="user-footer">
                                        <div className="pull-left">
                                            <a onClick={() => browserHistory.push('/Profil')} className="btn btn-default btn-flat">Profile</a>
                                        </div>
                                        <div className="pull-right">
                                            <a href="#" className="btn btn-default btn-flat">Sign out</a>
                                        </div>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>

                </nav>
            </header>
        );
    }
}

class NavBar extends Component {
    render() {
        return (
            <aside className="main-sidebar">
                <section className="sidebar">
                    <div className="user-panel">
                          <div className="pull-left image">
                            <img src="../src/dist/img/matw_avatar_160px.png" className="img-circle" alt="User Image"/>
                          </div>
                          <div className="pull-left info">
                            <p>Mathieu Wautier</p>
                            <a href="#"><i className="fa fa-circle text-success"></i> Online</a>
                          </div>
                  </div>

                    <ul className="sidebar-menu">
                        <li className="active treeview">
                            <a href="/Rooms">
                                <i className="fa fa-building-o"></i>
                                <span>CoWorking</span>
                            </a>
                            <ul className="treeview-menu">
                                <li>
                                    <a onClick={() => browserHistory.push('/Rooms/1')}>
                                        <i className="fa fa-circle-o"></i>
                                        Room 1</a>
                                </li>
                                <li >
                                    <a onClick={() => browserHistory.push('/Rooms/2')}>
                                        <i className="fa fa-circle-o"></i>
                                      Room 2</a>
                                </li>
                                <li >
                                  <a onClick={() => browserHistory.push('/Rooms/3')}>
                                        <i className="fa fa-circle-o"></i>
                                      Room 3</a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href="pages/calendar.html">
                                <i className="fa fa-calendar"></i>
                                <span>Calendar</span>
                                <span className="pull-right-container">
                                    <small className="label pull-right bg-red">3</small>
                                </span>
                            </a>
                        </li>
                        <li>
                            <a href="pages/mailbox/mailbox.html">
                                <i className="fa fa-envelope"></i>
                                <span>Mailbox</span>
                                <span className="pull-right-container">
                                    <small className="label pull-right bg-yellow">12</small>
                                </span>
                            </a>
                        </li>
                    </ul>
                </section>
            </aside>
        );
    }
}

class AppFooter extends Component {
    render() {
        return (
            <footer className="main-footer">
                <div className="pull-right hidden-xs">
                    <b>Version</b>
                    2.3.6
                </div>
                <strong>Copyright &copy; 2016
                    <a href="">Shadoks</a>.</strong>
                All rights reserved.
            </footer>
        );
    }
}

// export default Layout;


function mapStateToProps(state) {
   // TODO : tout pourri
   const { user, isFetching } = state.user;
   return { user, isFetching }
}
export default connect(mapStateToProps)(Layout);
