import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import './index.css'

import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { watchFetchData } from './sagas/sagas'

import configurator from './reducers/configurator'

const sagaMiddleware = createSagaMiddleware()

const store = createStore(configurator, compose(
    applyMiddleware(sagaMiddleware),
    window.devToolsExtension && window.devToolsExtension(),
    )
  );

sagaMiddleware.run( watchFetchData )

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
store.dispatch({type: 'INIT_FETCH'})
