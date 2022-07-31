import React from 'react';

import styles from './Button.module.css';

const Button = props => {
  return (
    <button 
      type={props.type} 
      onClick={props.onClick}
      disabled={props.disabled}
      className={styles.button}
    >
      {props.children}
    </button>
  );
};

export default Button;