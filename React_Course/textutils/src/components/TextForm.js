import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick =() =>{
        // console.log("Uppercase was Clicked" +text);
        let newText=text.toUpperCase();
        setText(newText);
    }
    const handleLoClick =() =>{
        
        let newText=text.toLowerCase();
        setText(newText);
    }
    const handleClearClick =() =>{
        
        let newText=text.toLowerCase();
        setText(newText);
    }
    const handleOnChange =(event) =>{
        // console.log(" handleOnChange ");
        setText(event.target.value)
    }

    const[text,setText]=useState('Enter text here');
    // text = "new text"; // Wrong way to change the state
    // setText("new text"); // Correct way to change the state


  return (
    <>
    <div className="container">
        <h1>{props.heading}</h1>
        <div className="mb-3">
        
        <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
       
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to UpperCase</button>
        <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to LowerCase</button>
        <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear</button>
    </div>
    <div className="container my-3">
        <h2>Your Text Summary</h2>
        <p>{text.split(" ").length} Words and {text.length} Characters</p>
        <p>{0.008*text.split(" ").length} Minutes to ReadWords</p>
        <h2>Preview</h2>
        <p>{text}</p>
    </div>

    
    </>
    

  )
}
