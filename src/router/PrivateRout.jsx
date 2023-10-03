import { useContext } from "react";
import { AuthContaxt } from "../Provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRout = ({children}) => {
    const {user,loading} = useContext(AuthContaxt);
    const location = useLocation()
    if(loading){
        return <div className="flex justify-center h-[100vh] items-center"><span className="loading loading-bars loading-lg"></span></div>
    }
    if(user){
        return children;
    }
    return <Navigate state={location.pathname} to='/login'></Navigate>
}
 
export default PrivateRout;