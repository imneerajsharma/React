import { useState } from "react";

import NoteContext from "./noteContext";
// import { useState } from "react";

const NoteState =(props) =>{
    const s1= {
        "name": "Neeraj",
        "class": "6b"
    }

    const[state, setState]= useState(s1);
    const update =()=> {
        setTimeout(()=>{
            setState({
                "name": "Rahul",
                "class": "9b"
            },)
        },1000)
    }
    return (
        <NoteContext.Provider value={{state,update}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;