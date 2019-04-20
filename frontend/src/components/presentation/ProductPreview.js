import React from "react";
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity
} from "react-native";
import { withNavigation } from 'react-navigation';
import Colors from "../../constants/Colors";

class ProductPreview extends React.Component {

    showProduct(){
        //console.log(this.props.naviagtion);
        this.props.navigation.push('Product');
    }
    
    render(){
        const sel = (this.props.item%2 ==0) ? 1 : 2;
        return (
            <TouchableOpacity onPress={() => this.showProduct()} style={styles.productContainer}>
                <View style={styles.productLeft}>
                    <Image
                        style={{width: 150, height: 150}}
                        source={{uri: 'https://www.welt.de/img/vermischtes/mobile166641813/3792501637-ci102l-w1024/CRESTED-BLACK-MACAQUE.jpg'}}
                    />
                </View>
                <View style={styles.productRight}>
                    <Text style={styles.productTitle}>Titel{sel}</Text>
                    <Text style={styles.productAdress}>Adresse</Text>
                    <Text style={styles.productPrice}>Preis</Text>
                </View>
            </TouchableOpacity>
        );
    }

}

const styles = StyleSheet.create({
    productContainer : {
        flex: 1,
        height: 150,  
        borderRadius: 20,
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

    },
    productAdress : {

    },
    productPrice : {

    },
});

export default withNavigation(ProductPreview);