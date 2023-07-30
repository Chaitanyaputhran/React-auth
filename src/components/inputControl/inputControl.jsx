import React from 'react'
import styles from './inputControl.module.css';

function inputControl(props) {
  return (<div className={styles.container}> 
    {
props.label &&
    
    <label>
        {props.label}
        </label>
  
}
<input type="text" {...props}/>
</div>);
}
export default inputControl;