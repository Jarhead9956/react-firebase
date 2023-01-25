import React, {useState} from "react";
import {db} from '../firebase-config';
import {collection, addDoc} from 'firebase/firestore';

import Button from "./Button";

import styles from './AddNoteForm.module.css';

const AddNoteForm = (props) => {
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredMessage, setEnteredMessage] = useState('');
    const noteCollectionRef = collection(db, 'notes');
    
    const enteredTitlehandler = (event) => {
        setEnteredTitle(event.target.value);
    };
    const enteredMessageHandler = (event) => {
        setEnteredMessage(event.target.value);
    };

    const createNote = (event) => {
        event.preventDefault();
        const newNote = {
            title: enteredTitle,
            text: enteredMessage
        };
        
        props.onCreateNote(newNote);
        
        setEnteredTitle('');
        setEnteredMessage('');
    };

    return (
        <form className={styles.form} onSubmit={createNote}>
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