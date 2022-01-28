import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import {createStore} from 'redux'
import {BrowserRouter} from 'react-router-dom'
import {Provider} from 'react-redux'

const defaultState = {
  dataCart: [],
}

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'ADD_CART':
      return test
    case 'ADD_CASH':
      return {...state, cash: state.cash - action.payload}
    default:
      return state
  }
}
function test(value) {
  console.log(value)
}
const store = createStore(reducer)

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,

  document.getElementById('root'),
)
