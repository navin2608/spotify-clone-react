
import './App.css';
import Login from './Login.js';
import React,{useState,useEffect} from "react";
import {getTokenFromUrl} from './spotify';
import SpotifyWebApi from "spotify-web-api-js";
import Player from './Player';
import { useDataLayerValue } from './Datalayer.js';
const spotify= new SpotifyWebApi();
function App() {
  //const [token,setToken]=useState(null);
  const[{user,token},dispatch]=useDataLayerValue();
  //Run code based on a given condition
 useEffect(()=>{
    const hash=getTokenFromUrl();
    window.location.hash="";
    const _token=hash.access_token;
    if(_token){
      //setToken(_token);
      dispatch({
        type:"SET_TOKEN",
        token: _token,
      });
      spotify.setAccessToken(_token);
      spotify.getMe().then(user=>{
        console.log('😊',user);
        dispatch({
          type:'SET_USER',
          user:user
        })
      })
    }
  },[token]);
  return (
    <div className="app">
      {
        token?<Player />:<Login />
      }  
    </div>
  );
}
export default App;
