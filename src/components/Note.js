import React from "react";

import Button from "./Button";

import styles from "./Note.module.css";

const Note = ({content}) => {
    let shortText = content.text.substring(0, 50) + "...";

    return(
        <div className={styles["note-container"]}>
            <h2>{content.title}</h2>
            <p>{shortText}</p>
            <div className={styles.controls}>
                <Button 
                    title='Edit'
                    className={styles.edit}
                />
                <Button 
                    title='Delete'
                    className={styles.delete}
                />
            </div>
        </div>
    );
};

export default Note;