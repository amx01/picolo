import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import rootReducer from './rootReducer'

export default combineReducers({
  router: routerReducer,
  rootReducer
})
