import {CLOSE_SEARCHED_CITIES_BOX, FIND_SEARCHED_CITIES} from '../reducers/types'

const initialState = {
    citiesList: ['Киев', 'Одесса', 'Харьков'],
    foundedCitiesList: []
};

export default (state = initialState, action) => {
    switch (action.type) {
        case FIND_SEARCHED_CITIES:

            const filteredCitiesList = state.citiesList.filter(item => {
                return (item.indexOf(action.payload) > -1);
            });
            console.log(filteredCitiesList);
            return {
                ...state,
                foundedCitiesList: filteredCitiesList
            };
        case CLOSE_SEARCHED_CITIES_BOX:
            return {
                ...state,
                foundedCitiesList: []
            };
        default:
            return state;
    }
}

