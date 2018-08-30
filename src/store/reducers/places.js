import {ADD_PLACE, DELETE_PLACE, SELECT_PLACE, DESELECT_PLACE} from '../actions/actionTypes';

//Reducers are functions responsible for updating your state in response to actions. They’re simple functions that take your current state and an action as arguments, and return the next state

const initialState = {    
    places: [],
    selectedPlace: null    
};

const reducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_PLACE:
            return {
                ...state,
                places: state.places.concat({
                    key: Math.random(),
                    name: action.placeName,
                    image: {
                        uri: 'https://picsum.photos/458/354'
                    }
                })
            };
        case DELETE_PLACE:
            return {
                ...state,
                places: state.places.filter(place => {
                    return place.key !== state.selectedPlace.key;
                }),
                selectedPlace: null
            };
        case SELECT_PLACE:
            return {
                ...state,
                selectedPlace: state.places.find(place => {
                    return place.key === action.placeKey
                })
            }
        case DESELECT_PLACE:
            return {
                ...state,
                selectedPlace: null
            }
        default:
            return state;
    }
};

export default reducer;