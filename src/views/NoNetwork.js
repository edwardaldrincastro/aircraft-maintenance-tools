import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

class NoNetwork extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    static navigationOptions = {
        header: null
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={{ flex: 1, backgroundColor: 'rgba(0, 0, 0, 0.5) '}} >

                </View>
                <View style={{ flex: 1, backgroundColor: 'rgba(0, 0, 0, 0.2)' }} >
                    <Image source={require("../assets/images/warning.png")} style={{ height: '40%', width: '40%' }} resizeMode='contain' />
                    <Text style={{ fontWeight: 'bold', fontSize: 22 }}>Oh Snap!</Text>
                    <Text style={{ fontSize: 16 }}>Looks like you're not connected to the internet. Check you internet connection and try again.</Text>

                </View>
                <View style={{ flex: 1, backgroundColor: 'rgba(0, 0, 0, 0.2)' }} >

                </View>
            </View >
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20
    },
})
export default NoNetwork;
