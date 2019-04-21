import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  StatusBar
} from 'react-native';
import Colors from  '../../constants/Colors';



import SearchBar from '../presentation/SearchBar';
import TabSelect from '../presentation/TabSelect';
import ProductsContainer from '../container/ProductsContainer';

class HomeScreen extends React.Component {
  state = {
    activeTab: "Angebote",
  }

  changeTab = tab => {
    this.setState({activeTab: tab});
  }


  render() {  
    return (
      <View style={styles.appContainer}>
        <View style={styles.headerContainer}>      
          <SearchBar />  
          <TabSelect tabs={["Angebote", "Karte"]} activeTab = {this.state.activeTab} callback={this.changeTab}/>  
        </View>
        <ScrollView style={styles.container}>
          <ProductsContainer tab={this.state.activeTab} />
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  appContainer : {
    flex: 1,
    backgroundColor: Colors.white,
  },
  headerContainer : {
    width: 100 + "%",
    height: 120,
    backgroundColor: Colors.white,
    marginTop:25,
    paddingBottom: 20,
  },
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },

  
});


export default HomeScreen;