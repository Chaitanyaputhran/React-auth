import React from 'react';
import styles from "./Loginmodule.module.css"; 
import InputControl from "../inputControl/inputControl"

function login() {
  return (
    <div className={styles.container}>
      <div className={styles.innerBox}>
        <h1 className={styles.heading}>Login</h1> 
        <InputControl label="Email" placeholder="Enter email address"/>
        <InputControl label="Password" placeholder="Enter Password"/>
        <div className={styles.footer}>
          <button>Login</button>
          <p>Already have an account?<span><Link to="/Signup">
          </Link>Sign up</span></p>
        </div>
      </div>
    </div>
  );
}

export default login;

