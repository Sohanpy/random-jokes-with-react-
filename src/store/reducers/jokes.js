import _ from 'lodash'
import {FETCH_JOKES} from '../actions/types'

export default  (state = {}, action) => {
    switch(action.type){
        case FETCH_JOKES:
            return { ...state , ..._.mapKeys(action.payload , 'id')}
        default:
            return state
    }
}