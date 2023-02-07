import React, { useState, useEffect } from 'react';
import {collection, getDocs, addDoc, deleteDoc, doc} from 'firebase/firestore';
import {db} from './firebase-config';

import './App.css';
import Header from './components/Header';
import MyNotes from './pages/MyNotes';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';

function App() {
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
    // console.log(newNotes)
  };

  return (
    <div className="App">
      <Header/> 
      {/* <MyNotes 
        notes={notes}
        onCreateNote= {createNoteHandler} 
        onDeleteNote= {deleteNoteHandler}  
      />      */}
      {/* <RegisterPage /> */}
      <LoginPage />
    </div>
  );
}

export default App;
