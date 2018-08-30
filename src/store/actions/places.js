import {ADD_PLACE, DELETE_PLACE, SELECT_PLACE, DESELECT_PLACE} from './actionTypes';

//Actions have the advantage of serving as audits, which keep a historical record of everything happening in your application

export const addPlace = (placeName) => {
    return {
        type: ADD_PLACE, 
        placeName: placeName
    };
}

export const deletePlace = () => {
    return {
        type: DELETE_PLACE
    }
}

export const selectPlace = (key) => {
    return {
        type: SELECT_PLACE,
        placeKey: key
    }
}

export const deselectPlace = () => {
    return {
        type: DESELECT_PLACE
    }
}