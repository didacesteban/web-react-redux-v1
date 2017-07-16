import React from 'react';
import ReactDOM from "react-dom";
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import createLogger from 'redux-logger';
import allReducers from './reducers';
import App from './components/app';
import {BrowserRouter as Router} from 'react-router-dom'

const store = createStore(allReducers);

ReactDOM.render(
    <Provider store={store}>
       <Router>
        <App />
      </Router>
    </Provider>,
    document.getElementById('root')
);
