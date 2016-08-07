import React, {Component} from 'react';
import store from '../../store';
import {connect} from 'react-redux';
import * as roomsActions from '../../actions/rooms'
import Room from '../room'

class Rooms extends Component {
    componentDidMount() {
        store.dispatch(roomsActions.LoadRooms());
    }
    render() {
        var roomNodes = this.props.rooms.map(function(room) {
            return ( <div  key={room.Id} className="col-xs-12 col-sm-12 col-md-6 col-lg-4"><Room {...room} /></div> );
        });
        return (<div className="row">{roomNodes}</div>);
    }
}

function mapStateToProps(state) {
   const { rooms, isFetching } = state.rooms;
   return { rooms, isFetching }
}
export default connect(mapStateToProps)(Rooms);
