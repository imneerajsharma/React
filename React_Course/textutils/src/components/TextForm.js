import React, {useState} from 'react'

export default function TextForm(props) {
    

    const handleUpClick =() =>{
        // console.log("Uppercase was Clicked" +text);
        let newText=text.toUpperCase();
        setText(newText);
        props.showAlert(" Converted to Upper Case!", "success")
        
    }
    const handleLoClick =() =>{
        
        let newText=text.toLowerCase();
        setText(newText);
        props.showAlert(" Converted to Lower Case", "success")
    }
    const handleClearClick =() =>{
        let newText='';
        setText(newText);
        props.showAlert(" Text cleared!", "success")
    }
    const handleCopyClick =() =>{
        const textToCopy = text;
        navigator.clipboard.writeText(textToCopy)
        .then(() => {
        console.log('Text copied to clipboard');
         })
        .catch((err) => {
        console.error('Error copying text: ', err);
        });

        props.showAlert(" Text copied to clipboard!", "success")
    }
    const handleRemoveExtraSpacesClick =() =>{
        let newText=text.replace(/\s+/g,' ').trim();
        setText(newText);
        props.showAlert(" Extra space removed!", "success")
    }





    const handleOnChange =(event) =>{
        // console.log(" handleOnChange ");
        setText(event.target.value)
    }

    const[text,setText]=useState('');
    // text = "new text"; // Wrong way to change the state
    // setText("new text"); // Correct way to change the state


  return (
    <>
    <div className="container" style={{color:props.mode==='dark'?'white':'black'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
        
        <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'black'}}id="myBox" rows="8"></textarea>
       
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to UpperCase</button>
        <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to LowerCase</button>
        <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear</button>
        <button className="btn btn-primary mx-2" onClick={handleCopyClick}>Copy Text</button>
        <button className="btn btn-primary mx-2" onClick={handleRemoveExtraSpacesClick}>Remove Extra Spaces</button>
        
        
    </div>
    <div className="container my-3 " style={{color:props.mode==='dark'?'white':'black'}}>
        <h2>Your Text Summary</h2>
        <p>{text.split(" ").length} Words and {text.length} Characters</p>
        <p>{0.008*text.split(" ").length} Minutes to ReadWords</p>
        <h2>Preview</h2>
        {/* <p>{text}</p> */}
        <p>{text.length>0?text:"Enter something in the textbox above to preview it here"}</p>
    </div>

    
    </>
    

  )
}
