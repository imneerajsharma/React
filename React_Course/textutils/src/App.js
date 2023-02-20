//import logo from './logo.svg';
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import React, { useState} from 'react';
import TextForm from './components/TextForm';
import Alert from './components/Alert';

// import TextForm from './components/TextForm';


function App() {
  const [mode, setMode] = useState('light'); //Whether Dark mode is enabled or not
  const [alert, setAlert] = useState(null);

  const showAlert=(message,type) =>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(()=>{
      setAlert(null);
    },1500);
  }
  
  const toggleMode=()=>{
    if(mode==='light'){
    setMode('dark');
    document.body.style.backgroundColor='#424344';
    showAlert(" Dark mode has been enabled", "success");
  }
  else {
    setMode('light');
    document.body.style.backgroundColor='white';
    showAlert(" Light mode has been enabled", "success");
  }
}

  return (
          <>
              
            {/* <Navbar title="TextUtils" aboutText="About TEXT" mode={mode}/> */}
            <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
            <Alert alert={alert}/>
            {/* <Alert alert="this is an Alert"/> */}
            <div className="container my-3">
              <TextForm showAlert={showAlert} heading="Enter your text to analyze below" mode={mode}/>
              {/* <About/> */}
            </div>

              
          
          </>
              

  );
}

export default App;
