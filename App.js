import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

import PlaceList from './src/components/PlaceList/PlaceList'
import PlaceInput from './src/components/PlaceInput/PlaceInput'
import placeImage from './src/assets/picture.jpg';

export default class App extends React.Component {  
  state = {    
    places: []
  }

  placeAddedHandler = placeName => {
    this.setState(prevState => {
      return {
        places: prevState.places.concat(
          {
            key: Math.random(), 
            name: placeName,
            image: placeImage
          })
      }
    })
  }

  placeDeletedHandler = key => {
    this.setState(prevState => {
      return {
        places: prevState.places.filter(place => {
          return place.key !== key;
        })
      }
    })
  }
  
  render() {    
    return (
      <View style={styles.container}>
        <PlaceInput onPlacedAdded={this.placeAddedHandler} />
        <PlaceList places={this.state.places} 
          onItemDeleted={this.placeDeletedHandler} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,  
    padding: 30,  
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  }  
});
