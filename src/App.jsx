import "./App.css";
import SignupForm from "./components/SignupForm/SignupForm";
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import HomePage from "./routes/HomePage";
import ErrorPage from "./routes/ErrorPage";
import Layout from "./routes/Layout ";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout/>,
        errorElement: <ErrorPage/>,
        children: [
            {
                index:true,
                element: <HomePage/>,
            },
            {
                path: "/signup",
                element: <SignupForm/>,
            },
        ]
    },
]);

function App() {
    return (
        <RouterProvider router={router}/>
    )
}

export default App;
