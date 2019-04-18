import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
} from 'react-native';



export default class LoginScreen extends React.Component {

  constructor(props){
    super(props);
    sha512 = require('hash.js/lib/hash/sha/512'); //npm install hash.js

    this.state = {
      username: '',
      password: '',
    }
  }

  login(){
    console.log(this.state);
    console.log(this.hash(this.state.password));
    
  }

  hash(string){
    salt = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
    return (salt + '$' + sha512().update(string + salt).digest('hex'))
  }
  
  render() {
    return (
      <View style={styles.container}>
        <TextInput 
          placeholder='Username' 
          onChangeText={(val) => this.setState({username: val})}/>

        <TextInput 
          placeholder='Password' 
          secureTextEntry={true} 
          onChangeText={(val) => this.setState({password: val})}/>

        <Button title='Login!' onPress = {() => {this.login()}} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  contentContainer: {
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  headerContainer : {
    width: 100 + "%",
    height: 90,
    backgroundColor: '#F5FCFF',
  },
  
});
