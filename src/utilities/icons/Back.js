import React, { Component } from 'react'
import Icon from "react-native-vector-icons/Ionicons"
let color
export default class Back extends Component {

  render() {
    this.props.black ? color = '#000' : color = '#fff'
    return (
      <Icon name='ios-arrow-back' color={color} size={32}/>
    )
  }
}
