import user from './user'
import helper from './helper'
import {combineReducers} from 'redux'

const allReducers = combineReducers({
  user,
  helper,
})

export default allReducers
