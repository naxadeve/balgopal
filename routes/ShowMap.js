import React, { Component } from 'react';
import { ActivityIndicator, AsyncStorage, View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import MapView from 'react-native-maps';


const DEFAULT_PADDING = { top: 40, right: 40, bottom: 40, left: 40 };


export default class ShowMap extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      multiplesites: [],
      //latitude: [],
    //  longitude: [],
      markers: [],


      region: {
            latitude: 27.719998,
            longitude: 85.324250,
            latitudeDelta: 0.015,
            longitudeDelta: 0.0121
    }
    };
  }


  componentDidMount() {
    return AsyncStorage.getItem('token').then((token) => {
      fetch("http://kc.naxa.com.np/users/me/", {
        method: "GET",
        headers: {
          'Authorization': token
        }
      })
      .then(response => response.json())
      .then(responseJson => responseJson.data.my_projects)
      .then(projects => projects.map(project => project.sites))
      // .then(multiplesites => {
      //   this.setState({ multiplesites, isLoading: false });
      //   this.setState({ latitude: multiplesites.map(sites => sites.map(site => site.lat)) });
      //   this.setState({ longitude: multiplesites.map(sites => sites.map(site => site.lon)) });
      // })

      .then(multiplesites => {
        this.setState({ multiplesites, isLoading: false });
        this.setState({ markers: multiplesites.map(sites => sites.map(site => ({
          latitude: parseFloat(site.lat), longitude: parseFloat(site.lon) }))) });
      })

      .then(() => console.log(this.state.markers))

      .catch(error => { console.error(error); });
});
 }

 fitAllMarkers() {
   this.state.markers.map((marker) => this.map.fitToCoordinates(marker, {
     edgePadding: DEFAULT_PADDING,
     animated: true }));
   }

  render() {
    if (this.state.isLoading) {
      return (
        <View style={{ flex: 1, paddingTop: 20 }}>
          <ActivityIndicator />
        </View>
      );
    }

    return (


      <View style={styles.container}>

            <MapView
            ref={ref => { this.map = ref; }}
            style={styles.map}
            region={this.state.region}
            >
 {this.state.multiplesites.map(sites => (sites.map(site =>


                      <MapView.Marker
                        coordinate={{
                          latitude: parseFloat(site.lat), longitude: parseFloat(site.lon)
                        }}
                        title={site.identifier}
                        description={site.description}
                      />

                      )))}


       </MapView>

       <TouchableOpacity
            onPress={() => this.fitAllMarkers()}
            style={[styles.bubble, styles.button]}
       >
            <Text>Fit All Markers</Text>
          </TouchableOpacity>


      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    height: 400,
    width: 400,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  bubble: {
   backgroundColor: 'rgba(255,255,255,0.7)',
   paddingHorizontal: 18,
   paddingVertical: 12,
   borderRadius: 20,
 },
 button: {
   marginTop: 12,
   paddingHorizontal: 12,
   alignItems: 'center',
   marginHorizontal: 10,
 },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});
