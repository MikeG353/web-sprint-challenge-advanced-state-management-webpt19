import {
    GET_SMURF_LIST_START,
    GET_SMURF_LIST_SUCCESS,
    GET_SMURF_LIST_FAIL
} from '../actions'

const initialSmurfList = {
    smurfs : [],
    is_loading_data: false,
    error: ''
}

function smurfReducer(state = initialSmurfList, action) {
    switch (action.type) {
        case GET_SMURF_LIST_START:
            return {
                ...state,
                is_loading_data: true
            }
        case GET_SMURF_LIST_SUCCESS:
            return {
                ...state,
                smurfs: action.payload,
                is_loading_data: false
            }
        case GET_SMURF_LIST_FAIL:
            return {
                ...state,
                error: action.payload
            }
        default:
            return state
    }
}

export default smurfReducer