import LandingPage from 'views/LandingPage/LandingPage.jsx';
import ProfilePage from 'views/ProfilePage/ProfilePage.jsx';
import LoginPage from 'views/LoginPage/LoginPage.jsx';
import AdminPage from '../views/AdminPage/AdminPage';
import EventsView from 'views/EventsView/EventsView.jsx';
import CategoryView from 'views/CategroyView/CategoryView.jsx';

var indexRoutes = [
  { path: '/admin-page', name: 'Admin', component: AdminPage },
  { path: '/profile-page', name: 'ProfilePage', component: ProfilePage },
  { path: '/login-page', name: 'LoginPage', component: LoginPage },
  { path: '/home-page', name: 'EventsView', component: EventsView },
  {
    path: '/category-page/:id',
    name: 'CategoryEventsView',
    component: CategoryView
  },
  { path: '/', name: 'Components', component: LandingPage }
];

export default indexRoutes;
