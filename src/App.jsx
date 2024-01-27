import React from 'react';
import SignupForm from './components/SignupForm/SignupForm';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import HomePage from './pages/HomePage';
import ErrorPage from './pages/ErrorPage';
import Layout from './pages/Layout ';
import ProfilePage from "./pages/ProfilePage";
import {redirect} from "react-router-dom";
import {store} from "./redux/store/store";

export const authorizedRouteLoader = () => {
    const token = store.getState().auth.token;
    if (!token) {
        return redirect('/signup');
    }
    return true;
}
const router = createBrowserRouter([
        {
            path: '/',
            element: <Layout/>,
            errorElement: <ErrorPage/>,
            children: [
                {
                    index: true,
                    element: <HomePage/>,
                },
                {
                    path: 'signup',
                    element: <SignupForm/>,
                },
                {
                    path: 'profile',
                    element: <ProfilePage/>,
                    loader: authorizedRouteLoader,
                },
            ],
        },
    ])
;

export function App() {
    return <RouterProvider router={router}/>;
}
