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
    	active: this.props.activeTab,
    	categories: [],
  	
	}

		

  handleTab = tab => {
		this.props.callback(tab);

		this.setState({ active: tab});
  }

	renderTab(tab) {
			console.log(this.state.active);
	    const { active } = false;
			const isActive = this.state.active === tab;

	    return (
		      <TouchableOpacity
		        key={`tab-${tab}`}
		        onPress={() => this.handleTab(tab)}
		        style={isActive ? styles.tabActive : styles.tab}
		      >
							<Text style={isActive ? styles.tabTextActive : styles.tabText}>
								{tab}
							</Text>
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
		marginLeft: 30,
		marginRight: 30,
		flex: 1,
		flexDirection : "row",
		borderBottomColor: Colors.grey,
	  borderBottomWidth: 1,
	//	marginTop: 30,
		//width: 100+"%",
	//	marginBottom: 10,
		height: "auto",
	},
  tab: {
		padding: 10,
		justifyContent: 'center',
    alignItems: 'center',
		marginRight: 15,	
  },
	tabActive: {
		padding: 10,
		justifyContent: 'center',
		alignItems: 'center',
		marginRight: 15,
		borderBottomColor: Colors.lightblue,
		color: Colors.lightblue,
		borderBottomWidth: 3
	},
	tabText : {
		fontSize: 18,
		fontWeight: "bold",
		color: Colors.grey
	},
	tabTextActive : {
		fontSize: 18,
		fontWeight: "bold",
		color: Colors.lightblue,
	}

});


export default TabSelect;