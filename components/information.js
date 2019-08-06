import React from 'react';
import { Text, View } from 'react-360';
import { connect } from 'react-redux';
import { pickRoom } from '../actions';
import styles from './../styles';

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

class Information extends React.Component {
  render() {
    return(
      <View>
        <View style={styles.infoPanel}>
          <Text style={styles.header}>{this.props.name.split('_').join(' ')}</Text>
          <Text style={{fontSize: 20, textAlign: 'center', fontWeight: 'bold'}}>
            {this.props.info}
          </Text>
        </View>
      </View>
    )
  }
}

export default ConnectedInformation = connect(mapStateToProps, mapDisptachToProps)(Information);
