import LoginPage from "../pages/LoginPage/LoginPage";
import RegisterPage from "../pages/RegisterPage/RegisterPage";
import UserProfile from "../pages/UserProfile/UserProfile";

export const routes = [
    {
        path: '/',
        element: <LoginPage />
    },
    {
        path: '/login',
        element: <LoginPage />
    },
    {
        path: '/register',
        element: <RegisterPage />
    },
    {
        path: '/user-profile',
        element: <UserProfile />
    }
]