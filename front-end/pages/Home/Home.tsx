import styles from './home.module.css'
import { Div } from '../../components/StylesComponents/Div'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const Home=()=>{
    const [night,setNight]=useState(false);
    const navigate=useNavigate();
    return (
      <div>
        <div className={styles.cont}>
          <Div
            onClick={() => {
              navigate("/tasks");
            }}
            status={night}
          >
            All my tasks
          </Div>
          <Div
            onClick={() => {
              navigate("/addtask");
            }}
            status={night}
          >
            Add new tasks
          </Div>
        </div>
      </div>
    );
}