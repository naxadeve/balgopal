import React, { Component } from 'react';
import { ActivityIndicator, ListView, Text, AsyncStorage, View ,Alert} from 'react-native';
import {Actions} from 'react-native-router-flux';

export default class SiteList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
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
      .then(responseJson => {
        let ds = new ListView.DataSource({
          rowHasChanged: (r1, r2) => r1 !== r2,
        });
      //  Alert.alert(responseJson.data.username+'');
        this.setState(
          {
            isLoading: false,
            dataSource: ds.cloneWithRows(responseJson.data.my_sites),
          },
          function() {// do something with new state\
          }
        );
      })
      .catch(error => {console.error(error);});
    
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
      <View style={{ flex: 1, paddingTop: 20 }}>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={rowData => 
          <Text>{  rowData.project.name}{': '}{rowData.project.phone}, {'\n'}{  rowData.site.name}{': '}{rowData.site.id}</Text>
          }
        />
      </View>
    );
  }
}

