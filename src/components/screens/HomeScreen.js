import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { WebBrowser } from 'expo';


import ProductsContainer from '../container/ProductsContainer';
import SearchBar from '../presentation/SearchBar';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };


  render() {
    return (
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <SearchBar st/>
          </View>
          <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
            
            <ProductsContainer />  

          </ScrollView>
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
    backgroundColor: '#000000', //'#F5FCFF'
  },
  
});
