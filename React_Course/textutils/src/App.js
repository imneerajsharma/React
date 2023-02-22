//import logo from './logo.svg';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import React, { useState} from 'react';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
// import logo from './components/logo.png';

// import React from "react";



// import {
//   // createBrowserRouter,
//   // RouterProvider,
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


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
            {/* <Router>
                <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
                <Alert alert={alert}/>
                <div className="container my-3">
                <Routes>
                      <Route path="/about">
                        <About />
                      </Route>                    
                      <Route path="/">
                      <TextForm showAlert={showAlert} heading="Enter your text to analyze below" mode={mode}/>
                      </Route>
                </Routes>           
                </div>
            </Router> */}
            
            <Router>
            
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <Alert alert={alert} />
        <div className="container mt-3">

          <Routes>
            <Route exact path="/about" element={<About  mode={mode} />}> </Route>
            <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Try TextUtils - Word counter , Character Counter Remove extra Spaces" mode={mode} />}></Route>
          </Routes>
        </div>
      </Router>
              
          
          </>
              

  );
}

export default App;
