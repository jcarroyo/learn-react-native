import React from 'react'
import {View, TextInput, Button, StyleSheet} from 'react-native'

class PlaceInput extends React.Component{
    state = {
        placeName: ''
    }

    placeNameChangedHandler = (event) => {
        this.setState({
            placeName: event
        });
    }

    onAddPlaceName = () => {
        if(this.state.placeName.trim() === ''){return;}
        this.props.onPlacedAdded(this.state.placeName);

        this.setState({
            placeName: ''
        });
    }

    render(){
        return(
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.placeInput}
                    placeholder="An awesome place to place"
                    placeholderTextColor='#CCC'
                    value={this.state.placeName}
                    onChangeText={this.placeNameChangedHandler} />
                <Button 
                    style={styles.placeButton}
                    title="Add"
                    onPress={this.onAddPlaceName}
                />
            </View>        
        )
    }
}


const styles = StyleSheet.create({
    inputContainer: {    
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    placeInput: {
        width: '70%'
    },
    placeButton: {
        width: '30%'
    }
});

export default PlaceInput;