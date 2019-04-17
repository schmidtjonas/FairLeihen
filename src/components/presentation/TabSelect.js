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
		      <TouchableOpacity
		        key={`tab-${tab}`}
		        onPress={() => this.handleTab(tab)}
		        style={styles.tab}
		      >
						<View>
							<Text size={16} medium gray={!isActive} secondary={isActive}>
								{tab}
							</Text>
						</View>
		      </TouchableOpacity>
		      
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
		borderBottomColor: "green",
	  borderBottomWidth: 5,
		marginTop: 30,
		height: 30,
		backgroundColor: "#fff",
		width: 100+"%",
	},
  tab: {
		justifyContent: 'center',
    alignItems: 'center',
		flex: 1,
	  padding: 10
  },
	active: {
	  borderBottomColor: "blue",
	  borderBottomWidth: 3,
	},

});


export default TabSelect;