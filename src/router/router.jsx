import { createBrowserRouter } from "react-router";
import MainLayout from "../main/MainLayout";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import AboutPage from "../pages/AboutPage";
import SkillPage from "../pages/SkillPage";
import ProjectPage from "../pages/ProjectPage";
import ContactPage from "../pages/ContactPage";
import DashBoard from "../pages/DashBoard";
import AddPost from "../pages/Dash-board/AddPost";

const router = createBrowserRouter([
    {path: '/', 
       element: <MainLayout></MainLayout>,
       errorElement: <ErrorPage></ErrorPage>,
       children:[
        {path: '/', element: <Home></Home>},
        {path: '/login', element: <Login></Login>},
        {path: '/register', element: <Register></Register>},
        {path: '/aboutMe', element: <AboutPage></AboutPage>},
        {path: '/skill', element: <SkillPage></SkillPage>},
        {path: '/project', element: <ProjectPage></ProjectPage>},
        {path: '/contact', element: <ContactPage></ContactPage>},
        {path: 'dashBoard', element: <DashBoard></DashBoard>,
            children:[
                {path:'addPost', element:<AddPost></AddPost>}
            ]
        }
       ]
    }
])

export {router}