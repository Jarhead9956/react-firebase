import React from "react";

import styles from "./Button.module.css";

const Button = ({title, className, type, onClickBtn}) => {
    let btnType = type ? type : 'submit';
    let clickHandler = onClickBtn ? onClickBtn : null;
    return(
        <div className={className}>
            <button type={btnType} onClick={clickHandler} className={styles.button}>{title}</button>
        </div>
    );
};

export default Button;