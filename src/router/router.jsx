import { createBrowserRouter } from "react-router";
import MainLayout from "../main/MainLayout";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";

const router = createBrowserRouter([
    {path: '/', 
       element: <MainLayout></MainLayout>,
       errorElement: <ErrorPage></ErrorPage>,
       children:[
        {path: '/', element: <Home></Home>},
        {path: '/login', element: <Login></Login>},
        {path: '/register', element: <Register></Register>}
       ]
    }
])

export {router}