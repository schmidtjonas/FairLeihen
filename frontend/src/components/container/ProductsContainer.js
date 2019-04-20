import React from "react";
import {
    FlatList,
    View,
    StyleSheet,
    Text
} from "react-native";

import ProductPreview from '../presentation/ProductPreview';

class ProductsContainer extends React.Component {

    renderProductPreview({ item }){
        return <ProductPreview item = {item} />;
    }

    returnKey(item){
        return item.toString();
    }

    render() {
        if(this.props.tab == "Angebote" || this.props.tab == "Gesuche"){
          return (  <View style={styles.productsContainer}>
                        <FlatList
                            data = {[1,2,3,4,5,6,7,8,9,10]}
                            keyExtractor={this.returnKey}
                            renderItem={this.renderProductPreview}
                        />
                    </View> );
            }else if(this.props.tab == "Karte"){
                return(
                    <View style = {styles.mapContainer}>
                        <Text>Hier kommt die Karte hin</Text>
                    </View>
                );
            }
    }
}

const styles = StyleSheet.create({
    productsContainer : {
        flex: 1,
        width: 100+"%", 
        flexDirection: 'row',
        marginBottom: 10,
    },
    mapContainer :  {

    },
});

export default ProductsContainer;