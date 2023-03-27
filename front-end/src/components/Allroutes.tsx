import {Routes,Route} from 'react-router-dom'
import { Home } from '../pages/Home/Home'


export const Allroutes=()=>{
    return <Routes>
      <Route element={<Home/>} path='/' />
    </Routes>
}