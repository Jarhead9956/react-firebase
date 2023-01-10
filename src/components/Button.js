import React from "react";

import styles from "./Button.module.css";

const Button = ({title, className}) => {
    return(
        <div className={className}>
            <button className={styles.button}>{title}</button>
        </div>
    );
};

export default Button;