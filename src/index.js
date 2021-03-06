import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import Configurator from './components/Configurator'

import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import './index.css'

import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'
import rootSaga from './sagas/sagas'

import  {configurator} from './reducers'

const sagaMiddleware = createSagaMiddleware()

const store = createStore(configurator, compose(
    applyMiddleware(sagaMiddleware),
    window.devToolsExtension ? window.devToolsExtension() : f=> f
    )
  );

sagaMiddleware.run( rootSaga )

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/(:configStr)" component={App} >
        <IndexRoute component={Configurator} />
      </Route>    
    </Router>
  </Provider>,
  document.getElementById('root')
);
