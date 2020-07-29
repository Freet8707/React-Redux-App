import axios from 'axios'

export const FETCHING_GHIBLI_START = 'FETCHING_GHIBLI_START';
export const FETCHING_GHIBLI_SUCCESS = 'FETCHING_GHIBLI_SUCCESS';
export const FETCHING_GHIBLI_ERROR = 'FETCHING_GHIBLI_ERROR';

export const getGhibli = () => dispatch => {
    dispatch({ type: FETCHING_GHIBLI_START });

    axios.get('https://ghibliapi.herokuapp.com/people')
        .then(res => {
            console.log(res.data)
            dispatch({ type: FETCHING_GHIBLI_SUCCESS, payload: res.data })
        })
        .catch(err => {
            console.log(err.message)
            dispatch({ type: FETCHING_GHIBLI_ERROR, payload: err.message })
        })
};