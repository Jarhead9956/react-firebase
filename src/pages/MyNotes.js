import React, {useState} from "react";
import Note from "../components/Note";
import Container from "../layout/Container";
import AddNoteForm from "../components/AddNoteForm";

import styles from "./MyNotes.module.css";

const MyNotes = ({notes}) => {
    const [showAddNoteBtn, setShowAddNote] = useState(false);

    const showAddNoteBtnHandler = () => {
        setShowAddNote(true);
    };

    const hideAddNoteBtnHandler = () => {
        setShowAddNote(false);
    };

    return(
        <Container>
            <div className={styles["new-note"]}>
                {!showAddNoteBtn && 
                    <h3 className={styles["new-btn"]} onClick={showAddNoteBtnHandler}>
                        + Add new note.
                    </h3>
                }
                {showAddNoteBtn && 
                    <AddNoteForm 
                        title = 'Note title'
                        textArea = 'Message'
                        type = 'text'
                        row = '10'
                        onHideAddNoteBtn = {hideAddNoteBtnHandler}
                    />
                }
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