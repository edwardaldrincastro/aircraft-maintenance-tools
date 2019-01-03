import React, { Component } from 'react'
import { StyleSheet, View } from 'react-native'
import QRCodeScanner from 'react-native-qrcode-scanner'

const axios = require('axios')
class Scanner extends Component {
  qrHandler = async (value) => {
    try {
      const payload = JSON.parse(value.data)
      endpoint = payload.id
      endpoint ?
        response = await axios.get('https://aircraftmaintenance-350da.firebaseio.com/tools/' + endpoint + '.json')
        : console.log('No endpoint found')
      !response.error ? await this.props.navigation.navigate('Result', { response: response.data }) : console.log('Error', response.error)
    } catch {
      alert('Please scan an valid QR Code')
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