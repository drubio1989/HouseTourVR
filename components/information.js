import React from 'react';
import { Text, View } from 'react-360';
import { connect } from 'react-redux';
import { pickRoom } from '../actions';
import styles from './../styles';

const mapStateToProps = state => {
  return {
    name: state.name,
    info: state.info,
  }
}

class Information extends React.Component {

  formatString(name) {
    return name.split('_').join(' ')
  }

  render() {
    const { name, info } = this.props;

    return(
      <View>
        <View style={styles.infoPanel}>
          <Text style={styles.panelHeader}>{this.formatString(name)}</Text>
          <View >
            <Text style={styles.infoText}>
              {info}
            </Text>
          </View>
        </View>
      </View>
    )
  }
}

export default ConnectedInformation = connect(mapStateToProps)(Information);
