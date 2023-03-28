import {Routes,Route} from 'react-router-dom'
import { AddTask } from '../pages/AddTask/AddTask';
import { Home } from '../pages/Home/Home'
import { Login } from '../pages/Login/Login';
import { Register } from '../pages/Register/Register';
import { TasksList } from '../pages/TasksList/TasksList';
import { PrivateRoute } from './PrivateRoute';


export const Allroutes=()=>{
    return (
      <Routes>
        <Route
          element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          }
          path="/"
        />
        <Route
          element={
            <PrivateRoute>
              <TasksList />
            </PrivateRoute>
          }
          path="/tasks"
        />
        <Route
          element={
            <PrivateRoute>
              <AddTask />
            </PrivateRoute>
          }
          path="/addtask"
        />
        <Route element={<Login />} path="/login" />
        <Route element={<Register />} path="/register" />
      </Routes>
    );
}