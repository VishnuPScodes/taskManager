import { useSelector } from "react-redux"
import { Navigate, useNavigate } from "react-router-dom";


export const PrivateRoute=({children})=>{
    const auth=useSelector((state)=>state?.auth.auth);
    console.log('here',auth)
    const navigate=useNavigate()
    if(!auth){
     return <Navigate to={'/login'} />
    }
    else{
        return children
    }
 
}