import React, { Component } from 'react'
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native'

const axios = require('axios')

class Tools extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tools: []
        };
    }

    async componentDidMount() {
        const response = await axios.get('https://aircraftmaintenance-350da.firebaseio.com/tools.json')
        data = response.data
        await console.log(data)
        result = Object.keys(data).map(key => {
            return data[key]
        })
        await console.log(result)
        await this.setTools(result)
    }
    setTools = (result) => {
        this.setState({
            tools: result
        })
    }
    static navigationOptions = {
        title: 'Tools'
    }
    render() {
        status = this.state.tools[0]
        myState = this.state.tools
        return (
            <View style={styles.container}>
                <ScrollView>
                    <Text style={styles.welcome}>List of all tools</Text>
                    {status ? myState.map((item, index) => {
                        return (
                            <View key={index} style={styles.renderItem}>
                                <Text>{item.name}</Text>
                                <Image source={{ uri: item.image }} style={{ height: 50, width: 50 }} />
                            </View>
                        )
                    })
                        : console.log("Loading")}
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
    },
    renderItem: {
        flexDirection: 'row',
        paddingHorizontal: 20,
        width: '100%',
        height: 60,
        borderBottomWidth: 1,
        borderBottomColor: '#e1e1e1',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    welcome: {
        textAlign: 'center',
        fontSize: 18,
        color: '#000',
        margin: 15,
    },
})

export default Tools