import React from 'react';
import './Login.css';
import {loginUrl} from './spotify';
function Login(){
    return(
        <div className='login'>
            <img src="https://i0.wp.com/musically.com/wp-content/uploads/2023/05/spotify-logo.jpg?fit=2362%2C1500&ssl=1" alt="spotify logo"></img>
            <a href={loginUrl}>LOGIN WITH SPOTIFY</a>
        </div>
    )
}
export default Login