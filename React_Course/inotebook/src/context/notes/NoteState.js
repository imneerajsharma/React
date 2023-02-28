import { useState } from "react";

import NoteContext from "./noteContext";
// import { useState } from "react";

const NoteState =(props) =>{
    const s1= {
        "name": "Neeraj",
        "class": "6b"
    }

   
    return (
        <NoteContext.Provider value={{}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;