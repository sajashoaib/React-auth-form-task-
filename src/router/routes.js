import { PATHS } from "./paths";
import { lazy } from "react";
import AdminGuard from "../components/Guards/AdminGuard";
import GuestGuard from "../components/Guards/GuestGurad";
import { Navigate } from "react-router-dom";
import UsersPage from "../pages/UsersPage";
import ProfilePage from "../pages/ProfilePage";
import GamePage from "../pages/GamePage";
import UserGuard from "../components/Guards/UserGuard";
 const SignupPage=lazy(()=>import("../pages/SignupPage") ) ;
 const LoginPage =lazy(()=>import("../pages/LoginPage"));


const adminPages = [
  {
    path: PATHS.ADMIN.ROOT,
    element: <AdminGuard />,
    children: [
      {
        index: true,
        element: <GamePage />,
      },
      {
        path: PATHS.ADMIN.SETTINGS,
        element: <UsersPage />,
      },
    ],
  },
  {
    path: PATHS.PROFILE,
    element: <ProfilePage />,
  },
];

const userPages = [
  {
    path: PATHS.USERS.ROOT,
    element: <UserGuard/>,
    children: [
      {
        index: true,
        element: <GamePage />,
      },
    ],
  },
  {
    path: PATHS.PROFILE,
    element: <ProfilePage />,
  },
];

const authPages = [
  {
    path: PATHS.LOGIN,
    element: (
      <GuestGuard>
        <LoginPage />
      </GuestGuard>
    ),
  },
  {
    path: PATHS.SIGNUP,
    element: (
      <GuestGuard>
        <SignupPage />
      </GuestGuard>
    ),
  },
];

const guestPages = [
  {
    index: true,
    element: (
      <GuestGuard>
        <SignupPage />
      </GuestGuard>
    ),
  },
  {
    path: PATHS.LOGIN,
    element: (
      <GuestGuard>
        <SignupPage />
      </GuestGuard>
    ),
  },

  ...authPages,
];

const routes = [
  ...guestPages,
  ...userPages,
  ...adminPages,

  {
    path: "*",
    element: <Navigate to={PATHS.ERRORS.NOT_FOUND} replace={true} />,
  },
];
export { routes, guestPages, userPages, adminPages };
