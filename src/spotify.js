export const authEndpoint="https://accounts.spotify.com/authorize";
const redirectURI="http://localhost:3000/";
const clientId="ea233ed80c294199ae6a55e844bac399";

const scopes=[
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read",
    "user-modify-playback-state",
    "user-read-playback-state"
];

export const loginUrl=`${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectURI}&scope=${scopes.join('%20')}&response_type=token&show_dialog=true`;

export const getTokenFromUrl=()=>{
    var  initial={};
    window.location.hash.substring(1).split('&').forEach(function(value){
        initial[value.split('=')[0]]=value.split('=')[1];
    })
    return initial;
}
