import { useState } from "react";

import NoteContext from "./noteContext";
// import { useState } from "react";

const NoteState =(props) =>{
    const notesInitial= [
        {
          "_id": "613fbfcb9b824e872041b7eac",
          "user": "63fbcfe726c044dd4c9fb75c",
          "title": "My Title ",
          "description": "Please wake up early",
          "tag": "personal",
          "date": "2023-02-27T00:43:37.690Z",
          "__v": 0
        },
        {
          "_id": "631fbfd2fb824e872041b7eb3",
          "user": "63fbcfe726c044dd4c9fb75c",
          "title": "My Title ",
          "description": "Please wake up early",
          "tag": "personal",
          "date": "2023-02-27T00:45:35.635Z",
          "__v": 0
        },
        {
          "_id": "63f1bfd2fb824e872041b7eb3",
          "user": "63fbcfe726c044dd4c9fb75c",
          "title": "My Title ",
          "description": "Please wake up early",
          "tag": "personal",
          "date": "2023-02-27T00:45:35.635Z",
          "__v": 0
        },
        {
          "_id": "63fb1fd2fb824e872041b7eb3",
          "user": "63fbcfe726c044dd4c9fb75c",
          "title": "My Title ",
          "description": "Please wake up early",
          "tag": "personal",
          "date": "2023-02-27T00:45:35.635Z",
          "__v": 0
        },
        {
          "_id": "63fbfd21fb824e872041b7eb3",
          "user": "63fbcfe726c044dd4c9fb75c",
          "title": "My Title ",
          "description": "Please wake up early",
          "tag": "personal",
          "date": "2023-02-27T00:45:35.635Z",
          "__v": 0
        },
        {
          "_id": "63fbfd2fb824e8720141b71eb3",
          "user": "63fbcfe726c044dd4c9fb75c",
          "title": "My Title ",
          "description": "Please wake up early",
          "tag": "personal",
          "date": "2023-02-27T00:45:35.635Z",
          "__v": 0
        },
        {
          "_id": "63fbfd2fb8124e872041b7eb3",
          "user": "63fbcfe726c044dd4c9fb75c",
          "title": "My Title ",
          "description": "Please wake up early",
          "tag": "personal",
          "date": "2023-02-27T00:45:35.635Z",
          "__v": 0
        }
      ]

    const [notes,setNotes] = useState(notesInitial)

    // Add a Note
    const addNote = (title,description,tag)=>{
        // TODO : API Call
        console.log("Adding a new note")
    const note={
            "_id": "63fbfd2fb8124e872041b7eb3",
            "user": "63fbcfe726c044dd4c9fb75c",
            "title": title,
            "description": description,
            "tag": tag,
            "date": "2023-02-27T00:45:35.635Z",
            "__v": 0
          };
        setNotes(notes.concat(note))
    }

    // Delete a Note
    const deleteNote = (id)=>{
        // TODO : API Call

        console.log("deleting the note with ur Id!!" + id)
        const newNotes= notes.filter((note)=>{return note._id!==id})
        setNotes(newNotes)

    }


    // Edit a Note
    const editNote = (id,title,description,tag)=>{

    }

    return (
        <NoteContext.Provider value={{notes,addNote,deleteNote,editNote}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;