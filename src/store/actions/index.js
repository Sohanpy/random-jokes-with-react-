import api from '../../api'

import {FETCH_JOKES} from './types'

export const fetch_Jokes = () => async dispatch => {
    // const response = await api.get('jokes/random?limitTo=[nerdy,explicit]')
    const response = await api.get('jokes/random?limitTo=[nerdy,explicit]')
    dispatch ({ type : FETCH_JOKES , payload : response.data})
}