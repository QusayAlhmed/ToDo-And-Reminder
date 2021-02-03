import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import App from './Component/App/App'
import Reminder from './Component/reducer/index'
import './style.css'
import 'bootstrap/dist/css/bootstrap.min.css'
const store = createStore(Reminder)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
