import React from "react";
import {
    FlatList,
    View,
    StyleSheet
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
        console.log(this.props.navigation);
        num = [];
        if(this.props.tab ==1){
                num = [1,3,5,7,9];
            }else{
                num = [2,4,6,8,10];
            }
        return (
            <View style={styles.productsContainer}>
                <FlatList
                    data = {num}
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