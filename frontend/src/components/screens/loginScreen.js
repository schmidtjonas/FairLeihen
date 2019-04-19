import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
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
    }
  }

  onLogin(){
    const {username, password} = this.state;
    http.post('/login', {username, password})
    .then(() => this.setState({textmessage: 'Logged in as ' + username}))
    .catch((err) => this.setState({textmessage: 'error: ' + err}));
    this.props.navigation.navigate('LogIn');
  }

  onRegister(){
    const {username, password, email} = this.state;
    http.post('/register', {username, password, email})
    .then(() => this.setState({textmessage: 'Registered' + username}))
    .catch((err) => this.setState({textmessage: 'error: ' + err}));

    
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
        
        <TextInput 
          placeholder='Email' 
          onChangeText={(val) => this.setState({email: val})}/>

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
