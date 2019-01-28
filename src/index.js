import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserHistory } from 'history';
import { Router, Route, Switch } from 'react-router-dom';

import indexRoutes from 'routes/index.jsx';

import 'assets/scss/material-kit-react.css?v=1.3.0';
// import registerServiceWorker from './registerServiceWorker';

import { combineReducers, createStore } from 'redux';
import { Provider } from 'react-redux';
import productsReducer from './reducers/productsReducer.js';
import usersReducer from './reducers/usersReducer.js';
import adminReducer from './reducers/adminReducer.js';

const allReducers = combineReducers({
  products: productsReducer,
  user: usersReducer,
  admin: adminReducer
});

const store = createStore(
  allReducers,
  {
    products: [{ name: 'iPhone' }],
    user: 'Michael',
    admin: false
  }
  // window.devToolsExtension && window.devToolsExtension()
);
// console.log(store.getState());

var hist = createBrowserHistory();

ReactDOM.render(
  <Provider store={store} history={hist}>
    <Router history={hist}>
      <Switch>
        {indexRoutes.map((prop, key) => {
          return (
            <Route
              path={prop.path}
              key={key}
              component={prop.component}
              randomProps="randomProps"
            />
          );
        })}
      </Switch>
    </Router>
  </Provider>,
  document.getElementById('root')
);
