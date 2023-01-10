import React from "react";

import Container from "../layout/Container";
import Input from "../components/Input";
import Button from "../components/Button";

import styles from "./RegisterPage.module.css";

const RegisterPage = () => {
    return(
        <Container className={styles.container}>
            <h2 className={styles['page-title']}>Register</h2>
            <form className={styles.form}>
                <Input 
                    title='Enter your e-mail'
                    type='text'
                />
                <Input 
                    title='Password'
                    type="password"
                />
                <Input 
                    title='Repeat password'
                    type='password'
                />
                <Button 
                    title='Submit'
                    className={styles['submit-button']} 
                />
            </form>
        </Container>
    );
};

export default RegisterPage;