/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,TextInput,Alert,Button,TouchableHighlight} from 'react-native';

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

  callingPankaj = (e)=>{
    Alert.alert(this.state.userName);
  }
  
  _onPressButton = (e)=>{
    Alert.alert("THIS IS TOUCHABLE HIGHLIGHT")
  }
  render() {
    return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>HELLO EMMEI</Text>
      </View>
      <View style={styles.main}>
      <TextInput
          style={styles.userInput}
          placeholder="Type here to translate!"
          onChangeText={(text) => this.setState({userName:text})}
        />
      
        <Button onPress={this.callingPankaj} title="CLICK ME"></Button>
        
        <TouchableHighlight onPress={this._onPressButton}>
        <Image
        style={styles.button}
        source={require('image!myButton')}
      />
        </TouchableHighlight>
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
    flex: 1
  },
  header:{
    flex:1,
    backgroundColor:'#90000e',
    alignItems:'center',
    justifyContent:'center',
    color:'#ffffff'
  },
  headerText:{
    color:'#ffffff',
    fontSize:30
  },
  main:{
    flex:8,
    backgroundColor:'teal',
    alignItems:'center',
    // justifyContent:'center',
    fontSize:18
  },
  footer:{
    flex:1,
    backgroundColor:'#90000e',
    color:'#FFFFFF',
    alignItems:'center',
    justifyContent:'center'

  },
  userInput:{
    borderWidth:1,
    borderColor:'gray',
    // paddingTop:15,
    // paddingBottom:15,
    // paddingLeft:15,
    // paddingRight:15,
    padding:15,
    marginBottom:20
  }
});
