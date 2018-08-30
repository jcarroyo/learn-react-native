import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

import PlaceList from './src/components/PlaceList/PlaceList'
import PlaceInput from './src/components/PlaceInput/PlaceInput'
import PlaceDetail from './src/components/PlaceDetail/PlaceDetail';

import {connect} from 'react-redux';

import {addPlace, deletePlace, selectPlace, deselectPlace} from './src/store/actions/index'

import configureStore from './src/store/configureStore';
const store = configureStore();

import {Provider} from 'react-redux';

const mapStateToProps = state => {  
  return {
    places: state.places.places,
    selectedPlace: state.places.selectedPlace
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onAddPlace: (name) => dispatch(addPlace(name)),
    onDeletePlace: () => dispatch(deletePlace()),
    onSelectPlace: (key) => dispatch(selectPlace(key)),
    onDeselectPlace: () => dispatch(deselectPlace())
  }
};

class RootComponent extends React.Component {  

  placeAddedHandler = placeName => {
    this.props.onAddPlace(placeName);
  }

  placeSelectedHandler = key => {
    this.props.onSelectPlace(key);
  }

  placeDeletedHandler = () => {
    this.props.onDeletePlace();
  }

  modalClosedHandler = () => {
    this.props.onDeselectPlace();  
  }
  
  render() {    
    return (               
        <View style={styles.container}>
          <PlaceDetail 
            selectedPlace={this.props.selectedPlace} 
            onItemDeleted={this.placeDeletedHandler} 
            onModalClosed={this.modalClosedHandler} />
          <PlaceInput onPlacedAdded={this.placeAddedHandler} />
          <PlaceList places={this.props.places} 
            onItemSelected={this.placeSelectedHandler} />
        </View>        
    );
  }
}

const ConnectedRootComponent = connect(mapStateToProps, mapDispatchToProps)(RootComponent);

export default class App extends React.Component {
  render(){
    return(
      <Provider store={store}>
        <ConnectedRootComponent />
      </Provider>
    )
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