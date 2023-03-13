import React, {useState, useEffect} from "react";
import {collection, getDocs, addDoc, deleteDoc, doc} from 'firebase/firestore';
import {db} from '../firebase-config';

import Note from "../components/Note";
import Container from "../layout/Container";
import AddNoteForm from "../components/AddNoteForm";

import styles from "./MyNotes.module.css";

const MyNotes = (props) => {
    const [showAddNoteBtn, setShowAddNote] = useState(false);
    const [notes, setNotes] = useState([]);
    const notesCollectioRef = collection(db, 'notes')

    useEffect(() => {
        const getNotes = async () => {
          const data = await getDocs(notesCollectioRef);
          setNotes(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
        };
    
        getNotes()
    }, []);

    const createNoteHandler = async (newNote) => {
        await addDoc(notesCollectioRef, newNote);
        const data = await getDocs(notesCollectioRef);
        setNotes(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
    };
    
    const deleteNoteHandler = async (id) => {
        const noteDoc = doc(db, 'notes', id);
        await deleteDoc(noteDoc);
    
        const newNotes = notes.filter(note => note.id !== id)
        setNotes(newNotes)
        console.log(newNotes)
    };

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
                        onCreateNote= {createNoteHandler}
                    />
                }
            </div>
            <div className={styles["all-notes"]}>
                {notes.map((note) => <Note
                    key={note.id}
                    content={note}
                    onDeleteNote= {deleteNoteHandler} 
                />
                )}
            </div>
        </Container>
    )
};

export default MyNotes;