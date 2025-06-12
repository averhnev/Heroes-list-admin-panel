import { createReducer } from "@reduxjs/toolkit"

import {
    heroesFetching,
    heroesFetched,
    heroesFetchingError,
    heroCreated,
    heroDeleted
} from '../actions'

const initialState = {
    heroes: [],
    heroesLoadingStatus: 'idle'
}

const heroes = createReducer(initialState, (builder) => {
    builder
        .addCase(heroesFetching, (state) => {
            state.heroesLoadingStatus = 'loading'
        })
        .addCase(heroesFetched, (state, action) => {
            state.heroes = action.payload
            state.heroesLoadingStatus = 'idle'
        })
        .addCase(heroesFetchingError, (state) => {
            state.heroesLoadingStatus = 'error'
        })
        .addCase(heroCreated, (state, action) => {
            state.heroes.push(action.payload)
        })
        .addCase(heroDeleted, (state, action) => {
            state.heroes = state.heroes.filter(item => item.id !== action.payload)
        })
        .addDefaultCase(() => {})
})

export default heroes;