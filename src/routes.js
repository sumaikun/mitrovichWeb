/*!

=========================================================
* Material Dashboard React - v1.9.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/material-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
import Person from "@material-ui/icons/Person";
import LocationOn from "@material-ui/icons/LocationOn";
import Notifications from "@material-ui/icons/Notifications";
// core components/views for Admin layout
import DashboardPage from "views/Dashboard/Dashboard.js";
import UserProfile from "views/UserProfile/UserProfile.js";
import TableList from "views/TableList/TableList.js";
import Maps from "views/Maps/Maps.js";
import NotificationsPage from "views/Notifications/Notifications.js";


//mitrovich views
import Users from "views/Users"
import UserForm from "views/UserForm"

const dashboardRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    rtlName: "لوحة القيادة",
    icon: Dashboard,
    component: DashboardPage,
    layout: "/admin"
  },
  {
    path: "/user",
    name: "User Profile",
    //icon: Person,
    component: UserForm,
    layout: "/admin"
  },
  {
    path: "/users",
    name: "Usuarios",
    icon: Person,
    component: Users,
    layout: "/admin"
  },
  {
    path: "/reports",
    name: "Reportes",
    rtlName: "قائمة الجدول",
    icon: "content_paste",
    component: TableList,
    layout: "/admin"
  },
  /*{
    path: "/table",
    name: "Table List",
    rtlName: "قائمة الجدول",
    icon: "content_paste",
    component: TableList,
    layout: "/admin"
  },*/
  /*{
    path: "/maps",
    name: "Maps",
    rtlName: "خرائط",
    icon: LocationOn,
    component: Maps,
    layout: "/admin"
  },*/
  {
    path: "/ecommerce-delivers",
    name: "Envios Ecommerce",
    rtlName: "إخطارات",
    icon: Notifications,
    component: NotificationsPage,
    layout: "/admin"
  },
  {
    path: "/notifications",
    name: "Notifications",
    rtlName: "إخطارات",
    icon: Notifications,
    component: NotificationsPage,
    layout: "/admin"
  },
];

export default dashboardRoutes;
