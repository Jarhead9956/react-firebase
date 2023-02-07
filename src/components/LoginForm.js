import React, { useState, useEffect } from "react";

import Input from "./Input";
import Button from "./Button";

import styles from './LoginForm.module.css';

const LoginForm = () => {
    const [enteredEmail, setEnteredEmail] = useState('');
    const [enteredPassword, setEnteredPassword] = useState('');
    const [formIsNotEmpty, setFormIsNotEmpty] = useState(false);
    const [fieldIsEmpty, setFieldIsEmpty] = useState(false);

    useEffect(() => {
        const validationTimer = setTimeout(() => {
            let emailIsNotEmpty = false;
            let passwordIsNotEmpty = false;

            if(enteredEmail.trim().length > 0) {
                emailIsNotEmpty = true;
            }

            if(enteredPassword.trim().length > 0) {
                passwordIsNotEmpty = true;
            };

            setFormIsNotEmpty(emailIsNotEmpty && passwordIsNotEmpty);
        }, 700);

        return () => {
            clearTimeout(validationTimer);
        };
    },[enteredEmail, enteredPassword]);

    const changeEnteredEmailHandler = (email) => {
        setEnteredEmail(email);
    };

    const changeEnteredPasswordHandler = (password) => {
        setEnteredPassword(password);
    };

    const blurFieldHandler = (value) => {
        let fieldValidation = value.trim().length === 0 ? true : false;
        setFieldIsEmpty(fieldValidation);
    }

    return (
        <form className={styles.form}>
            <Input 
                type = 'text'
                title='Email'
                value={enteredEmail}
                onChangeValue={changeEnteredEmailHandler}
                onBlurInput = {blurFieldHandler}
            />
            <Input 
                type='password'
                title = 'Password'
                value= {enteredPassword}
                onChangeValue= {changeEnteredPasswordHandler}
                onBlurInput = {blurFieldHandler}
            />
            {fieldIsEmpty && <p className={styles.error}>Please fill each field!</p>}
            <Button 
                title='Submit'
                className={styles['submit-button']} 
                isDisabled = {!formIsNotEmpty} 
            />
        </form>
    );
};

export default LoginForm;