import React from 'react'
import './Header.css';
import { SearchOutlined } from '@mui/icons-material';
import { Avatar } from '@mui/material';
import { useDataLayerValue } from './Datalayer';
function Header() {
    const [{user},dispatch]=useDataLayerValue();
  return (
    <div className='header'>
    <div className='header__left'>
        <SearchOutlined/>
        <input placeholder='Search for Artists, Songs, Albums' type='text'/>
    </div>
    <div className="header__right">
        <Avatar src={user?.images[0]?.url} alt="profile.png" />
        <h4>Navin Kumar</h4>
    </div>
    </div>
  )
}

export default Header