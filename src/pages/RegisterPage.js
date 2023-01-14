import React, {useState} from "react";

import Container from "../layout/Container";
import RegisterForm from "../components/RegisterForm";

import styles from "./RegisterPage.module.css";

const RegisterPage = () => {
    return(
        <Container className={styles.container}>
            <h2 className={styles['page-title']}>Register</h2>
            <RegisterForm />
        </Container>
    );
};

export default RegisterPage;