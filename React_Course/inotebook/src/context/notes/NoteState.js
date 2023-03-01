import { useState } from "react";

import NoteContext from "./noteContext";
// import { useState } from "react";

const NoteState =(props) =>{
    const host= "http://localhost:5010"
    const notesInitial= []

    const [notes,setNotes] = useState(notesInitial)

     // Gett all Note
     const getNotes = async ()=>{
        
        // API CALL
        const response = await fetch(`${host}/api/notes/fetchallnotes`, {
            method: "GET", 
            
            headers: {
              "Content-Type": "application/json",
              "auth-token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjNmYmNmZTcyNmMwNDRkZDRjOWZiNzVjIn0sImlhdCI6MTY3NzQ0ODM4MH0._5bjDPd9qW4LYaWFyEw4IFEkfLT8Cjl2f0S2DZIBqsQ"
              
            },
            
          });
          const json =await response.json()
          console.log(json)
          setNotes(json)
    }


    // Add a Note
    const addNote = async (title,description,tag)=>{
        // TODO : API Call
        // API CALL
        const response = await fetch(`${host}/api/notes/addnote`, {
            method: "POST", 
            
            headers: {
              "Content-Type": "application/json",
              "auth-token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjNmYmNmZTcyNmMwNDRkZDRjOWZiNzVjIn0sImlhdCI6MTY3NzQ0ODM4MH0._5bjDPd9qW4LYaWFyEw4IFEkfLT8Cjl2f0S2DZIBqsQ"
              
            },
            body: JSON.stringify({title,description,tag})
          });
          
          const json = await response.json();
          console.log(json);



        console.log("Adding a new note")
    const note={
            "_id": "63fbfd2fb8124e872041b7eb3",
            "user": "63fbcfe726c044dd4c9fb75c",
            "title": "title",
            "description": "description",
            "tag": "tag",
            "date": "2023-02-27T00:45:35.635Z",
            "__v": 0
          };
        setNotes(notes.concat(note))
    }

    // Delete a Note
    const deleteNote = async (id)=>{
        // API Call
        
        const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
            method: "DELETE", 
            
            headers: {
              "Content-Type": "application/json",
              "auth-token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjNmYmNmZTcyNmMwNDRkZDRjOWZiNzVjIn0sImlhdCI6MTY3NzQ0ODM4MH0._5bjDPd9qW4LYaWFyEw4IFEkfLT8Cjl2f0S2DZIBqsQ"
              
            },
         
          });
          const json = await response.json(); 
          console.log(json);
        console.log("deleting the note with ur Id!!" + id);
        const newNotes= notes.filter((note)=>{return note._id!==id})
        setNotes(newNotes)

    }


    // Edit a Note
    const editNote = async (id,title,description,tag)=>{
        // API CALL
        const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
            method: "PUT", 
            
            headers: {
              "Content-Type": "application/json",
              "auth-token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjNmYmNmZTcyNmMwNDRkZDRjOWZiNzVjIn0sImlhdCI6MTY3NzQ0ODM4MH0._5bjDPd9qW4LYaWFyEw4IFEkfLT8Cjl2f0S2DZIBqsQ"
              
            },
            body: JSON.stringify({title,description,tag}),
          });
          const json = response.json(); 
          console.log(json);

          let newNotes = JSON.parse(JSON.stringify(notes))
        // Login to edit in client
        for (let index = 0; index < newNotes.length; index++) {
            const element = newNotes[index];

            if (element._id===id) {
                newNotes[index].title=title;
                newNotes[index].description=description;
                newNotes[index].tag=tag;
                break;
            }
            
            
        }
        setNotes(newNotes);

    }

    return (
        <NoteContext.Provider value={{notes,addNote,deleteNote,editNote,getNotes}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;