import React from "react";

import styles from "./Input.module.css";

const Input = ({title, type}) => {
    return(
        <div className={styles['input-container']}>
            <label>{title}</label>
            <input 
                type={type}
            />
        </div>
    );
};

export default Input;