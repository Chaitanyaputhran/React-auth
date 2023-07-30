import React from 'react';
import styles from "./Loginmodule.module.css"; // Import CSS module classes

function login() {
  return (
    <div className={styles.container}> {/* Use curly braces for className and include styles */}
      <div className={styles.innerBox}> {/* Use curly braces for className and include styles */}
        <h1 className={styles.heading}>Login</h1> {/* Use curly braces for className and include styles */}
      </div>
    </div>
  );
}

export default login;

