import React from "react";
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity
} from "react-native";

class Product extends React.Component {

    constructor(props){
        super(props);
        //state Daten von der DB befüllen
        this.state = {id: this.props.itemId};
    }

    state = {
        id : 100,
        title: "Test",
        price: 0,
        location: "Stahnsdorferstraße 144B",
        distance: 0,
        seller: "",
        imgLink : "",
        description : "",
    }

    render(){
        return (
            <Text>{this.state.id}</Text>
        );
    }
}

export default Product;