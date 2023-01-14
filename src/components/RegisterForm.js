import React, {useState} from "react";

import Input from "./Input";
import Button from "./Button";

import styles from './RegisterForm.module.css';

const RegisterForm = () => {
    const [enteredEmail, setEnteredEmail] = useState('');
    const [enteredPassword, setEnteredPassword] = useState('');
    const [enteredRepeatPassword, setEnteredRepeadPassword] = useState('');

    const changeEnteredEmailHandler = (value) => {
         setEnteredEmail(value);
    };

    const changeEnteredPasswordHandler = (value) => {
        setEnteredPassword(value);
    };

    const changeEnteredRepeatPasswordHandler = (value) => {
        setEnteredRepeadPassword(value);
    };
    
    return (
        <form className={styles.form}>
                <Input 
                    title='Enter your e-mail'
                    value={enteredEmail}
                    onChangeValue={changeEnteredEmailHandler}
                    type='text'
                />
                <Input 
                    title='Password'
                    value={enteredPassword}
                    onChangeValue={changeEnteredPasswordHandler}
                    type="password"
                />
                <Input 
                    title='Repeat password'
                    value={enteredRepeatPassword}
                    onChangeValue={changeEnteredRepeatPasswordHandler}
                    type='password'
                />
                <Button 
                    title='Submit'
                    className={styles['submit-button']} 
                />
            </form>
    );
};

export default RegisterForm;