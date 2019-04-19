import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  Keyboard
} from 'react-native';

import axios from 'axios';

const serverurl = 'http://192.168.0.116:5000';
const http = axios.create({
  baseURL: serverurl,
})

export default class LoginScreen extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      username: '',
      password: '',
      email: '',
      textmessage: '',
      loggedIn: false,
    }
  }

  onLogin(){
    const {navigation} = this.props;
    const {username, password} = this.state;
    http.post('/login', {username, password})
    .then(() => this.setState({
      textmessage: 'Logged in as ' + username, username: '', password: '', loggedIn: true
    }))
    .catch((err) => this.setState({textmessage: 'error: ' + err}));
    Keyboard.dismiss();
    if(this.state.loggedIn){
      //navigation.navigate('HomeStack'); wie macht man das?
      //Die Plantapp hat das mit den Stacks irgendwie ganz anders umgesetzt kA
      //außerdem soll der login screen ja auch nicht untern in der Leiste sein
    }
  }

  onRegister(){
    const {username, password, email} = this.state;
    http.post('/register', {username, password, email})
    .then(() => this.setState({
      textmessage: 'Registered ' + username, username: '', password: '', email: ''
    }))
    .catch((err) => this.setState({textmessage: 'error: ' + err}));
    Keyboard.dismiss();    
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput 
          placeholder='Username' 
          onChangeText={(val) => this.setState({username: val})}
          value={this.state.username}/>

        <TextInput 
          placeholder='Password' 
          secureTextEntry={true} 
          onChangeText={(val) => this.setState({password: val})}
          value={this.state.password}/>
        
        <TextInput 
          placeholder='Email' 
          onChangeText={(val) => this.setState({email: val})}
          value={this.state.email}/>

        <Button title='Login!' onPress = {() => {this.onLogin()}} />
        <Button title='Register!' onPress = {() => {this.onRegister()}} />

        <Text>{this.state.textmessage}</Text>

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
