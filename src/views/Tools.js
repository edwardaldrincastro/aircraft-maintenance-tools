import React, { Component } from 'react'
import { StyleSheet, Text, View, TextInput, Button } from 'react-native'
import API from "../utilities/api";

const axios = require('axios')

class Tools extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    
    async componentDidMount() {
        const response = await axios.get('https://aircraftmaintenance-350da.firebaseio.com/tools.json')
        console.log(response.data)
        return response.data
    }
    static navigationOptions = {
        title: 'Tools'
    }
    render() {
        // const payload = this.props.navigation.getParam('payload', 'no payload')
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>Welcome to TOOLS</Text>
                {/* <Text style={styles.instructions}>{JSON.stringify(this.state.response)}</Text> */}
                {/* <Text>Name: {payload.name}</Text>
                <Text>ID: {payload.id}</Text> */}
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

export default Tools