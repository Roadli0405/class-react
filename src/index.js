import React from 'react'
import ReactDOM from 'react-dom'
import {
  Provider
} from 'react-redux'

import APP from './App'
import store from './redux/store'

ReactDOM.render( < Provider store = {
      store
    } >
    <
    APP / >
    <
    /Provider> ,document.getElementById('root'))