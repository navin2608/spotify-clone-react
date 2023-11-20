import React from 'react'
import './Sidebar.css'

import SidebarOption from './SidebarOption'
function Sidebar() {
  return (
    <div className="sidebar">
        <img src="https://i0.wp.com/musically.com/wp-content/uploads/2023/05/spotify-logo.jpg?fit=2362%2C1500&ssl=1" alt="spotify_logo.png" className ="sidebar__logo"/>
    <SidebarOption title="Home"/>
    <SidebarOption title="Search"/>
    <SidebarOption title="Your Library"/>
    </div>
  )
}

export default Sidebar