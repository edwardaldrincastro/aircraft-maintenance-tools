import React, { Component } from 'react'
import { StyleSheet, Text, View, TextInput, Button, Image } from 'react-native'

class Result extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    static navigationOptions = {
        title: 'Result'
    }
    render() {
        const response = this.props.navigation.getParam('response', 'no response')
        return (
            <View style={styles.container}>
                <Image source={{ uri: response.image }} style={{ height: '40%', width: '100%' }} />
                <View style={{ flex: 1, justifyContent: 'center' }}>
                    <Text>Name: {response.name}</Text>
                    <Text>ID: {response.id}</Text>
                    <Button title='Submit' onPress={() => this.props.navigation.replace('Scanner')} />
                </View>
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
})

export default Result