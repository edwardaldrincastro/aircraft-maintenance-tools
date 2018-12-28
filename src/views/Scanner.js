import React, { Component } from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'
import QRCodeScanner from 'react-native-qrcode-scanner'


const axios = require('axios')

class Scanner extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      scannedValue: ''
    };
  }
  inputHandler = (val) => {
    this.setState({
      input: val
    })
  }
  qrHandler = async (value) => {
    try {
      const payload = JSON.parse(value.data)
      console.log(payload)
      endpoint = payload.id
      console.log('scanned:', endpoint)
      endpoint ? 
      response = await axios.get('https://aircraftmaintenance-350da.firebaseio.com/tools/' + endpoint + '.json')
      : alert('Please scan an invalid QR Code.')
      await console.log(response)
      !response.error ? await this.props.navigation.navigate('Result', { response: response.data }) : console.log('Error', response.error)
    } catch ({ response }) {
      console.log('Error in get tool', response.error)
      alert('Please scan an invalid QR Code')
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
          <QRCodeScanner
            reactivate={true}
            reactivateTimeout={3000}
            onRead={value => this.qrHandler(value)}
            showMarker={true}
            cameraStyle={{ height: '100%', width: '100%' }}
          />
        </ View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
})

export default Scanner