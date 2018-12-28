import React, { Component } from 'react'
import { StyleSheet, Text, View, TextInput, Button } from 'react-native'


const axios = require('axios')
const uuidv4 = require('uuid/v4')
class Config extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            image: ''
        };
    }
    buttonHandler = async (name, image, uuid) => {
        try {
            // console.log('value', value)
            await axios.put('https://aircraftmaintenance-350da.firebaseio.com/tools/' + uuid + '.json', { 
                name: name,
                image: image,
                id: uuid
            })
            // const response = await axios({
            //     method: 'post',
            //     url: 'https://aircraftmaintenance-350da.firebaseio.com/tools.json',
            //     data: {
            //         // ...value
            //         ...name
            //     },
            //     headers: {
            //         "Content-type": "application/json; charset=UTF-8"
            //     }
            // })
            console.log('success post')
            // this.inputHandler(response.data)
            // this.props.navigation.navigate('')
            await this.clearState()
            // alert('Submitted')

        } catch (error) {
            alert('error in post')
            console.error(error);
        }

    }
    clearState = () => {
        this.setState({
            name: '',
        })
    }
    inputHandler = (data) => {
        this.setState({
            name: data
        })
    }
    imageInputHandler = (data) => {
        this.setState({
            image: data
        })
    }
    test = () => {
        alert(this.state.name)
    }
    static navigationOptions = {
        title: 'Config'
    }
    render() {
        const payload = this.props.navigation.getParam('payload', 'no payload')
        return (
            <View style={styles.container}>

                <Text style={styles.welcome}>Admin Configuration</Text>
                <View style={{ width: '90%', borderWidth: 1, borderColor: '#212121' }}>
                    <TextInput placeholder='Name' onChangeText={(val) => this.inputHandler(val)} value={this.state.name} />
                </View>
                <View style={{ width: '90%', borderWidth: 1, borderColor: '#212121' }}>
                    <TextInput placeholder='Image URL' onChangeText={(val) => this.imageInputHandler(val)} value={this.state.image} />
                </View>
                <Button title='Submit' onPress={() => this.buttonHandler(this.state.name, this.state.image, uuidv4())} />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
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

export default Config