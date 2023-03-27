import axios from "axios";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ThreeDots } from "react-loader-spinner";
import styles from './login.module.css';

export const Login = () => {
  const [Loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  //using useNavigate to go to different page

  const navigate = useNavigate();

  const handleReg = () => {
    navigate("/reg");
  };

  const handleLogin = () => {};

  //taking data from the form

  const handleChange = (e: string) => {
    const { id, value } = e.target;
    setData({ ...data, [id]: value });
  };

  return (
    <div>
      <div className={styles.log_main}>
        <div className={styles.welcome}>Welcome to login page</div>
        <div className={styles.log_input}>
          <input
            id="email"
            onChange={handleChange}
            className={styles.log_input}
            type="text"
            placeholder="email address"
          />
        </div>
        <div className="log-input">
          <input
            id="password"
            onChange={handleChange}
            className={styles.log_input}
            type="password"
            placeholder="Password"
          />
        </div>
        <div className={styles.log_btn}>
          <button className={styles.log_btn} onClick={handleLogin}>
            {Loading ? (
              <div className="loader">
                <ThreeDots
                  height="40"
                  width="40"
                  radius="9"
                  color="black"
                  ariaLabel="three-dots-loading"
                  wrapperStyle={{}}
                  wrapperClassName=""
                  visible={true}
                />
              </div>
            ) : (
              "Login"
            )}
          </button>
        </div>
        <div className={styles.log_not_reg}>Not registered yet ?</div>
        <div className={styles.log_btn}>
          <button onClick={handleReg} className={styles.log_btn}>
            Register
          </button>
        </div>
      </div>
    </div>
  );
};
