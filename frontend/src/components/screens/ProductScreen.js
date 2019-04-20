import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import Product from '../presentation/Product';


class ProductScreen extends React.Component {
  state = {
  }



  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.container}>
          <Product/>
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
  
});


export default ProductScreen;