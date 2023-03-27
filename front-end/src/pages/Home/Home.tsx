import styles from './home.module.css'
import { Div } from '../../components/StylesComponents/Div'
import { useState } from 'react';

export const Home=()=>{
    const [night,setNight]=useState(false);
    return <div>
         <div className={styles.cont}>
            <Div status={night} >All my tasks</Div>
            <Div  status={night}>Add new tasks</Div>
         </div>
    </div>
}