import React from "react";
import { useParams } from 'react-router-dom';

const NoteDetails = () => {
    const params = useParams();

    return(
        <div>
            <h1>Note Details</h1>
            <p>{params.noteId}</p>
        </div>
    )
};

export default NoteDetails;