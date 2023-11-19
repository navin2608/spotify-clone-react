
import './App.css';
import Login from './Login.js';
import React,{useState,useEffect} from "react";
import {getTokenFromUrl} from './spotify';
function App() {
  const [token,setToken]=useState(null);
  //Run code based on a given condition
 useEffect(()=>{
    const hash=getTokenFromUrl();
    console.log(hash);
    window.location.hash="";
    const _token=hash.access_token;
    if(_token){
      setToken(_token);
    }
    console.log('i have:  ',token);
  },[token]);
  return (
    <div className="App">
      {
        token?(<h1>logged in </h1>):<Login />
      }
      
    </div>
  );
}
export default App;
