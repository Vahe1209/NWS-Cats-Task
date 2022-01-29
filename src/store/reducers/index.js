import { combineReducers } from 'redux'
import { catAPI } from './catAPI'

export const rootReducer = combineReducers({
  cat: catAPI,
})
