/*import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import MapView from 'react-native-maps';


export default class ShowMap extends Component {

    render() {
      return (

          <View style={styles.container}>
        <MapView
          style={styles.map}
          region={{
            latitude: 27.719998,
            longitude: 85.324250,
            latitudeDelta: 0.015,
            longitudeDelta: 0.0121,
          }}
        >
        <MapView.Marker 
        coordinate={{ latitude: 27.719998,
            longitude: 85.324250 }} 
        />
        </MapView>
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
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});*/













































/*import React, { Component } from 'react';
import { ActivityIndicator, AsyncStorage, View, StyleSheet } from 'react-native';
import MapView from 'react-native-maps';


export default class ShowMap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      multiplesites: [],
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
      .then(multiplesites => this.setState({ multiplesites, isLoading: false }))
      .catch(error => { console.error(error); });
    
  })
 }


 onRegionChange(region) {
  this.setState({ region });
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
            style={styles.map}
            region={this.state.region}
           onRegionChange={this.onRegionChange}
            >

                      {this.state.multiplesites.map(sites => (sites.map(site => 


                      <MapView.Marker
                        coordinate={{ 
                          latitude: parseFloat(site.lat),
                          longitude: parseFloat(site.lon)
                        }} 
                        title={site.identifier}
                        description={site.description}
                      />

                      )))}

       </MapView>


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
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});
*/













import React, { Component } from 'react';
import { ActivityIndicator, AsyncStorage, View, StyleSheet } from 'react-native';
import MapView from 'react-native-maps';


export default class ShowMap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      multiplesites: [],
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
      .then(multiplesites => this.setState({ multiplesites, isLoading: false }))
      .catch(error => { console.error(error); });
    
  })
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
            style={styles.map}
            region={this.state.region}
            >

                      {this.state.multiplesites.map(sites => (sites.map(site => 


                      <MapView.Marker
                        coordinate={{ 
                          latitude: parseFloat(site.lat),
                          longitude: parseFloat(site.lon)
                        }} 
                        title={site.identifier}
                        description={site.description}
                      />

                      )))}

       </MapView>


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
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});
