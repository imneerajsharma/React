//import logo from './logo.svg';
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import React, { useState} from 'react';
import TextForm from './components/TextForm';

// import TextForm from './components/TextForm';


function App() {
  const [mode, setMode] = useState('light'); //Whether Dark mode is enabled or not
  
  const toggleMode=()=>{
    if(mode==='light'){
    setMode('dark');
    document.body.style.backgroundColor='#424344'
  }
  else {
    setMode('light');
    document.body.style.backgroundColor='white'
  }
}

  return (
          <>
              
            {/* <Navbar title="TextUtils" aboutText="About TEXT" mode={mode}/> */}
            <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
            <div className="container my-3">
              <TextForm heading="Enter your text to analyze below" mode={mode}/>
              {/* <About/> */}
            </div>

              
          
          </>
              

  );
}

export default App;
