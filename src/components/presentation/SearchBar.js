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

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
        text: 'Search',
     };
  }


  render() {
    return (
      <View>
        <TextInput
          placeholder="Search"
          style={{height: 40, color:"#000"}}
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
        marginTop: 10,
        width: 65 + "%",
        left: 35 + "%",
        top: 30+"%",
        padding: 10,
        backgroundColor: '#c5ccd6',
        borderColor: '#c5ccd6',
        color: '#000',
        borderRadius: 10,
      },
      searchIcon : {
        padding: 10,
      }
});

export default SearchBar;