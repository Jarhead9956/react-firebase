import React, { useState } from "react";

import Input from "./Input";
import Button from "./Button";

import styles from './LoginForm.module.css';

const LoginForm = () => {
    const [enteredEmail, setEnteredEmail] = useState('');
    const [enteredPassword, setEnteredPassword] = useState('');

    const changeEnteredEmailHandler = (email) => {
        setEnteredEmail(email);
    };
    const changeEnteredPasswordHandler = (password) => {
        setEnteredPassword(password);
    };

    return (
        <form className={styles.form}>
            <Input 
                type = 'text'
                title='Email'
                value={enteredEmail}
                onChangeValue={changeEnteredEmailHandler}
            />
            <Input 
                type='password'
                title = 'Password'
                value= {enteredPassword}
                onChangeValue= {changeEnteredPasswordHandler}
            />
            <Button 
                title='Submit'
                className={styles['submit-button']}  
            />
        </form>
    );
};

export default LoginForm;