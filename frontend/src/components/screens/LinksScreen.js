import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { ExpoLinksView } from '@expo/samples';

import MapView from 'react-native-maps';



export default class LinksScreen extends React.Component {

  static navigationOptions = {
    title: 'Map',
  };

  render() {
    return (
        <MapView style={styles.map}
          provider={'google'}
          initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
>
          <MapView.Marker 
            coordinate={{latitude: 37.78825,
            longitude: -122.4324}}
            title={"Mark"}
            description={"Ich bin Mark der Marker"}
            image={require('../../assets/images/bohrmaschine.png')}
            onLoad={() => this.forceUpdate()} //sonst lädt das Bild nicht und es lädt nur das häßliche Bild was mega weird ist deshalb erstmal so zum testen
         />
       
        </MapView>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },

  map: {
    top: 0,
    left: 0,
    ...StyleSheet.absoluteFillObject,
  },
});
