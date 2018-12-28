import React, { Component } from 'react';
import { View, Text, NetInfo } from 'react-native';

export default class Network extends Component {
    network = false
    async componentDidMount() {
        const { type } = await NetInfo.getConnectionInfo();
        if (type !== "none") {
            console.log('with network connectivity')
           return network = true
        } else {
            console.log('no network connectivity')
            return network = false

        }
    }
    render() {
        return null
    }
}
