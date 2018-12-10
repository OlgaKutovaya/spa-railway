import {FIND_SEARCHED_CITIES, CLOSE_SEARCHED_CITIES_BOX} from '../reducers/types'

export const findSearchedCities = (input) => {
    return {
        type: FIND_SEARCHED_CITIES,
        payload: input
    }
};

export const closeSearchedCitiesBox = () => {
    return {
        type: CLOSE_SEARCHED_CITIES_BOX,
        payload: null
    }
};