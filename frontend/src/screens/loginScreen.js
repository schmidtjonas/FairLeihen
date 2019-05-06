import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  Keyboard,
  ActivityIndicator,
  KeyboardAvoidingView,
} from 'react-native';

import { Input, Button } from 'react-native-elements';
import axios from 'axios';
import Colors from '../constants/Colors';

//const serverurl = 'http://192.168.0.107:5000'; //local pi url 
const serverurl = 'http://192.168.0.101:5000';
const http = axios.create({
  baseURL: serverurl,
})

export default class LoginScreen extends React.Component {

  isMounted = false;

  constructor(props){
    super(props);

    this.state = {
      username: '',
      password: '',
      email: '',
      textmessage: '',
      loading: '',
      usernameErr: false,
      passwordErr: false,
    }
  }

  componentDidMount() {
    this._isMounted = true;
  }

  componentWillUnmount(){
    //Hier alle asynchronen Verbindungen beenden um memory leaks zu verhindern
    this.isMounted = false;
  }

  onLogin(){
    const {username, password} = this.state;
    //this.props.navigation.navigate('Main');

    Keyboard.dismiss();
    this.setState({loading: true})
    http.post('/login', {username, password})
    .then(() => {
      this.setState({loading: false, passwordErr: false})
      this.props.navigation.navigate('Main');
    })
    .catch((err) => {
      this.setState({loading: false, passwordErr: true})
    });
  }

  onRegister(){
    this.props.navigation.push('Register');
  }

  checkUsername(){
    const {username} = this.state;
    http.post('/checkUsername', {username})
    .then(() => this.setState({usernameErr: false}))
    .catch(() => this.setState({usernameErr: true}));
  }

  render() {
    const {loading, errors, usernameErr, passwordErr} = this.state;
    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding">
        <Input 
          style={styles.input}
          errorStyle={{ color: Colors.warningText }}
          errorMessage={usernameErr ? "Dieser User existiert nicht." : ""}
          placeholder='Username' 
          onChangeText={(val) => this.setState({username: val})}
          onEndEditing={() => this.checkUsername()}
          value={this.state.username}/>

        <TextInput 
          style={passwordErr ? styles.hasErrors : styles.input}
          placeholder='Password' 
          secureTextEntry={true} 
          onChangeText={(val) => this.setState({password: val})}
          value={this.state.password}/>      

        <Button gradient title='Login!' onPress = {() => {this.onLogin()}}>
          {loading ?
            <ActivityIndicator size="small" color="white" /> : 
            <Text bold white center>Login</Text>
          }
        </Button>
        <Text> Noch nicht registriert?
          <Text style={{color: 'blue'}}
              onPress = {() => {this.onRegister()}}>
              Jetzt Account erstellen!
            </Text>
        </Text>

        <Text>{this.state.textmessage}</Text>

      </KeyboardAvoidingView>
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
  hasErrors: {
    backgroundColor: Colors.warningText,
  },
  input: {
    backgroundColor: '#fff',
    borderRadius: 0,
    borderWidth: 0,
    borderBottomColor: '#ddd',
    borderBottomWidth: StyleSheet.hairlineWidth,
  }
});
