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
        // document.getSelection().removeAllRanges();

        props.showAlert(" Text copied to clipboard!", "success")
    }
    const handleRemoveExtraSpacesClick =() =>{
        let newText=text.replace(/\s+/g,' ').trim();
        setText(newText);
        props.showAlert(" Extra space removed!", "success")
    }
    const handleSentenceCountClick = () => {
        let sentenceCount = 0;
        if (text) {
          sentenceCount = text.split(/[.?!]/).length - 1;
        }
        props.showAlert(`Number of sentences: ${sentenceCount}`, 'success');
      }

    //   const handleSearchReplaceClick = () => {
    //     const searchWord = prompt('Enter the word to search:');
    //     const replaceWord = prompt(`Enter the word to replace "${searchWord}" with:`);
    //     if (searchWord && replaceWord) {
    //       let newText = text.replaceAll(searchWord, replaceWord);
    //       setText(newText);
    //       props.showAlert(`"${searchWord}" replaced with "${replaceWord}"`, 'success');
    //     }
    //   };
    const handleSearchReplaceClick = () => {
        const searchWord = prompt('Enter the word to search:');
        const replaceWord = prompt(`Enter the word to replace "${searchWord}" with:`);
        if (searchWord && replaceWord) {
          if (text.includes(searchWord)) {
            let newText = text.replaceAll(searchWord, replaceWord);
            setText(newText);
            props.showAlert(`"${searchWord}" replaced with "${replaceWord}"`, 'success');
          } else {
            props.showAlert(`"${searchWord}" does not exist in the text.`, 'danger');
          }
        }
      };
      

      const handleCapitalizeClick = () => {
        let newText = text.toLowerCase().split(' ').map((word) => {
          return word.charAt(0).toUpperCase() + word.slice(1);
        }).join(' ');
        setText(newText);
        props.showAlert(' Capitalized the first letter of each word!', 'success');
      };
    
      const handleCamelCaseClick = () => {
        let newText = text.toLowerCase().split(' ').map((word, index) => {
          if (index === 0) {
            return word;
          }
          return word.charAt(0).toUpperCase() + word.slice(1);
        }).join('');
        setText(newText);
        props.showAlert(' Converted to camelCase!', 'success');
      };
    
      const handleReverseClick = () => {
        let newText = text.split('').reverse().join('');
        setText(newText);
        props.showAlert(' Text reversed!', 'success');
      };
    
      const handleDownloadClick = () => {
        const element = document.createElement('a');
        const file = new Blob([text], {type: 'text/plain'});
        element.href = URL.createObjectURL(file);
        element.download = 'text.txt';
        document.body.appendChild(element);
        element.click();
        document.body.removeChild(element);
        props.showAlert(' Text downloaded!', 'success');
      };

      
    




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
        <h1 className='mb-4'>{props.heading}</h1>
        <div className="mb-3">
        
        <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'black'}}id="myBox" rows="8"></textarea>
       
        </div>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleUpClick}>Convert to UpperCase</button>
        <button  disabled={text.length===0}  className="btn btn-primary mx-2 my-1" onClick={handleLoClick}>Convert to LowerCase</button>
        <button  disabled={text.length===0}  className="btn btn-primary mx-2 my-1" onClick={handleClearClick}>Clear</button>
        <button  disabled={text.length===0}  className="btn btn-primary mx-2 my-1" onClick={handleCopyClick}>Copy Text</button>
        <button  disabled={text.length===0}  className="btn btn-primary mx-2 my-1" onClick={handleRemoveExtraSpacesClick}>Remove Extra Spaces</button>
        <button  disabled={text.length===0}  className="btn btn-primary mx-2 my-1" onClick={handleSentenceCountClick}>Count Sentences</button>
        <button  disabled={text.length===0}  className="btn btn-primary mx-2 my-1" onClick={handleSearchReplaceClick}>Replace Word</button>
        <button  disabled={text.length===0}  className="btn btn-primary mx-2 my-1" onClick={handleCapitalizeClick}>Capitalized</button>
        <button  disabled={text.length===0}  className="btn btn-primary mx-2 my-1" onClick={handleCamelCaseClick}>Camel Case</button>
        <button  disabled={text.length===0}  className="btn btn-primary mx-2 my-1" onClick={handleReverseClick}>Reverse</button>
        <button  disabled={text.length===0}  className="btn btn-primary mx-2 my-1" onClick={handleDownloadClick}>Download File</button>

        
        
    </div>
    <div className="container my-3 " style={{color:props.mode==='dark'?'white':'black'}}>
        <h2>Your Text Summary</h2>
        <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} Words and {text.length} Characters</p>
        <p>{0.008*text.split(/\s+/).filter((element)=>{return element.length!==0}).length} Minutes to ReadWords</p>
        <h2>Preview</h2>
        {/* <p>{text}</p> */}
        <p>{text.length>0?text:"Nothing to preview! "}</p>
    </div>

    
    </>
    

  )
}
