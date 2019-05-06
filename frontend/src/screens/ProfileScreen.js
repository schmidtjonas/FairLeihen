import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  StatusBar,
  Image
} from 'react-native';
import Colors from  '../constants/Colors';



import SearchBar from '../components/SearchBar';
import TabSelect from '../components/TabSelect';
import ProductsContainer from '../components/ProductsContainer';

class HomeScreen extends React.Component {
  state = {
  }



  render() {  
    return (
      <View style={styles.appContainer}>
        <View style={styles.profileContainer}>
            <Image 
                style={{width: 50, height: 50, borderRadius: 40, overflow:"hidden"}}
                source={{uri: 'https://www.welt.de/img/vermischtes/mobile166641813/3792501637-ci102l-w1024/CRESTED-BLACK-MACAQUE.jpg'}}
            />
            <View style={styles.profileRight}>
                <Text style={styles.name} >Max Mustermann</Text>    
            </View>        
        </View>
        <ScrollView style={styles.itemsContainer}>
          <Text>

          </Text>
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
  profileContainer: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: Colors.white,
    width: 100+"%",
    height: 120,
    //justifyContent: "center",
    alignItems: 'center',
    paddingRight: 10,
  },
  itemsContainer : {
    margin: 20,
    width: 100 + "%",
    backgroundColor: Colors.white,
  },
  name : {
      
  }
  
});


export default HomeScreen;