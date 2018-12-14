import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Icon from "react-native-vector-icons/Ionicons"
import { DimensionsHeight } from "../Dimensions";

class Arrow extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <Icon name='ios-share-alt' size={80} color='#fff' style={{paddingTop: DimensionsHeight/3.5}}/>
    );
  }
}

export default Arrow;
