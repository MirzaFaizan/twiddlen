
import LandingPage from "views/LandingPage/LandingPage.jsx";
import ProfilePage from "views/ProfilePage/ProfilePage.jsx";
import LoginPage from "views/LoginPage/LoginPage.jsx";
import AdminPage from "../views/AdminPage/AdminPage";
// import AdminLogin from '../views/AdminPage/AdminLogin';
import HomePage from "../views/HomePage/HomePage";

var indexRoutes = [
  { path: "/home-page", name: "HomePage", component: HomePage },
  // { path: "/admin-login", name: "Admin", component: AdminLogin },
  { path: "/admin-page", name: "Admin", component: AdminPage },
  { path: "/profile-page", name: "ProfilePage", component: ProfilePage },
  { path: "/login-page", name: "LoginPage", component: LoginPage },
  { path: "/", name: "Components", component: LandingPage },
];

export default indexRoutes;
