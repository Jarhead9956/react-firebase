import React from "react";
import Note from "../components/Note";
import Container from "../layout/Container";

import styles from "./MyNotes.module.css";

const MyNotes = ({notes}) => {
    return(
        <Container>
            <div className={styles["new-note"]}>
                <h3 className={styles["new-btn"]}>+ Add new note.</h3>
            </div>
            <div className={styles["all-notes"]}>
                {notes.map((note) => <Note
                    key={note.id}
                    content={note} 
                />
                )}
            </div>
        </Container>
    )
};

export default MyNotes;