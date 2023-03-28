
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logOut } from '../../redux/action';
import styles from './navbar.module.css';

export const Navbar=()=>{
    const navigate=useNavigate();
    const auth=useSelector((state)=>state?.auth.auth);
    console.log('auth from nav',auth)
    const dispatch=useDispatch();
    const handleLogin=()=>{
        if(auth==true){
            dispatch(logOut(''));
        }
    }
    return <div className={styles.cont}>
         <div onClick={()=>{
            navigate('/addtask')
         }}>
            Add tasks
         </div>
         <div onClick={()=>{
            navigate('/tasks')
         }} >
            View tasks
         </div>
         <div onClick={handleLogin}>
           {auth==true?'Log out':"Log in"}
         </div>
    </div>
}