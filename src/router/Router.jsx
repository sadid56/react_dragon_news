import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../pages/mainLayout/MainLayou";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/register/Register";
import News from "../pages/News/News";
import PrivateRout from "./PrivateRout";

const Router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: ()=> fetch('/news.json')
            },
            {
                path: '/news/:id',
                element: <PrivateRout><News></News></PrivateRout>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            }
        ]
    }
])
 
export default Router;