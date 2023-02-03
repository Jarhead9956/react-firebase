import React, {useState} from "react";

import styles from "./Input.module.css";

const Input = ({title, type, value, onChangeValue, onBlurInput}) => {

    const changeValueHandler = (event) => {
        onChangeValue(event.target.value);
    };

    const blurHandler = (event) => {
        if(onBlurInput) {
            onBlurInput(event.target.value);
        };
    };

    return(
        <div className={styles['input-container']}>
            <label>{title}</label>
            <input 
                type={type}
                value={value}
                onChange={changeValueHandler}
                onBlur = {blurHandler}
            />
        </div>
    );
};

export default Input;