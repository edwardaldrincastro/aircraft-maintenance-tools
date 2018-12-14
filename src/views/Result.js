import React, { Component } from 'react'
import { StyleSheet, Text, View, TextInput, Button } from 'react-native'

const axios = require('axios')

class Result extends Component {
    constructor(props) {
        super(props);
        this.state = {
            response: ''
        };
    }
    buttonHandler = async () => {
        try {
            // console.log('value', value)
            const response = await axios({
                method: 'get',
                url: 'https://aircraftmaintenance-350da.firebaseio.com/tools.json',
                params: {
                    // ...value
                },
                headers: {
                    "Content-type": "application/json; charset=UTF-8"
                }
            })
            console.log('response get', response)
            this.inputHandler(response.data)
            // this.props.navigation.navigate('')
            alert('Submitted')
        } catch (error) {
            alert('error in post')
            console.error(error);
        }

    }

    inputHandler = (response) => {
        this.setState({
            response: response
        })
    }
    static navigationOptions = {
        title: 'Result'
    }
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>Welcome to React Native!</Text>
                <Text style={styles.instructions}>{JSON.stringify(this.state.response)}</Text>
                <Button title='Submit' onPress={() => this.buttonHandler()} />
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

export default Result