import React, { Component } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import Arrow from "../utilities/icons/Arrow";

class Home extends Component {

    static navigationOptions = {
        header: null
    } 

    render() {
        return (
            <View style={styles.container}>
                <View style={{ flex: 1.5, backgroundColor: '#fff', padding: 15, justifyContent:'center', alignItems: 'center', }}>
                    <Text style={styles.welcome}>Aircraft Maintenance Hand Tools Finder</Text>
                </View>
                <View style={{ flex: 3, flexDirection: 'row' }}>
                    {/* <View style={{ flex: 1, backgroundColor: '#fff', justifyContent: 'center', alignItems: 'center', }}>

                    </View> */}
                    <View style={{ flex: 1, backgroundColor: '#fff' }}>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('Scanner')}>
                            <View style={styles.iconContainer}>
                                <Image source={require('../assets/images/qr-code.png')}
                                    style={{ height: '100%', width: '100%' }}
                                    resizeMode='contain' />
                            </View>
                        </TouchableOpacity>
                    </View>

                    {/* <View style={{ flex: 1, backgroundColor: '#fff' }}>

                    </View> */}
                </View>

                <View style={{ flex: 1.5, backgroundColor: '#fff',alignItems: 'flex-end'}}>
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
        // justifyContent: 'center',
        // alignItems: 'center',
        // backgroundColor: '#409AE1',
        // backgroundColor: '#287E9E',
        backgroundColor: '#fff',
    },
    iconContainer: {
        // flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: '#409AE1',
        backgroundColor: '#fff',
    },
    welcome: {
        fontSize: 36,
        textAlign: 'center',
        color: '#4E9FBC',
        margin: 10,
        // fontWeight: 'bold',
        fontFamily: 'Staatliches-Regular',
        // fontFamily: 'Inconsolata-Bold',
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