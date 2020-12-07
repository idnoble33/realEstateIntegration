import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import Routes from './Routes';
import { createStore, applyMiddleware } from 'redux'
import promiseMiddleware from 'redux-promise';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';
import reducers from './store/reducers/'

import 'bootstrap/dist/css/bootstrap.css';


const createStoreWithMiddleware = applyMiddleware(promiseMiddleware, ReduxThunk)(createStore)

ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
     
      <Routes/>
      
    </Provider>
  ,document.getElementById('root')
);

 