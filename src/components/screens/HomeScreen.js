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

class HomeScreen extends React.Component {
  state = {
    activeTab: 1,
  }

  changeTab = tab => {
    console.log(tab);
    this.setState({activeTab: tab});
  }


  render() {
    return (
      <View style={styles.container}>
        <View style={styles.headerContainer}>      
          <SearchBar />          
          </View>
          <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
            
          <TabSelect tabs={[1, 2, 3]} callback={this.changeTab}/>

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
    backgroundColor: '#F5FCFF',
  },
  
});


export default HomeScreen;