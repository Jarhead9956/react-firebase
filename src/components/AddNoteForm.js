import React, {useState} from "react";

import Button from "./Button";

import styles from './AddNoteForm.module.css';

const AddNoteForm = (props) => {
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredMessage, setEnteredMessage] = useState('');
    
    const enteredTitlehandler = (event) => {
        setEnteredTitle(event.target.value)
        console.log(event.target.value)
    };
    const enteredMessageHandler = (event) => {
        setEnteredMessage(event.target.value)
        console.log(event.target.value)
    };

    return (
        <form className={styles.form}>
            <div className={styles.title}>
                <label>{props.title}</label>
                <input
                    placeholder="Add title..."
                    type={props.type}
                    value={enteredTitle}
                    onChange={enteredTitlehandler}
                />
            </div>
            <div className={styles.message}>
                <label>{props.textArea}</label>
                <textarea 
                    placeholder="Note text..."
                    rows= {Number(props.row)}
                    type={props.type}
                    value={enteredMessage}
                    onChange={enteredMessageHandler}
                />
            </div>
            <div className={styles.controls}>
                <Button 
                    onClickBtn= {props.onHideAddNoteBtn}
                    title= 'Cancel'
                    type= 'button'
                    className={styles["cancel-btn"]}
                />
                <Button 
                    title= 'Add note'
                    className={styles["add-btn"]}
                />
            </div>
        </form>
    )
};

export default AddNoteForm;