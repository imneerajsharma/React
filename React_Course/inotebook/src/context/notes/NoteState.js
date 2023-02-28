import { useState } from "react";

import NoteContext from "./noteContext";
// import { useState } from "react";

const NoteState =(props) =>{
    const notesInitial= [
        {
          "_id": "63fbfcb9b824e872041b7eac",
          "user": "63fbcfe726c044dd4c9fb75c",
          "title": "My Title ",
          "description": "Please wake up early",
          "tag": "personal",
          "date": "2023-02-27T00:43:37.690Z",
          "__v": 0
        },
        {
          "_id": "63fbfd2fb824e872041b7eb3",
          "user": "63fbcfe726c044dd4c9fb75c",
          "title": "My Title ",
          "description": "Please wake up early",
          "tag": "personal",
          "date": "2023-02-27T00:45:35.635Z",
          "__v": 0
        },
        {
          "_id": "63fbfd2fb824e872041b7eb3",
          "user": "63fbcfe726c044dd4c9fb75c",
          "title": "My Title ",
          "description": "Please wake up early",
          "tag": "personal",
          "date": "2023-02-27T00:45:35.635Z",
          "__v": 0
        },
        {
          "_id": "63fbfd2fb824e872041b7eb3",
          "user": "63fbcfe726c044dd4c9fb75c",
          "title": "My Title ",
          "description": "Please wake up early",
          "tag": "personal",
          "date": "2023-02-27T00:45:35.635Z",
          "__v": 0
        },
        {
          "_id": "63fbfd2fb824e872041b7eb3",
          "user": "63fbcfe726c044dd4c9fb75c",
          "title": "My Title ",
          "description": "Please wake up early",
          "tag": "personal",
          "date": "2023-02-27T00:45:35.635Z",
          "__v": 0
        },
        {
          "_id": "63fbfd2fb824e872041b7eb3",
          "user": "63fbcfe726c044dd4c9fb75c",
          "title": "My Title ",
          "description": "Please wake up early",
          "tag": "personal",
          "date": "2023-02-27T00:45:35.635Z",
          "__v": 0
        },
        {
          "_id": "63fbfd2fb824e872041b7eb3",
          "user": "63fbcfe726c044dd4c9fb75c",
          "title": "My Title ",
          "description": "Please wake up early",
          "tag": "personal",
          "date": "2023-02-27T00:45:35.635Z",
          "__v": 0
        }
      ]

    const [notes,setNotes] = useState(notesInitial)

    return (
        <NoteContext.Provider value={{notes,setNotes}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;