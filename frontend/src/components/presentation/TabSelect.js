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

import Colors from  '../../constants/Colors';
import ProductsContainer from '../container/ProductsContainer';

class TabSelect extends React.Component{

	state = {
    	active: 1,
    	categories: [],
  	
	}

		

  handleTab = tab => {
		this.props.callback(tab);

		this.setState({ active: tab});
  }

	renderTab(tab) {
		console.log(Colors.lightblue);

	    const { active } = false;
			const isActive = this.state.active === tab;

	    return (
		      <TouchableOpacity
		        key={`tab-${tab}`}
		        onPress={() => this.handleTab(tab)}
		        style={isActive ? styles.tabActive : styles.tab}
		      >
						<View>
							<Text size={16} style={styles.tabText} medium gray={!isActive} secondary={isActive}>
								{tab}
							</Text>
						</View>
		      </TouchableOpacity>
		      
	    )
	  }


	render(){
		const tabs = this.props.tabs;

		return (
				<View style={styles.tabsContainer}>
					 {tabs.map(tab => this.renderTab(tab))}
				</View>
			);
	}
}

const styles= StyleSheet.create({
	tabsContainer : {
		flex: 1,
		flexDirection : "row",
		borderBottomColor: Colors.grey,
	  borderBottomWidth: 1.5,
		marginTop: 30,
		height: 30,
		width: 100+"%",
	},
  tab: {
		justifyContent: 'center',
    alignItems: 'center',
		flex: 1,
		color: Colors.grey
  },
	tabActive: {
		justifyContent: 'center',
    alignItems: 'center',
		flex: 1,
		borderBottomColor: Colors.lightblue,
		color: Colors.lightblue,
		borderBottomWidth: 3
	},
	tabText : {
	
	}

});


export default TabSelect;