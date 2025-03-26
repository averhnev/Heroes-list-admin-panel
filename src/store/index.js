import { createStore, combineReducers, applyMiddleware } from 'redux'
import { thunk } from 'redux-thunk'
import heroes from '../reducers/heroes'
import filters from '../reducers/filters'

const stringMiddleware = () => (next) => (action) => {
    if (typeof action === 'string') {
        return next({
            type: action
        })
    }
    return next(action)
}

const store = createStore(
    combineReducers({ heroes, filters }),
    applyMiddleware(thunk, stringMiddleware)
);

export default store