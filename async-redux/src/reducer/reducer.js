import { FETCHING_GHIBLI_START, FETCHING_GHIBLI_SUCCESS, FETCHING_GHIBLI_ERROR } from '../actions'

const initialState = {
    ghibliChars: [],
    error: '',
    isFetching: false
}

export const reducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCHING_GHIBLI_START:
            return {
                ...state,
                isFetching: true,
                error: ''
            }
        case FETCHING_GHIBLI_SUCCESS: 
            return {
                ...state,
                isFetching: false
            }
        case FETCHING_GHIBLI_ERROR:
            return {
                ...state,
                isFetching: false,
                error: 'there was an error: '
            }
        default:
            return state
    }
}