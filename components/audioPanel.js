import React from 'react';
import {
  asset,
  Image,
  NativeModules,
  View,
  VrButton
} from 'react-360';
import styles from '../styles';

const { AudioModule } = NativeModules;

class AudioPanel extends React.Component {
  playAmbientMusic() {
    AudioModule.playEnvironmental({
      source: asset('audio/ambient.wav'),
      volume: 0.3
    })
  }

  stopAmbientMusic() {
    AudioModule.stopEnvironmental();
  }

  render() {
    return (
      <View style={styles.audioPanel}>
        <VrButton onClick={() => this.playAmbientMusic()}>
          <Image style={styles.audioImage} source={asset('images/audioOn.png')} />
        </VrButton>
        <VrButton onClick={() => this.stopAmbientMusic()}>
          <Image style={styles.audioImage} source={asset('images/audioOff.png')} />
        </VrButton>
      </View>
    );
  }
}

export default AudioPanel;
