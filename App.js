import React, { Component } from 'react'
import { StyleSheet, Text, View, NetInfo } from 'react-native'

import { MainStack } from "./src/components"
import NoNetwork from "./src/views/NoNetwork"
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      network: false
    };
  }
  async componentDidMount() {
    const { type } = await NetInfo.getConnectionInfo();
    if (type !== "none") {
      console.log('with network connectivity')
      this.setState({
        network: true
      })
    } else {
      console.log('no network connectivity')

    }
    // NetInfo.isConnected.addEventListener(
    //   'connectionChange'
    // );
  }
  render() {
    return (
      <MainStack />
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
