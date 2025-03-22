import { createStore, combineReducers } from 'redux';
import heroes from '../reducers/heroes';
import filters from '../reducers/filters';

const rootReducer = combineReducers({
    heroes,
    filters
})

const store = createStore(rootReducer);

export default store;