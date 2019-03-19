import LandingPage from 'views/LandingPage/LandingPage.jsx';
import ProfilePage from 'views/ProfilePage/ProfilePage.jsx';
import LoginPage from 'views/LoginPage/LoginPage.jsx';
import AdminPage from 'views/AdminPage/AdminPage';
import EventsView from 'views/EventsView/EventsView.jsx';
import CategoryView from 'views/CategroyView/CategoryView.jsx';
import Today from 'views/Happening/Today/Today.jsx';
import Week from 'views/Happening/ThisWeek/ThisWeek.jsx';
import Month from 'views/Happening/ThisMonth/ThisMonth.jsx';
import MyActivities from 'views/MyActivities/MyActivities.jsx';
import Privacy from 'views/Privacy/Privacy.jsx';

import ARGame from 'views/ARGame/ARGame.jsx';

var indexRoutes = [
  { path: '/admin-page', name: 'Admin', component: AdminPage },
  { path: '/profile-page', name: 'ProfilePage', component: ProfilePage },
  { path: '/login-page', name: 'LoginPage', component: LoginPage },
  { path: '/home-page', name: 'EventsView', component: EventsView },
  { path: '/happening-today', name: 'HappeningToday', component: Today },
  { path: '/happening-thisweek', name: 'HappeningWeek', component: Week },
  { path: '/happening-thismonth', name: 'HappeningMonth', component: Month },
  { path: '/my-activities', name: 'MyActivities', component: MyActivities },
  { path: '/my-settings', name: 'MySettings', component: MySettings },
  { path: '/privacy', name: 'Privacy', component: Privacy },
  {
    path: '/category-page/:id',
    name: 'CategoryEventsView',
    component: CategoryView
  },
  { path: '/my-argame', name: 'MyARGame', component: ARGame },
  { path: '/', name: 'Components', component: LandingPage }
];

export default indexRoutes;
