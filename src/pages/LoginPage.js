import React from "react";

import Container from "../layout/Container";
import LoginForm from "../components/LoginForm";


import styles from './LoginPage.module.css';

const LoginPage = () => {
    return (
        <Container className={styles.container}>
            <h2 className={styles['page-title']}>Log in</h2>
            <LoginForm />
        </Container>
    );
};

export default LoginPage;