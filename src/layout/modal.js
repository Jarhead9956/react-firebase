import React, {Fragment} from "react";
import ReactDOM from "react-dom";

import Button from "../components/Button";

import styles from './modal.module.css';

const Backdrop = (props) => {
    return(
        <div className={styles.backdrop} onClick={props.onConfirm}></div>
    );
};

const ModalOverlay = (props) => {
    return(
        <div className={styles.overlay}>
            <h2>{props.title}</h2>
            <p>{props.message}</p>
            <div className={styles.options}>
                <Button
                    title='Cancel'
                    type='button'
                    className={styles["cancel-btn"]}
                    onClickBtn={props.onCancel}
                />
                <Button
                    title='Delete'
                    type='button'
                    className={styles["del-btn"]}
                    onClickBtn={props.onConfirm}
                />
            </div>
        </div>
    );
};

const Modal = (props) => {
    return(
        <Fragment>
            {ReactDOM.createPortal(
                <Backdrop onConfirm={props.onCancel} />,
                document.getElementById('backdrop-root')
            )}   
            {ReactDOM.createPortal(
                <ModalOverlay
                    title={props.title}
                    message={props.message}
                    onConfirm={props.onConfirm}
                    onCancel = {props.onCancel}
                />,
                document.getElementById('overlay-root')
            )}         
        </Fragment>
    )
};

export default Modal;
