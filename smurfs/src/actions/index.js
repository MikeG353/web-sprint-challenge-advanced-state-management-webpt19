import axios from 'axios'

export const GET_SMURF_LIST_START = 'GET_SMURF_LIST_START'
export const GET_SMURF_LIST_SUCCESS = 'GET_SMURF_LIST_SUCCESS'
export const GET_SMURF_LIST_FAIL = 'GET_SMURF_LIST_FAIL'
export const POST_NEW_SMURF_START = 'POST_NEW_SMURF_START'
export const POST_NEW_SMURF_SUCCESS = 'POST_NEW_SMURF_SUCCESS'
export const POST_NEW_SMURF_FAIL = 'POST_NEW_SMURF_FAIL'

const baseUrl = 'http://localhost:3333/smurfs'

export const getSmurfList = () => (dispatch) => {
    
    dispatch({ type: GET_SMURF_LIST_START })
    console.log('getSmurfList fired')
    axios
    .get(baseUrl)
    .then(res => {
        console.log(res)
        dispatch({ type: GET_SMURF_LIST_SUCCESS, payload: res.data })
    })
    .catch(err => {
        dispatch({ type: GET_SMURF_LIST_FAIL, payload: err.message })
    })
}

export const postNewSmurf = (newSmurf) => (dispatch) => {

    dispatch({ type: POST_NEW_SMURF_START })
    axios
    .post(baseUrl, newSmurf)
    .then(res => {
        console.log(res)
        // this returns an updated array, no need for post success, as its
        // the same as get success
        dispatch({ type: GET_SMURF_LIST_SUCCESS, payload: res.data })
    })
}