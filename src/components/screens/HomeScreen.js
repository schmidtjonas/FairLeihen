import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { WebBrowser } from 'expo';



import SearchBar from '../presentation/SearchBar';
import TabSelect from '../presentation/TabSelect';
import ProductsContainer from '../container/ProductsContainer';

class HomeScreen extends React.Component {
  state = {
    activeTab: 1,
  }

  changeTab = tab => {
    this.setState({activeTab: tab});
  }


  render() {
    return (
      <View style={styles.container}>
        <View style={styles.headerContainer}>      
          <SearchBar />  
          <TabSelect tabs={[1, 2]} callback={this.changeTab}/>  
        </View>
        <ScrollView style={styles.container}>
          <ProductsContainer tab={this.state.activeTab} />
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
  headerContainer : {
    width: 100 + "%",
    height: 120,
    backgroundColor: '#F5FCFF',
  },
  
});


export default HomeScreen;