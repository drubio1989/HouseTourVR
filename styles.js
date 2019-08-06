import { StyleSheet } from 'react-360';

const styles = StyleSheet.create({
  audioPanel: {
    flexDirection: 'row',
  },
  audioImage: {
    height: 50,
    width: 50
  },
  infoPanel: {
    width: 400,
    height: 400,
    opacity: 0.8,
    backgroundColor: 'rgb(255, 200, 50)',
    borderColor: 'rgb(255, 255, 255)',
    borderWidth: 5,
    borderRadius: 20,
  },
  buttonPanel: {
    width: 400,
    height: 400,
    opacity: 0.8,
    backgroundColor: 'rgb(255, 200, 50)',
    borderColor: 'rgb(255, 255, 255)',
    borderWidth: 5,
    borderRadius: 30,
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  audioButton: {
    width: 50,
    height: 50,
    backgroundColor: 'rgb(0,204,102)',
    borderColor: 'rgb(255,255,255)',
    borderWidth: 2,
  },
  button: {
    width: 200,
    backgroundColor: 'rgb(0,0,0)',
    borderColor: 'rgb(255,255,255)',
    borderWidth: 5,
  },
  hover: {
    width: 200,
    backgroundColor: '#0073B7',
    borderColor: 'rgb(255,255,255)',
    borderWidth: 5
  },
  header: {
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'center'
  }
});

export default styles;
