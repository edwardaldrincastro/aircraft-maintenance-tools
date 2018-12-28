import React, { Component } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'

class Home extends Component {
    static navigationOptions = {
        header: null
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.welcome}>Aircraft Maintenance Hand Tools Finder</Text>
                </View>
                <View style={{ flex: 3, flexDirection: 'row' }}>
                    <View style={{ flex: 1, backgroundColor: '#fff' }}>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('Scanner')}>
                            <View style={styles.iconContainer}>
                                <Image source={require('../assets/images/qr-code.png')}
                                    style={{ height: '100%', width: '100%' }}
                                    resizeMode='contain' />
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={{ flex: 1.5, backgroundColor: '#fff', alignItems: 'flex-end' }}>
                    <Image source={require('../assets/images/clicking.png')}
                        style={{ height: '50%', width: '50%', }}
                        resizeMode='contain' />
                </View>
            </View >
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    iconContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    header: {
        flex: 1.5,
        backgroundColor: '#fff',
        padding: 15,
        justifyContent: 'center',
        alignItems: 'center'
    },
    welcome: {
        fontSize: 36,
        textAlign: 'center',
        color: '#4E9FBC',
        margin: 10,
        fontFamily: 'Staatliches-Regular',
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
    button: {
        width: "100%",
        height: 40,
        borderWidth: 1,
        borderRadius: 5,
        borderColor: '#FFC83D',
        backgroundColor: '#F4CF0D',
        justifyContent: 'center',
        alignItems: 'center',

    },
    buttonText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#fff',
        // textAlign: 'center'
    }
})

export default Home