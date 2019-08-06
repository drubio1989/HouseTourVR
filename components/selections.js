import React from 'react';
import { asset, Environment, Text, View, VrButton } from 'react-360';
import { connect } from 'react-redux';
import styles from './../styles';
import AudioPanel from './audioPanel';
import { pickRoom } from '../actions';

const mapStateToProps = state => {
  return {
    name: state.name,
    info: state.info,
    adjacentRooms: state.adjacentRooms
  }
}

const mapDisptachToProps = (dispatch, event) => {
  return {
    onChooseRoom: (event) =>  dispatch(pickRoom(event))
  }
}

class Button extends React.Component {
  state = {
    hover: false
  }

  changeEnvironment(img) {
    Environment.setBackgroundImage(asset(`images/${img}.jpg`))
  }

  render() {
    return(
        <View>
          <VrButton style={this.state.hover ? styles.hover : styles.button}
                    onEnter={() => this.setState({hover: true})}
                    onExit={() => this.setState({hover: false})}
                    onClick={() => {this.props.onChooseRoom(this.props.selection); this.changeEnvironment(this.props.selection)}}>
                    <Text style={{textAlign: 'center'}}>{this.props.selection}</Text>
          </VrButton>
        </View>
    );
  }
}

const ConnectedButton = connect(mapStateToProps, mapDisptachToProps)(Button);

class Selections extends React.Component {
  createRoomButtons(adjacentRooms) {
    let buttons = [];

    adjacentRooms.map(room => {
      buttons.push(<ConnectedButton key={room} selection={room}/>)
    });

    return buttons;
  }

  render() {
    return(
      <View>
        <View style={styles.buttonPanel}>
          <View>
            <Text style={styles.header}>Room Selection</Text>
          </View>
          <View>
            { this.createRoomButtons(this.props.adjacentRooms) }
          </View>
          <AudioPanel />
        </View>
      </View>
    );
  }
}

export default ConnectedSelections = connect(mapStateToProps, mapDisptachToProps)(Selections);
