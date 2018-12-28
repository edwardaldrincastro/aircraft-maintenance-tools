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
    const payload = JSON.parse(value.data)
    // await alert(info)
    console.log(payload)
    endpoint = payload.id
    console.log('scanned:',endpoint)
    response = await axios.get('https://aircraftmaintenance-350da.firebaseio.com/tools/' + endpoint + '.json')
    // await alert(JSON.stringify(response))
    await console.log(response)
    
    await this.props.navigation.navigate('Result', {response: response.data })
    // this.setState({
    //   scannedValue: JSON.parse(value.data)
    // })
    // alert(`scanned${JSON.stringify(value.data)}`)
    // alert(`scanned: ${value.data.info.name}`)
  }
  render() {
    return (
      <View style={styles.container}>
      {/* <Text>Scan QR CODE below</Text> */}
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <QRCodeScanner
            reactivate={true}
            reactivateTimeout={3000}
            onRead={value => this.qrHandler(value)}
            showMarker={true} 
            cameraStyle={{height: '100%', width: '100%'}}
            // topContent={
            //   <Text>Scan QR Code below</Text>}
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