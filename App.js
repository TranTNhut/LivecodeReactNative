import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

import Login from './src/components/Login/Login'


export default class App extends Component {
    constructor(props){
        super(props)
    }
    render() {
        return (
            <Login />
        );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
    },
    welcome: {
      fontSize: 20,
      textAlign: 'center',
      margin: 10,
    },
    instructions: {
      textAlign: 'center',
      color: '#333333',
      marginBottom: 5,
    },
});
