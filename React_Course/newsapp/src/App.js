
import './App.css';

import React, { Component } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';

// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
// } from "react-router-dom";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

export default class App extends Component {
  
  render() {
    return (
      <div>
        <Router>
        <NavBar/>
        

        <Routes>
          {/* <Route path="/"><News pageSize={5} country="in" category="general" /></Route>
          <Route path="/general"><News pageSize={5} country="in" category="general" /></Route>
          <Route path="/business"><News pageSize={5} country="in" category="business" /></Route>
          <Route path="/entertainment"><News pageSize={5} country="in" category="entertainment" /></Route>
          <Route path="/health"><News pageSize={5} country="in" category="health" /></Route>
          <Route path="/science"><News pageSize={5} country="in" category="science" /></Route>
          <Route path="/sports"><News pageSize={5} country="in" category="sports" /></Route> */}

          <Route path='/' element={<News pageSize={12} country='us' category='general' />}></Route>
            <Route path='/business' element={<News pageSize={12} country='us' category='business' />}></Route>
            <Route path='/entertainment' element={<News pageSize={12} country='us' category='entertainment' />}></Route>
            <Route path='/health' element={<News pageSize={12} country='us' category='health' />}></Route>
            <Route path='/science' element={<News  pageSize={12} country='us' category='science' />}></Route>
            <Route path='/sports' element={<News  pageSize={12} country='us' category='sports' />}></Route>
            <Route path='/technology' element={<News  pageSize={12} country='us' category='technology' />}></Route>
          
        </Routes>

        </Router>
        
      </div>
    )
  }
}

