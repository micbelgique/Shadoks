import React, {Component} from 'react';
import {Router, Route, Link} from 'react-router'
import logo from '../images/logo.svg';
import 'font-awesome/css/font-awesome.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import '../theme/css/AdminLTE.css';
import '../theme/css/skins/_all-skins.css';
import '../components/App.css';

class App extends Component {
    render() {
        return (
            <div>
                <header className="main-header">
                    <a href="#" className="logo">
                        <span className="logo-lg">
                            <b>CoWorkers</b></span>
                    </a>
                    <nav className="navbar navbar-static-top">
                        <a href="#" className="sidebar-toggle" data-toggle="offcanvas" role="button">
                            <span className="sr-only">Toggle navigation</span>
                        </a>
                        <div className="navbar-custom-menu">
                            <ul className="nav navbar-nav">
                                <li className="dropdown messages-menu">
                                    <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                                        <i className="fa fa-envelope-o"></i>
                                        <span className="label label-success">4</span>
                                    </a>
                                    <ul className="dropdown-menu">
                                        <li className="header">You have 5 messages</li>
                                        <li>

                                            <ul className="menu">
                                                <li>
                                                    <a href="#">
                                                        <div className="pull-left">
                                                            <img src="dist/img/user2-160x160.jpg" className="img-circle" alt="User Image"/>
                                                        </div>
                                                        <h4>
                                                            Support Team
                                                            <small>
                                                                <i className="fa fa-clock-o"></i>
                                                                5 mins</small>
                                                        </h4>
                                                        <p>Why not buy a new awesome theme?</p>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <div className="pull-left">
                                                            <img src="dist/img/user3-128x128.jpg" className="img-circle" alt="User Image"/>
                                                        </div>
                                                        <h4>
                                                            AdminLTE Design Team
                                                            <small>
                                                                <i className="fa fa-clock-o"></i>
                                                                2 hours</small>
                                                        </h4>
                                                        <p>Why not buy a new awesome theme?</p>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <div className="pull-left">
                                                            <img src="dist/img/user4-128x128.jpg" className="img-circle" alt="User Image"/>
                                                        </div>
                                                        <h4>
                                                            Developers
                                                            <small>
                                                                <i className="fa fa-clock-o"></i>
                                                                Today</small>
                                                        </h4>
                                                        <p>Why not buy a new awesome theme?</p>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <div className="pull-left">
                                                            <img src="dist/img/user3-128x128.jpg" className="img-circle" alt="User Image"/>
                                                        </div>
                                                        <h4>
                                                            Sales Department
                                                            <small>
                                                                <i className="fa fa-clock-o"></i>
                                                                Yesterday</small>
                                                        </h4>
                                                        <p>Why not buy a new awesome theme?</p>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <div className="pull-left">
                                                            <img src="dist/img/user4-128x128.jpg" className="img-circle" alt="User Image"/>
                                                        </div>
                                                        <h4>
                                                            Reviewers
                                                            <small>
                                                                <i className="fa fa-clock-o"></i>
                                                                2 days</small>
                                                        </h4>
                                                        <p>Why not buy a new awesome theme?</p>
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
                                        <span className="label label-warning">10</span>
                                    </a>
                                    <ul className="dropdown-menu">
                                        <li className="header">You have 10 notifications</li>
                                        <li>
                                            <ul className="menu">
                                                <li>
                                                    <a href="#">
                                                        <i className="fa fa-users text-aqua"></i>
                                                        5 new members joined today
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <i className="fa fa-warning text-yellow"></i>
                                                        Very long description here that may not fit into the page and may cause design problems
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <i className="fa fa-users text-red"></i>
                                                        5 new members joined
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <i className="fa fa-shopping-cart text-green"></i>
                                                        25 sales made
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <i className="fa fa-user text-red"></i>
                                                        You changed your username
                                                    </a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="footer">
                                            <a href="#">View all</a>
                                        </li>
                                    </ul>
                                </li>

                                <li className="dropdown tasks-menu">
                                    <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                                        <i className="fa fa-flag-o"></i>
                                        <span className="label label-danger">9</span>
                                    </a>
                                    <ul className="dropdown-menu">
                                        <li className="header">You have 9 tasks</li>
                                        <li>

                                            <ul className="menu">
                                                <li>
                                                    <a href="#">
                                                        <h3>
                                                            Design some buttons
                                                            <small className="pull-right">20%</small>
                                                        </h3>
                                                        <div className="progress xs">
                                                            <div className="progress-bar progress-bar-aqua" role="progressbar" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100">
                                                                <span className="sr-only">20% Complete</span>
                                                            </div>
                                                        </div>
                                                    </a>
                                                </li>

                                                <li>
                                                    <a href="#">
                                                        <h3>
                                                            Create a nice theme
                                                            <small className="pull-right">40%</small>
                                                        </h3>
                                                        <div className="progress xs">
                                                            <div className="progress-bar progress-bar-green" role="progressbar" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100">
                                                                <span className="sr-only">40% Complete</span>
                                                            </div>
                                                        </div>
                                                    </a>
                                                </li>

                                                <li>
                                                    <a href="#">
                                                        <h3>
                                                            Some task I need to do
                                                            <small className="pull-right">60%</small>
                                                        </h3>
                                                        <div className="progress xs">
                                                            <div className="progress-bar progress-bar-red" role="progressbar" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100">
                                                                <span className="sr-only">60% Complete</span>
                                                            </div>
                                                        </div>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <h3>
                                                            Make beautiful transitions
                                                            <small className="pull-right">80%</small>
                                                        </h3>
                                                        <div className="progress xs">
                                                            <div className="progress-bar progress-bar-yellow" role="progressbar" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100">
                                                                <span className="sr-only">80% Complete</span>
                                                            </div>
                                                        </div>
                                                    </a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="footer">
                                            <a href="#">View all tasks</a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="dropdown user user-menu">
                                    <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                                        <img src="dist/img/user2-160x160.jpg" className="user-image" alt="User Image"/>
                                        <span className="hidden-xs">Alexander Pierce</span>
                                    </a>
                                    <ul className="dropdown-menu">
                                        <li className="user-header">
                                            <img src="dist/img/user2-160x160.jpg" className="img-circle" alt="User Image"/>

                                            <p>
                                                Alexander Pierce - Web Developer
                                                <small>Member since Nov. 2012</small>
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
                                                <a href="#" className="btn btn-default btn-flat">Profile</a>
                                            </div>
                                            <div className="pull-right">
                                                <a href="#" className="btn btn-default btn-flat">Sign out</a>
                                            </div>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="#" data-toggle="control-sidebar">
                                        <i className="fa fa-gears"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>

                    </nav>
                </header>
                <aside className="main-sidebar">
                    <section className="sidebar">
                        <div className="user-panel">
                            <div className="pull-left Image">
                                <img src="dist/img/user2-160x160.jpg" className="img-circle" alt="User Image"/>
                            </div>
                            <div className="pull-left info">
                                <p>Alexander Pierce</p>
                                <a href="#">
                                    <i className="fa fa-circle text-success"></i>
                                    Online</a>
                            </div>
                        </div>

                        <form action="#" method="get" className="sidebar-form">
                            <div className="input-group">
                                <input type="text" name="q" className="form-control" placeholder="Search..."/>
                                <span className="input-group-btn">
                                    <button type="submit" name="search" id="search-btn" className="btn btn-flat">
                                        <i className="fa fa-search"></i>
                                    </button>
                                </span>
                            </div>
                        </form>

                        <ul className="sidebar-menu">
                            <li className="active treeview">
                                <a href="#">
                                    <i className="fa fa-dashboard"></i>
                                    <span>Dashboard</span>
                                    <span className="pull-right-container">
                                        <i className="fa fa-angle-left pull-right"></i>
                                    </span>
                                </a>
                                <ul className="treeview-menu">
                                    <li>
                                        <a href="index.html">
                                            <i className="fa fa-circle-o"></i>
                                            Dashboard v1</a>
                                    </li>
                                    <li className="active">
                                        <a href="index2.html">
                                            <i className="fa fa-circle-o"></i>
                                            Dashboard v2</a>
                                    </li>
                                </ul>
                            </li>
                            <li className="treeview">
                                <ul className="treeview-menu">
                                    <li>
                                        <a href="pages/layout/top-nav.html">
                                            <i className="fa fa-circle-o"></i>
                                            Top Navigation</a>
                                    </li>
                                    <li>
                                        <a href="pages/layout/boxed.html">
                                            <i className="fa fa-circle-o"></i>
                                            Boxed</a>
                                    </li>
                                    <li>
                                        <a href="pages/layout/fixed.html">
                                            <i className="fa fa-circle-o"></i>
                                            Fixed</a>
                                    </li>
                                    <li>
                                        <a href="pages/layout/collapsed-sidebar.html">
                                            <i className="fa fa-circle-o"></i>
                                            Collapsed Sidebar</a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a href="pages/widgets.html">
                                    <i className="fa fa-th"></i>
                                    <span>Widgets</span>
                                </a>
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

                <div className="content-wrapper">
                    <section className="content-header">
                        <h1>
                            Dashboard
                        </h1>
                        <ol className="breadcrumb">
                            <li>
                                <a href="#">
                                    <i className="fa fa-dashboard"></i>
                                    Home</a>
                            </li>
                            <li className="active">Dashboard</li>
                        </ol>
                    </section>

                    <section className="content">
                        <div className="row">
                            <div className="col-md-8">
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="box box-warning direct-chat direct-chat-warning">
                                            <div className="box-header with-border">
                                                <h3 className="box-title">Direct Chat</h3>

                                                <div className="box-tools pull-right">
                                                    <span data-toggle="tooltip" title="3 New Messages" className="badge bg-yellow">3</span>
                                                    <button type="button" className="btn btn-box-tool" data-widget="collapse">
                                                        <i className="fa fa-minus"></i>
                                                    </button>
                                                    <button type="button" className="btn btn-box-tool" data-toggle="tooltip" title="Contacts" data-widget="chat-pane-toggle">
                                                        <i className="fa fa-comments"></i>
                                                    </button>
                                                    <button type="button" className="btn btn-box-tool" data-widget="remove">
                                                        <i className="fa fa-times"></i>
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="box-body">
                                                <div className="direct-chat-messages">
                                                    <div className="direct-chat-msg">
                                                        <div className="direct-chat-info clearfix">
                                                            <span className="direct-chat-name pull-left">Mathieu Wautier</span>
                                                            <span className="direct-chat-timestamp pull-right">06 Aug 2:00 pm</span>
                                                        </div>
                                                        <img className="direct-chat-img" src="dist/img/user1-128x128.jpg" alt="message user image"/>
                                                        <div className="direct-chat-text">
                                                            Hello CoWorkers !
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="direct-chat-contacts">
                                                    <ul className="contacts-list">
                                                        <li>
                                                            <a href="#">
                                                                <img className="contacts-list-img" src="dist/img/user1-128x128.jpg" alt="User Image"/>

                                                                <div className="contacts-list-info">
                                                                    <span className="contacts-list-name">
                                                                        Count Dracula
                                                                        <small className="contacts-list-date pull-right">2/28/2015</small>
                                                                    </span>
                                                                    <span className="contacts-list-msg">How have you been? I was...</span>
                                                                </div>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#">
                                                                <img className="contacts-list-img" src="dist/img/user7-128x128.jpg" alt="User Image"/>

                                                                <div className="contacts-list-info">
                                                                    <span className="contacts-list-name">
                                                                        Sarah Doe
                                                                        <small className="contacts-list-date pull-right">2/23/2015</small>
                                                                    </span>
                                                                    <span className="contacts-list-msg">I will be waiting for...</span>
                                                                </div>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#">
                                                                <img className="contacts-list-img" src="dist/img/user3-128x128.jpg" alt="User Image"/>

                                                                <div className="contacts-list-info">
                                                                    <span className="contacts-list-name">
                                                                        Nadia Jolie
                                                                        <small className="contacts-list-date pull-right">2/20/2015</small>
                                                                    </span>
                                                                    <span className="contacts-list-msg">I ll call you back at...</span>
                                                                </div>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#">
                                                                <img className="contacts-list-img" src="dist/img/user5-128x128.jpg" alt="User Image"/>

                                                                <div className="contacts-list-info">
                                                                    <span className="contacts-list-name">
                                                                        Nora S. Vans
                                                                        <small className="contacts-list-date pull-right">2/10/2015</small>
                                                                    </span>
                                                                    <span className="contacts-list-msg">Where is your new...</span>
                                                                </div>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#">
                                                                <img className="contacts-list-img" src="dist/img/user6-128x128.jpg" alt="User Image"/>

                                                                <div className="contacts-list-info">
                                                                    <span className="contacts-list-name">
                                                                        John K.
                                                                        <small className="contacts-list-date pull-right">1/27/2015</small>
                                                                    </span>
                                                                    <span className="contacts-list-msg">Can I take a look at...</span>
                                                                </div>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#">
                                                                <img className="contacts-list-img" src="dist/img/user8-128x128.jpg" alt="User Image"/>

                                                                <div className="contacts-list-info">
                                                                    <span className="contacts-list-name">
                                                                        Kenneth M.
                                                                        <small className="contacts-list-date pull-right">1/4/2015</small>
                                                                    </span>
                                                                    <span className="contacts-list-msg">Never mind I found...</span>
                                                                </div>
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="box-footer">
                                                <form action="#" method="post">
                                                    <div className="input-group">
                                                        <input type="text" name="message" placeholder="Type Message ..." className="form-control"/>
                                                        <span className="input-group-btn">
                                                            <button type="button" className="btn btn-warning btn-flat">Send</button>
                                                        </span>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-md-6">
                                        <div className="box box-danger">
                                            <div className="box-header with-border">
                                                <h3 className="box-title">Latest Coworkers</h3>

                                                <div className="box-tools pull-right">
                                                    <span className="label label-danger">4 New Members</span>
                                                    <button type="button" className="btn btn-box-tool" data-widget="collapse">
                                                        <i className="fa fa-minus"></i>
                                                    </button>
                                                    <button type="button" className="btn btn-box-tool" data-widget="remove">
                                                        <i className="fa fa-times"></i>
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="box-body no-padding">
                                                <ul className="users-list clearfix">
                                                    <li>
                                                        <img src="dist/img/user1-128x128.jpg" alt="User Image"/>
                                                        <a className="users-list-name" href="#">Mathieu</a>
                                                        <span className="users-list-date">Today</span>
                                                    </li>
                                                    <li>
                                                        <img src="dist/img/user8-128x128.jpg" alt="User Image"/>
                                                        <a className="users-list-name" href="#">Jean-Philippe</a>
                                                        <span className="users-list-date">Yesterday</span>
                                                    </li>
                                                    <li>
                                                        <img src="dist/img/user7-128x128.jpg" alt="User Image"/>
                                                        <a className="users-list-name" href="#">Vincent</a>
                                                        <span className="users-list-date">04 Aug</span>
                                                    </li>
                                                    <li>
                                                        <img src="dist/img/user6-128x128.jpg" alt="User Image"/>
                                                        <a className="users-list-name" href="#">Mathis</a>
                                                        <span className="users-list-date">04 Aug</span>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="box-footer text-center">
                                                <a href="javascript:void(0)" className="uppercase">View All Users</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>

                <footer className="main-footer">
                    <div className="pull-right hidden-xs">
                        <b>Version</b>
                        2.3.6
                    </div>
                    <strong>Copyright &copy; 2014-2016
                        <a href="">Almsaeed Studio</a>.</strong>
                     All rights reserved.
                </footer>

                <aside className="control-sidebar control-sidebar-dark">

                    <ul className="nav nav-tabs nav-justified control-sidebar-tabs">
                        <li>
                            <a href="#control-sidebar-home-tab" data-toggle="tab">
                                <i className="fa fa-home"></i>
                            </a>
                        </li>
                        <li>
                            <a href="#control-sidebar-settings-tab" data-toggle="tab">
                                <i className="fa fa-gears"></i>
                            </a>
                        </li>
                    </ul>

                    <div className="tab-content">
                        <div className="tab-pane" id="control-sidebar-home-tab">
                            <h3 className="control-sidebar-heading">Recent Activity</h3>
                            <ul className="control-sidebar-menu">
                                <li>
                                    <a href="javascript:void(0)">
                                        <i className="menu-icon fa fa-birthday-cake bg-red"></i>

                                        <div className="menu-info">
                                            <h4 className="control-sidebar-subheading">Langdon s Birthday</h4>

                                            <p>Will be 23 on April 24th</p>
                                        </div>
                                    </a>
                                </li>
                                <li>
                                    <a href="javascript:void(0)">
                                        <i className="menu-icon fa fa-user bg-yellow"></i>

                                        <div className="menu-info">
                                            <h4 className="control-sidebar-subheading">Frodo Updated His Profile</h4>

                                            <p>New phone +1(800)555-1234</p>
                                        </div>
                                    </a>
                                </li>
                                <li>
                                    <a href="javascript:void(0)">
                                        <i className="menu-icon fa fa-envelope-o bg-light-blue"></i>

                                        <div className="menu-info">
                                            <h4 className="control-sidebar-subheading">Nora Joined Mailing List</h4>

                                            <p>nora@example.com</p>
                                        </div>
                                    </a>
                                </li>
                                <li>
                                    <a href="javascript:void(0)">
                                        <i className="menu-icon fa fa-file-code-o bg-green"></i>

                                        <div className="menu-info">
                                            <h4 className="control-sidebar-subheading">Cron Job 254 Executed</h4>

                                            <p>Execution time 5 seconds</p>
                                        </div>
                                    </a>
                                </li>
                            </ul>

                            <h3 className="control-sidebar-heading">Tasks Progress</h3>
                            <ul className="control-sidebar-menu">
                                <li>
                                    <a href="javascript:void(0)">
                                        <h4 className="control-sidebar-subheading">
                                            Custom Template Design
                                            <span className="label label-danger pull-right">70%</span>
                                        </h4>

                                        <div className="progress progress-xxs">
                                            <div className="progress-bar progress-bar-danger"></div>
                                        </div>
                                    </a>
                                </li>
                                <li>
                                    <a href="javascript:void(0)">
                                        <h4 className="control-sidebar-subheading">
                                            Update Resume
                                            <span className="label label-success pull-right">95%</span>
                                        </h4>

                                        <div className="progress progress-xxs">
                                            <div className="progress-bar progress-bar-success"></div>
                                        </div>
                                    </a>
                                </li>
                                <li>
                                    <a href="javascript:void(0)">
                                        <h4 className="control-sidebar-subheading">
                                            Laravel Integration
                                            <span className="label label-warning pull-right">50%</span>
                                        </h4>

                                        <div className="progress progress-xxs">
                                            <div className="progress-bar progress-bar-warning"></div>
                                        </div>
                                    </a>
                                </li>
                                <li>
                                    <a href="javascript:void(0)">
                                        <h4 className="control-sidebar-subheading">
                                            Back End Framework
                                            <span className="label label-primary pull-right">68%</span>
                                        </h4>

                                        <div className="progress progress-xxs">
                                            <div className="progress-bar progress-bar-primary"></div>
                                        </div>
                                    </a>
                                </li>
                            </ul>

                        </div>

                        <div className="tab-pane" id="control-sidebar-settings-tab">
                            <form method="post">
                                <h3 className="control-sidebar-heading">General Settings</h3>

                                <div className="form-group">
                                    <label className="control-sidebar-subheading">
                                        Report panel usage
                                        <input type="checkbox" className="pull-right" checked/>
                                    </label>

                                    <p>
                                        Some information about this general settings option
                                    </p>
                                </div>

                                <div className="form-group">
                                    <label className="control-sidebar-subheading">
                                        Allow mail redirect
                                        <input type="checkbox" className="pull-right" checked/>
                                    </label>

                                    <p>
                                        Other sets of options are available
                                    </p>
                                </div>

                                <div className="form-group">
                                    <label className="control-sidebar-subheading">
                                        Expose author name in posts
                                        <input type="checkbox" className="pull-right" checked/>
                                    </label>

                                    <p>
                                        Allow the user to show his name in blog posts
                                    </p>
                                </div>

                                <h3 className="control-sidebar-heading">Chat Settings</h3>

                                <div className="form-group">
                                    <label className="control-sidebar-subheading">
                                        Show me as online
                                        <input type="checkbox" className="pull-right" checked/>
                                    </label>
                                </div>

                                <div className="form-group">
                                    <label className="control-sidebar-subheading">
                                        Turn off notifications
                                        <input type="checkbox" className="pull-right"/>
                                    </label>
                                </div>

                                <div className="form-group">
                                    <label className="control-sidebar-subheading">
                                        Delete chat history
                                        <a href="javascript:void(0)" className="text-red pull-right">
                                            <i className="fa fa-trash-o"></i>
                                        </a>
                                    </label>
                                </div>
                            </form>
                        </div>
                    </div>
                </aside>
                <div className="control-sidebar-bg"></div>
            </div>
        );
    }
}

export default App;
