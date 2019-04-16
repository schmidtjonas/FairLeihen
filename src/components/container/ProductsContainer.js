import React from "react";
import {
    FlatList,
    View,
    StyleSheet
} from "react-native";

import ProductPreview from '../presentation/ProductPreview';

class ProductsContainer extends React.Component {

    renderProductPreview({item}){
        return <ProductPreview />;
    }

    returnKey(item){
        return item.toString();
    }

    render() {
        return (
            <View style={styles.productsContainer}>
                <FlatList
                    data = {[1,2,3,4,5]}
                    keyExtractor={this.returnKey}
                    renderItem={this.renderProductPreview}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    productsContainer : {
        flex: 1,
        width: 100+"%", 
        flexDirection: 'row',
        marginBottom: 10,
    }
});

export default ProductsContainer;