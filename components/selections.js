import React from 'react';
import { asset, Environment, Text, View, VrButton } from 'react-360';
import { connect } from 'react-redux';
import AudioPanel from './audioPanel';
import { pickRoom } from '../actions';
import styles from './../styles';

const mapStateToProps = state => {
  return {
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

  formatString(string) {
    return string.charAt(0).toUpperCase() + string.slice(1).split('_').join(' ')
  }

  render() {
    const { onChooseRoom, selection } = this.props;
    return(
      <View>
        <VrButton style={this.state.hover ? styles.hover : styles.button}
                  onEnter={() => this.setState({hover: true})}
                  onExit={() => this.setState({hover: false})}
                  onClick={() => {onChooseRoom(selection); this.changeEnvironment(selection)}}>
                  <Text style={styles.buttonText}>{this.formatString(selection)}</Text>
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
    const { adjacentRooms } = this.props;
    return(
      <View>
        <View style={styles.buttonPanel}>
          <View>
            <Text style={styles.panelHeader}>Room Selection</Text>
          </View>
          <View>
            { this.createRoomButtons(adjacentRooms) }
          </View>
          <AudioPanel />
        </View>
      </View>
    );
  }
}

export default ConnectedSelections = connect(mapStateToProps, mapDisptachToProps)(Selections);
