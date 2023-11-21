import React from 'react'
import "./Body.css"
import Header from './Header.js';
import { useDataLayerValue } from './Datalayer.js';
import SongRow from './SongRow.js';
import { Favorite, MoreHoriz, PlayCircleFilled, PlayCircleFilledOutlined, PlayCircleFilledRounded } from '@mui/icons-material';
function Body({spotify}) {
  const [{discover_weekly},dispatch]=useDataLayerValue();
  return (
    <div className="body"> 
    <Header spotify={spotify}/>
    <div className="body__info">
      <img src={discover_weekly?.images[0].url} alt=""/>
      <div className="body__infoText">
      <strong>PLAYLIST</strong>
      <h2>Discover Weekly</h2>
      <p>{discover_weekly?.description}</p>
      </div>
    </div>
    <div className="body__songs">
    <div className="body__icons">
      <PlayCircleFilledRounded className="body__shuffle"/>
      <Favorite fontSize="large"/>
      <MoreHoriz/>
    </div>
    {discover_weekly?.tracks.items.map(item=>
      <SongRow track={item.track}/>)}
    </div>
    </div>
  )
}

export default Body