import {Routes,Route} from 'react-router-dom'
import { Home } from '../pages/Home/Home'
import { TasksList } from '../pages/TasksList/TasksList';


export const Allroutes=()=>{
    return (
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<TasksList />} path="/tasks" />
      </Routes>
    );
}