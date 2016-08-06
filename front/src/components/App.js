import React, {Component} from 'react';
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
                                        <img src="dist/img/user2-160x160.jpg" className="user-image" alt="User Image"/>
                                        <span className="hidden-xs">Mathieu Wautier</span>
                                    </a>
                                    <ul className="dropdown-menu">
                                        <li className="user-header">
                                            <img src="dist/img/user2-160x160.jpg" className="img-circle" alt="User Image"/>

                                            <p>
                                                Mathieu Wautier - Web Developer
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
                                <p>Mathieu Wautier</p>
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
