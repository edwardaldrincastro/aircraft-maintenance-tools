import React, { Component } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, BackHandler, Button, ScrollView, Image } from 'react-native'
import { createStackNavigator, createAppContainer } from "react-navigation"
import { Home, Scanner, Result } from "../views"
import { Back } from "../utilities/icons"

const MainStack = createStackNavigator({
    Home: Home,
    Scanner: Scanner,
    Result: Result
},
    {
        initialRouteName: 'Home',
        headerLayoutPreset: 'center',
        defaultNavigationOptions: ({ navigation }) => {
            return {
                title: 'Scanner',
                headerStyle: {
                    backgroundColor: '#4E9FBC',
                },
                headerTitleStyle: {
                    color: '#fff',
                    fontSize: 22,
                    fontFamily: 'RobotoCondensed-Regular',
                    fontWeight: '200'
                },
                headerLeft: (
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <View style={{ paddingLeft: 20 }}>
                            <Back />
                        </View>
                    </TouchableOpacity>
                )

            }
        },
        // navigationOptions: {
        //     drawer: 'What We Do?',
        // }
    })

const MainStackContainer = createAppContainer(MainStack)

export default MainStackContainer