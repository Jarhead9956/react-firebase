import React, {useState, useEffect} from "react";

import Input from "./Input";
import Button from "./Button";

import styles from './RegisterForm.module.css';

const RegisterForm = () => {
    const [enteredEmail, setEnteredEmail] = useState('');
    const [enteredEmailIsInvalid, setEnteredEmailIsInvalid] = useState(false);
    const [enteredPassword, setEnteredPassword] = useState('');
    const [enteredPasswordIsInvalid, setEnteredPasswordIsInvalid] = useState(false);
    const [enteredRepeatPassword, setEnteredRepeadPassword] = useState('');
    const [enteredRepeatPasswordIsInvalid, setEnteredRepeadPasswordIsInvalid] = useState(false);
    const [formIsValid, setFormIsValid] = useState(false);

    useEffect(() => {
        const validationTimer = setTimeout(() => {
            let emailIsValid = false;
            let passwordIsValid = false;
    
            if(enteredEmail.includes('@')) {
                emailIsValid = true;
            };
    
            if(enteredPassword.length >= 6 && enteredRepeatPassword >= 6) {
                passwordIsValid = enteredPassword === enteredRepeatPassword ? true : false;
            }
            setFormIsValid(emailIsValid && passwordIsValid);
        }, 700);

        return () => {
            clearTimeout(validationTimer)
        };
    }, [enteredEmail, enteredPassword, enteredRepeatPassword]);

    const changeEnteredEmailHandler = (value) => {
         setEnteredEmail(value);
    };

    const blurEnteredEmailHandler = (value) => {
        setEnteredEmailIsInvalid(!value.includes('@'))
    };

    const changeEnteredPasswordHandler = (value) => {
        setEnteredPassword(value);
    };

    const blurEnteredPasswordHandler = (value) => {
        setEnteredPasswordIsInvalid(value.length < 6);
    };

    const changeEnteredRepeatPasswordHandler = (value) => {
        setEnteredRepeadPassword(value);
    };
    
    const blurEnteredRepeatPasswordHandler = (value) => {
        setEnteredRepeadPasswordIsInvalid(value !== enteredPassword);
    };
    
    return (
        <form className={styles.form}>
                <Input 
                    title='Enter your e-mail'
                    value={enteredEmail}
                    onChangeValue={changeEnteredEmailHandler}
                    onBlurInput = {blurEnteredEmailHandler}
                    type='text'
                />
                {enteredEmailIsInvalid && <p className={styles['email-error']}>Please enter valid Email!</p>}
                <Input 
                    title='Password'
                    value={enteredPassword}
                    onChangeValue={changeEnteredPasswordHandler}
                    onBlurInput = {blurEnteredPasswordHandler}
                    type="password"
                />
                {enteredPasswordIsInvalid && <p className={styles['password-error']}>Password must be more than 6 characters long!</p>}
                <Input 
                    title='Repeat password'
                    value={enteredRepeatPassword}
                    onChangeValue={changeEnteredRepeatPasswordHandler}
                    onBlurInput = {blurEnteredRepeatPasswordHandler}
                    type='password'
                />
                {enteredRepeatPasswordIsInvalid && <p className={styles['password-error']}>Repeat password should be equal to password!</p>}
                <Button 
                    title='Submit'
                    className={styles['submit-button']} 
                    isDisabled = {!formIsValid}
                />
            </form>
    );
};

export default RegisterForm;