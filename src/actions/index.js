// we'll need axios
import axios from 'axios';

export const CHARACTER_FETCH = 'CHARACTER_FETCH';
export const CHARACTER_FETCH_SUCCESS = 'CHARACTER_FETCH_SUCCESS';
export const CHARACTER_FETCH_FAILURE = 'CHARACTER_FETCH_FAILURE';

export const getCharacters = () => dispatch => {
    dispatch({ type: CHARACTER_FETCH })
    axios
        .get('https://swapi.co/api/people/')
        .then(response => {
            console.log('response', response.data.results)
            dispatch({ type: CHARACTER_FETCH_SUCCESS, payload: response.data.results })
        })
        .catch(error => dispatch({ type: CHARACTER_FETCH_FAILURE }))
}

// we'll need to create 3 different action types here.
// one for fetching, one for success and one for failure

// our action creator will be a function that returns a function
// the url to fetch characters from is `https://swapi.co/api/people/`
// remember that now we have controll over our thunk-based action creator
