import React from "react";
import {
    TextInput,
    StyleSheet,
    Text,
    View,
    Image,
    Animated
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
      <TextInput
        style={{height: 40, borderColor: 'gray', borderWidth: 1}}
        onChangeText={(text) => this.setState({text})}
        value={this.state.text}
        onFocus={() => this.onFocus()}
        style={styles.search}
      />
    );
  }

  onFocus() {
      this.setState({text: ''})
      //bessere Animation in Plantapp, allerdings sehr aufwendig zu kopieren, da ein flexible Block genutzt wird,
      //den die selbst implementiert haben
  }
}

const styles = StyleSheet.create({
    search : {
        width: 65 + "%",
        left: 35 + "%",
        top: 30+"%",
        padding: 10,
        backgroundColor: '#f9f9f9',
        color: '#d4d9e0',
        borderRadius: 40,
      }
});

export default SearchBar;