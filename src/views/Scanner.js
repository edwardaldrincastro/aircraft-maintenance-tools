import React, { Component } from 'react'
import { StyleSheet, Text, View, TextInput, Button } from 'react-native'

const axios = require('axios')

class Scanner extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ''
    };
  }
  buttonHandler = async (value) => {
    try {
      // console.log('value', value)
      // const response = await axios({
        // method: 'post',
        // url: 'https://aircraftmaintenance-350da.firebaseio.com/tools.json',
        // data: {
        //   ...value
        // },
        // headers: {
        //   "Content-type": "application/json; charset=UTF-8"
      // }
      // })
      // console.log('response', response)
      // alert('Submitted')
      await this.props.navigation.navigate('Result')
    } catch (error) {
      alert('error in post')
      console.error(error);
    }

  }

  inputHandler = (val) => {
    this.setState({
      input: val
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to React Native!</Text>
        <Text style={styles.instructions}>Scanner Screen</Text>
        <TextInput placeholder='text here' onChangeText={val => this.inputHandler(val)} value={this.state.input} />
        <Button title='Submit' onPress={() => this.buttonHandler(this.state)} />
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