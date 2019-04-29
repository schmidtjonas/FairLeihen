import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import MapView from 'react-native-maps';
import { Constants, Location, Permissions } from 'expo';

export default class MapScreen extends React.Component {

  static navigationOptions = {
    title: 'Map',
  };

state = {
  mapRegion: null,
  hasLocationPermissions: false,
  locationResult: null
};

componentDidMount() {
  this._getLocationAsync();
}

_handleMapRegionChange = mapRegion => {
  this.setState({ mapRegion });
};

_getLocationAsync = async () => {
 let { status } = await Permissions.askAsync(Permissions.LOCATION);
 if (status !== 'granted') {
   this.setState({
     locationResult: 'Permission to access location was denied',
   });
 } else {
   this.setState({ hasLocationPermissions: true });
 }

 let location = await Location.getCurrentPositionAsync({});
 this.setState({ locationResult: JSON.stringify(location) });
 
 // Center the map on the location we just fetched.
  this.setState({mapRegion: { latitude: location.coords.latitude, longitude: location.coords.longitude, latitudeDelta: 0.0922, longitudeDelta: 0.0421 }});
};

render() {
  return (
    <View style={styles.container}>
      
      {
          <MapView style={styles.map}
          provider={'google'}
          
          initialRegion={this.state.mapRegion}
          onRegionChange={this._handleMapRegionChange}
          showsUserLocation={true}
          showsMyLocationButton={true}>
          <MapView.Marker 
            coordinate={{latitude: 52.393442,
            longitude: 13.131462}}
            title={"Mark"}
            description={"Ich bin Mark der Marker"}
            anchor={{ x:0.5, y:0.5 }}>
          <Image
            source={require('../../assets/images/b2.png')}
            style={styles.bohrer}
            />
          </MapView.Marker>
       
        </MapView>
      }
      
      
    </View>
      
  );
}
}

const styles = StyleSheet.create({
container: {
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center',
  paddingTop: Constants.statusBarHeight,
  backgroundColor: '#ecf0f1',
},
paragraph: {
  margin: 24,
  fontSize: 18,
  fontWeight: 'bold',
  textAlign: 'center',
  color: '#34495e',
},
map: {
  top: 0,
  left: 0,
  ...StyleSheet.absoluteFillObject,
},
bohrer: {
  width: 50,
  height: 50,
}
});

