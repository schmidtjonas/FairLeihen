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

const serverurl = 'http://192.168.0.107:5000'; //local pi url rest kommt später
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
    http.post('/login', {username, password})
    .then(() => {
      this.props.navigation.navigate('Main');
    })
    .catch((err) => {
      if(this.isMounted){
        this.setState({
          textmessage: String(err)
        })
      }
      Keyboard.dismiss();
    });
    

  }

  onRegister(){
    this.props.navigation.push('Register');
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

        <Button title='Login!' onPress = {() => {this.onLogin()}} />
        <Text> Noch nicht registriert?
          <Text style={{color: 'blue'}}
              onPress = {() => {this.onRegister()}}>
              Jetzt Account erstellen!
            </Text>
        </Text>

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
