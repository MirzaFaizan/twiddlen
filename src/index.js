import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserHistory } from 'history';
import { Router, Route, Switch } from 'react-router-dom';

// import indexRoutes from 'routes/index.jsx';

import 'assets/scss/material-kit-react.css?v=1.3.0';
//import registerServiceWorker from './registerServiceWorker';

import { combineReducers, createStore } from 'redux';
import { Provider } from 'react-redux';
import productsReducer from './reducers/productsReducer.js';
import usersReducer from './reducers/usersReducer.js';
import adminReducer from './reducers/adminReducer.js';
import clientReducer from './reducers/clientReducer.js';

import LandingPage from 'views/LandingPage/LandingPage.jsx';
import ProfilePage from 'views/ProfilePage/ProfilePage.jsx';
// import LoginPage from 'views/LoginPage/LoginPage.jsx';
import AdminPage from 'views/AdminPage/AdminPage';
import EventsView from 'views/EventsView/EventsView.jsx';
import CategoryView from 'views/CategroyView/CategoryView.jsx';
import Today from 'views/Happening/Today/Today.jsx';
import Week from 'views/Happening/ThisWeek/ThisWeek.jsx';
// import Month from 'views/Happening/ThisMonth/ThisMonth.jsx';
import MyActivities from 'views/MyActivities/MyActivities.jsx';
import MySettings from 'views/Settings/Settings.jsx';

const allReducers = combineReducers({
  products: productsReducer,
  user: usersReducer,
  admin: adminReducer,
  client: clientReducer
});

const store = createStore(
  allReducers,
  {
    products: [{ name: 'iPhone' }],
    user: 'Michael',
    admin: false,
    client: false
  }
  // window.devToolsExtension && window.devToolsExtension()
);
// console.log(store.getState());

var hist = createBrowserHistory();

ReactDOM.render(
  <Provider store={store} history={hist}>
    <Router history={hist}>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path="/home-page" component={EventsView} />
        <Route path="/category-page/:id" component={CategoryView} />
        <Route path="/happeningtoday" component={Today} />
        <Route path="/happeningthisweek" component={Week} />
        <Route path="/myactivities" component={MyActivities} />
        <Route path="/mysettings" component={MySettings} />
        {/* <Route path="/login-page" component={LoginPage}/> */}
        <Route path="/profile-page" component={ProfilePage} />
        <Route path="/lv-admin" component={AdminPage} />
        {/* {indexRoutes.map((prop, key) => {
          return (
            <Route
              path={prop.path}
              key={key}
              component={prop.component}
              randomProps="randomProps"
            />
          );
        })} */}
      </Switch>
    </Router>
  </Provider>,
  document.getElementById('root')
);

//registerServiceWorker.register();
