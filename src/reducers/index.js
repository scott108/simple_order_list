import orderReducer from './order'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  orderReducer,
})

export default rootReducer