import { combineReducers } from 'redux'
import { catAPI } from './cat_Api'

export const rootReducer = combineReducers({
  cat: catAPI,
})
