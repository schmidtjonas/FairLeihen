import React from "react";
import {
    TextInput,
    StyleSheet,
    Text,
    View,
    Image,
    Animated,
    Dimensions,
    TouchableOpacity
} from "react-native";

import ProductsContainer from '../container/ProductsContainer';

class TabSelect extends React.Component{

	state = {
    	active: 1,
    	categories: [],
  	
  	}

  handleTab = tab => {

    this.setState({ active: tab});
  }

	renderTab(tab) {
	    const { active } = false;
	    const isActive = active === tab;

	    return (
	    	<View>
		      <TouchableOpacity
		        key={`tab-${tab}`}
		        onPress={() => this.handleTab(tab)}
		        style={[
		          styles.tab,
		          isActive ? styles.active : null
		        ]}
		      >
		        <Text size={16} medium gray={!isActive} secondary={isActive}>
		          {tab}
		        </Text>
		      </TouchableOpacity>
		      
		     </View>
	    )
	  }


	render(){
		const tabs = [1, 2];

		return (
			<View>
				<View style={styles.tabsContainer}>
					 {tabs.map(tab => this.renderTab(tab))}
				</View>
				<ProductsContainer items = {this.state.active}/>
			</View>
			);
	}
}

const styles= StyleSheet.create({
	tabsContainer : {
		flex: 1,
		flexDirection : "row",
		marginTop: 30,
		height: 30,
		backgroundColor: "#fff",
		width: 100+"%",
	},
	tabs: {
	    borderBottomColor: "grey",
	    borderBottomWidth: 2,
	    marginVertical: 10,
	    marginHorizontal: 10,
  	},
  	tab: {
	    marginRight: 10,
	    paddingBottom: 10
  	},
	  active: {
	    borderBottomColor: "blue",
	    borderBottomWidth: 3,
	  },

});


export default TabSelect;