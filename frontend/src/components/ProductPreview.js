import React from "react";
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity
} from "react-native";
import { withNavigation } from 'react-navigation';
import Colors from "../constants/Colors";

class ProductPreview extends React.Component {

    state = {
        id : 0,
        title: "Test",
        price: 0,
        location: "Stahnsdorferstraße 144B",
        distance: 0,
        seller: "",
        imgLink : "",
    }

    showProduct(){
        this.props.navigation.push('Product', { itemId : this.state.id});
    }
    
    render(){
        return (
            <TouchableOpacity onPress={() => this.showProduct()} style={styles.productContainer}>
                <View style={styles.productLeft}>
                    <Image
                        style={{width: 150, height: 150}}
                        source={{uri: 'https://www.welt.de/img/vermischtes/mobile166641813/3792501637-ci102l-w1024/CRESTED-BLACK-MACAQUE.jpg'}}
                    />
                </View>
                <View style={styles.productRight}>
                    <Text style={styles.productTitle}>{this.state.title}</Text>
                    <Text style={styles.productAdress}>{this.state.location}</Text>
                    <Text style={styles.productPrice}>{this.state.price} €</Text>
                </View>
            </TouchableOpacity>
        );
    }

}

const styles = StyleSheet.create({
    productContainer : {
        flex: 1,
        height: 150,  
        borderRadius: 15,
        flexDirection: 'row',
        marginTop: 10,
        marginLeft: 20,
        marginRight: 20,
        overflow: 'hidden',
    },
    productLeft : {
        justifyContent: 'center',
        //alignItems: 'center',
        backgroundColor: "#FFFFFF",
        flex: 1,

    },
    productRight : {
        padding: 20,
        justifyContent: 'center',
        backgroundColor: "#FFFFFF",
        flex: 1,
    },
    productTitle : {
        color: Colors.black,
        fontSize: 18,
    },
    productAdress : {
        color: Colors.grey,
        fontSize: 14,

    },
    productPrice : {
        color: Colors.grey,
        fontSize: 14,
    },
});

export default withNavigation(ProductPreview);