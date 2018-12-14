import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Icon from "react-native-vector-icons/Ionicons";

class QRScannerIcon extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <Icon name='ios-qr-scanner' size={150} color='#fff'/>
    );
  }
}

export default QRScannerIcon;
