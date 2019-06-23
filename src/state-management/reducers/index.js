import {combineReducers} from 'redux'
import headerReducer from './headerReducer'
import contentReducer from './contentReducer'
const reducer = combineReducers({
  headerReducer,
  contentReducer
})

export default reducer