import React, {Component} from 'react';
import 'font-awesome/css/font-awesome.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import '../../theme/css/AdminLTE.css';
import '../../theme/css/skins/_all-skins.css';
import './room.css';

const UserThumbs = (props) => <li>
    <div className="img_faces">
        <img src={props.Avatar} alt="User Image"/>
    </div>
    <a className="users-list-name" href="#">{props.Prenom}</a>
    <span className="users-list-date">{props.Nom}</span>
</li>;

class Room extends Component {
    render() {
        const {Users, Name, CoWorkingName} = this.props;
        const thumbsNodes = Users.map(function(user) {
          return (<UserThumbs key={user.Id} {...user}/>);
        });

        return (
            <div className="box box-danger">
                <div className="box-header with-border">
                    <h3 className="box-title"><b>{CoWorkingName}</b> / {Name}</h3>
                    <div className="box-tools pull-right">
                        <span className="label label-danger">{Users.length} CoWorkers</span>
                    </div>
                </div>
                <div className="box-body no-padding">
                    <ul className="users-list clearfix">
                        {thumbsNodes}
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
