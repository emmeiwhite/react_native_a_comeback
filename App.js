/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,TextInput} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});


export default class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      userName:'Imran Rafiq Rather'
    }
  }

  render() {
    return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text>HELLO EMMEI</Text>
      </View>
      <View style={styles.main}>
      <TextInput
          style={{height: 40}}
          placeholder="Type here to translate!"
          onChangeText={(text) => this.setState({userName:text})}
        />
      
      </View>
      <View style={styles.footer}>
        <Text>
           UserName State is :{this.state.userName}
        </Text>      
      </View>
    </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header:{
    flex:1,
    backgroundColor:'#990099',
    alignItems:'center',
    justifyContent:'center',
    fontSize:30
  },
  main:{
    flex:4,
    backgroundColor:'#337733',
    alignItems:'center',
    justifyContent:'center'
  },
  footer:{
    flex:1,
    backgroundColor:'#0000FF',
    color:'#FFFFFF',
    alignItems:'center',
    justifyContent:'center'

  }
});
