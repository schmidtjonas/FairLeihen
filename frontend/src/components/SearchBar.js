import React from "react";
import {
    TextInput,
    StyleSheet,
    Text,
    View,
    Image,
    Animated,
    Dimensions
} from "react-native";
import Colors from "../constants/Colors";

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
        text: '',
     };
  }


  render() {
    return (
      <View>
        <TextInput
          placeholder="Search"
          onChangeText={(text) => this.setState({text})}
          value={this.state.text}
          style={styles.search}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
    search : {
        //marginTop: 10,
        width: 65 + "%",
        left: 35 + "%",
        top: 30+"%",
        padding: 10,
        backgroundColor: '#F5F5F5',
        color: Colors.grey,
        borderRadius: 10,
        fontSize:16
      },
      searchIcon : {
        padding: 10,
      }
});

export default SearchBar;