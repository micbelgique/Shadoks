import React, { Component } from 'react';
import 'font-awesome/css/font-awesome.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import '../../theme/css/AdminLTE.css';
import '../../theme/css/skins/_all-skins.css';

class Room extends Component {
    render() {
        return (
          <div className="box box-danger">
              <div className="box-header with-border">
                  <h3 className="box-title">Latest CoWorkers</h3>
                  <div className="box-tools pull-right">
                      <span className="label label-danger">4 new members</span>
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
                        <div className="img_faces">
                          <img src="../src/dist/img/matw_avatar_160px.png" alt="User Image"/>
                        </div>
                          <a className="users-list-name" href="#">Mathieu</a>
                          <span className="users-list-date">Today</span>
                      </li>
                      <li>
                        <div className="img_faces">
                          <img src="../src/dist/img/matw_avatar_160px.png" alt="User Image"/>
                        </div>
                          <a className="users-list-name" href="#">Jean-Philippe</a>
                          <span className="users-list-date">Yesterday</span>
                      </li>
                      <li>
                        <div className="img_faces">
                          <img src="../src/dist/img/matw_avatar_160px.png" alt="User Image"/>
                        </div>
                          <a className="users-list-name" href="#">Vincent</a>
                          <span className="users-list-date">04 Aug</span>
                      </li>
                      <li>
                        <div className="img_faces">
                          <img src="../src/dist/img/matw_avatar_160px.png" alt="User Image"/>
                        </div>
                          <a className="users-list-name" href="#">Mathis</a>
                          <span className="users-list-date">04 Aug</span>
                      </li>
                  </ul>
              </div>
              <div className="box-footer text-center">
                  <a href="javascript:void(0)" className="uppercase">View all users</a>
              </div>
          </div>
        );
    }
}

export default Room;
