import React, {useState} from "react";

import Modal from "../layout/modal";
import Button from "./Button";

import styles from "./Note.module.css";

const Note = (props) => {
    const [showModal, setShowModal] = useState(false);
    let shortText = props.content.text.substring(0, 50) + "...";

    const showModalHandler = () => {
        setShowModal(true);
    };

    const hideModalHandler = () => {
        setShowModal(false);
    };

    return(
        <div className={styles["note-container"]}>
            {showModal && <Modal 
                title= 'Delete'
                message= 'Are you sure want to delete note?'
                onConfirm = { () => props.onDeleteNote(props.content.id) }
                onCancel = {hideModalHandler}
            />}
            <h2>{props.content.title}</h2>
            <p>{shortText}</p>
            <div className={styles.controls}>
                <Button 
                    title='Edit'
                    className={styles.edit}
                />
                <Button 
                    title='Delete'
                    className={styles.delete}
                    type= 'click'
                    onClickBtn= {showModalHandler }
                />
            </div>
        </div>
    );
};

export default Note;