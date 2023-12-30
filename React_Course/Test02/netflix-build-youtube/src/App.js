import React,{ useEffect } from 'react';
import './App.css';
import HomeScreen from "./screens/HomeScreen";
import LoginScreen from './screens/LoginScreen';
import ProfileScreen from './screens/ProfileScreen';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import { auth } from './firebase';
import { useDispatch, useSelector } from 'react-redux';
import {login,logout,selectUser } from './features/userSlice';



function App() {
  const user=useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(()=> {
    const unsubscribe = auth.onAuthStateChanged(userAuth => {
      if(userAuth){
        //Logged in
        console.log(userAuth);
        dispatch(
          login({
            uid: userAuth.uid,
            email:userAuth.email,
          })
        )
      }
      else{
        //Logged out
        dispatch(logout());
      }
    });
    return unsubscribe;

  },[dispatch])
  return (
    <div className="app">
        <Router>
          {!user?(<LoginScreen/>):(
            <Routes>          
            <Route 
            exact path="/profile" element={<ProfileScreen />} >
            </Route>
            <Route 
            exact path="/" element={<HomeScreen />} >
            </Route>
            <Route 
            exact path="/hi" element={<h1>HI my namefsdrftgyjhukjgfhjk</h1>}
            >
            </Route>
          </Routes>
          )}
        

    </Router>

    </div>
  );
}

export default App;