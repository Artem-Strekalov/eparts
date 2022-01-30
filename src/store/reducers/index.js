import dataBascket from './dataBascket'
import statusModal from './statusModal'
import {combineReducers} from 'redux'
const allReducers = combineReducers({
  dataBascket, statusModal
})
export default allReducers
