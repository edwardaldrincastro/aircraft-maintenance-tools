import React, { Component } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'

class Result extends Component {
    static navigationOptions = {
        title: 'Result'
    }
    render() {
        const response = this.props.navigation.getParam('response', 'no response')
        return (
            <View style={styles.container}>
                <Image source={{ uri: response.image }} style={{ height: '40%', width: '100%' }} />
                <View style={styles.content}>
                    <Text style={{ fontSize: 20 }}>Name: {response.name}</Text>
                    <TouchableOpacity onPress={() => this.props.navigation.replace('Scanner')}>
                        <View style={styles.button}>
                            <Text style={{ color: '#fff', fontSize: 18 }}>Scan again</Text>
                        </View>
                    </TouchableOpacity>
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
    content: {
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'center',
        padding: 20
    },
    button: {
        backgroundColor: '#EF6B52',
        height: 50,
        width: 150,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
    }
})

export default Result