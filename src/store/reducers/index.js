import {combineReducers} from 'redux'
import JokesReduceers from './jokes'

export default combineReducers({
    jokes : JokesReduceers
})