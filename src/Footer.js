import React from 'react'
import './Footer.css'
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import ShuffleIcon from '@mui/icons-material/Shuffle';
import RepeatIcon from '@mui/icons-material/Repeat';
import { PlaylistPlay, SkipPreviousOutlined } from '@mui/icons-material';
import VolumeDown from '@mui/icons-material/VolumeDown';
import VolumeUp from '@mui/icons-material/VolumeUp';
import Grid from '@mui/material/Grid';
import Slider from '@mui/material/Slider';
function Footer() {
  return (
    <div className="footer">
      <div className="footer__left">
          <img src="https://cdns-images.dzcdn.net/images/cover/ab6b800237e5fc15951f825f6bc4ca0e/264x264.jpg" alt="" class="footer__albumLogo"/>
          <div className="footer__songInfo">
            <h4>Yeah</h4>
            <p>User</p>
          </div>
      </div>
      <div className="footer__center">
        <ShuffleIcon className="footer__green"/>
        <SkipPreviousIcon className="footer__icon"/>
        <PlayCircleOutlineIcon className="footer__icon" fontSize="large"/>
        <SkipNextIcon className="footer__icon"/>
        <RepeatIcon className="footer__green"/>
      </div>
      <div className="footer__right">
        <Grid container spacing={2}>
          <Grid item>
            <PlaylistPlay/>
          </Grid>
          <Grid item>
            <VolumeDown/>
          </Grid>
          <Grid item xs>
            <Slider/>
          </Grid>
          <Grid item>
            <VolumeUp/>
          </Grid>
        </Grid>
      </div>
    </div>
  )
}
export default Footer