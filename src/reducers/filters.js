import { createReducer } from "@reduxjs/toolkit"

import {
    filtersFetching,
    filtersFetched,
    filtersFetchingError,
    activeFilterChanged
} from '../actions'

const initialState = {
    filters: [],
    filtersLoadingStatus: 'idle',
    activeFilter: 'all'
}

const filters = createReducer(initialState, (builder) => {
    builder
        .addCase(filtersFetching, (state) => {
            state.filtersLoadingStatus = 'loading'
        })
        .addCase(filtersFetched, (state, action) => {
            state.filters = action.payload
            state.filtersLoadingStatus = 'idle'
        })
        .addCase(filtersFetchingError, (state) => {
            state.filtersLoadingStatus = 'error'
        })
        .addCase(activeFilterChanged, (state, action) => {
            state.activeFilter = action.payload
        })
        .addDefaultCase(() => {})
})

export default filters;