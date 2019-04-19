import React from "react";
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity
} from "react-native";

class ProductPreview extends React.Component {

    showProduct(){
        return (
            <Text>Test</Text>
        );
    }
    
    render(){
        const sel = (this.props.item%2 ==0) ? 1 : 2;
        return (
            <TouchableOpacity onPress={() => this.props.navigation.push()} style={styles.productContainer}>
                <View style={styles.productLeft}>
                    <Image
                        style={{width: 90, height: 90}}
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
        width: 100+"%",
        height: 150,  
        borderRadius: 4,
        borderWidth: 0.5,
        borderColor: '#d6d7da',
        flexDirection: 'row',
    },
    productLeft : {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'powderblue',
        flex: 1,

    },
    productRight : {
        padding: 20,
        justifyContent: 'center',
        backgroundColor: 'skyblue',
        flex: 1,
    },
    productTitle : {

    },
    productAdress : {

    },
    productPrice : {

    },
});

export default ProductPreview;