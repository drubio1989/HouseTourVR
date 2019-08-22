import React from 'react';
import { AppRegistry } from 'react-360';
import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import { Provider } from 'react-redux';
import { roomReducer } from './reducers';
import ConnectedSelections from './components/selections.js';
import ConnectedInformation from './components/information.js';

const store = createStore(roomReducer, applyMiddleware(logger));

class HousePanel extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <ConnectedInformation />
      </Provider>
    );
  }
};

class SelectionPanel extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <ConnectedSelections />
      </Provider>
    );
  }
}

AppRegistry.registerComponent('HousePanel', () => HousePanel);
AppRegistry.registerComponent('SelectionPanel', () => SelectionPanel);
