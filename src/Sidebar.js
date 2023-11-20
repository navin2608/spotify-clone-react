import React from 'react'
import './Sidebar.css'
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import SidebarOption from './SidebarOption'
import { useDataLayerValue } from './Datalayer';
function Sidebar() {
    const [{playlists},dispatch]=useDataLayerValue()
  return (
    <div className="sidebar">
        <img src="https://i0.wp.com/musically.com/wp-content/uploads/2023/05/spotify-logo.jpg?fit=2362%2C1500&ssl=1" alt="spotify_logo.png" className ="sidebar__logo"/>
    <SidebarOption title="Home" Icon={HomeRoundedIcon}/>
    <SidebarOption title="Search" Icon={SearchRoundedIcon}/>
    <SidebarOption title="Your Library" Icon={LibraryBooksIcon}/>
    <br/>
    <strong className="sidebar__title">PLAYLISTS</strong>
    <hr/>
    {playlists?.items?.map(playlist=>(
      <SidebarOption title={playlist.name}/>
    ))}
    </div>
  )
}

export default Sidebar