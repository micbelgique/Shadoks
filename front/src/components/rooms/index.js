import React, {
    Component
} from 'react';
import store from '../../store';
import {
    connect
} from 'react-redux';
import * as roomsActions from '../../actions/rooms'

class Rooms extends Component {
    componentDidMount() {
        store.dispatch(roomsActions.LoadRooms());
    }
    render() {
        var roomNodes = this.props.rooms.map(function(data) {
            return ( <room data={data} /> );
        });
        return (<div>{roomNodes}</div>);
    }
}

function mapStateToProps(state) {
   const { rooms, isFetching } = state.rooms;
   return { rooms, isFetching }
}
export default connect(mapStateToProps)(Rooms);
