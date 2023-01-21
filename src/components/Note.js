import React from "react";

import Button from "./Button";

import styles from "./Note.module.css";

const Note = (props) => {
    let shortText = props.content.text.substring(0, 50) + "...";

    return(
        <div className={styles["note-container"]}>
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
                    onClickBtn= { () => props.onDeleteNote(props.content.id)}
                />
            </div>
        </div>
    );
};

export default Note;