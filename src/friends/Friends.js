import React from 'react'
import './Friends.css';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Badge from '@mui/material/Badge';
import avatar2 from '../images/avatar2.jpg';
import avatar3 from '../images/avatar3.jpg';
import avatar4 from '../images/avatar4.jpg';
import avatar5 from '../images/avatar5.jpg';
import avatar6 from '../images/avatar6.jpg';
import avatar7 from '../images/avatar7.jpg';
import avatar8 from '../images/avatar8.jpg';
import avatar9 from '../images/avatar9.jpg';
import avatar11 from '../images/avatar11.jpg';
import avatar12 from '../images/avatar12.jpg';
import sponsor1 from '../images/11.jpg';
import sponsor2 from '../images/12.jpg';
import VideoCallSharpIcon from '@mui/icons-material/VideoCallSharp';
import SearchSharpIcon from '@mui/icons-material/SearchSharp';
import MoreHorizSharpIcon from '@mui/icons-material/MoreHorizSharp';
import CakeIcon from '@mui/icons-material/Cake';

function Friends() {

  const inputFriend = (avatar, title) => (
    <Box sx={{ color: 'action.active' }} className="friends__listAvatar">
      <Badge className="friends__listAvatarIcon" color="success" overlap="circular" variant="dot" anchorOrigin={{ vertical: 'bottom', horizontal: 'right', }}>
        <Avatar src={avatar} sx={{ width: 35, height: 35 }} />
      </Badge>
      <span>{title}</span>
    </Box>
  )

  return (
    <div className='friends'>
        <div className='sponsors'>
          <h4>Sponzorisano</h4>
          <div className="sponsors__item">
            <img src={sponsor1} alt="" />
            <div className='sponsors__itemBox'>
              <h5>Best RPG Available Now On PC</h5>
              <span>plarium.com</span>
            </div>
          </div>
          <div className="sponsors__item">
            <img src={sponsor2} alt="" />
            <div className='sponsors__itemBox'>
              <h5>Switch to Pitch.</h5>
              <span>pitch.com</span>
            </div>
          </div>
        </div>
        <div className='birthdays'>
          <h4>Ro??endani</h4>
          <div className="birthdays__item">
            <CakeIcon sx={{ width: 35, height: 35 }} />
            <h5><strong>Tamara Peri??</strong> danas slavi ro??endan</h5>
          </div>
        </div>
        <div className='friends__list'>
          <div className='friends__listTitle'>
            <h4>Kontakti</h4>
            <VideoCallSharpIcon className="friends__listIcon" sx={{ width: 20, height: 20 }} />
            <SearchSharpIcon className="friends__listIcon" sx={{ width: 20, height: 20 }} />
            <MoreHorizSharpIcon className="friends__listIcon" sx={{ width: 20, height: 20 }} />
          </div>
          {inputFriend(avatar5, "Tamara Peri??")}
          {inputFriend(avatar2, "Nikola Radivojevi??")}
          {inputFriend(avatar3, "Radomir Terzi??")}
          {inputFriend(avatar4, "Ivana Gvozdenovi??")}
          {inputFriend(avatar6, "Dejan ??ivkovi??")}
          {inputFriend(avatar7, "David Josipovi??")}
          {inputFriend(avatar8, "Jelena Mladenovi??")}
          {inputFriend(avatar9, "Dragi?? Radivojevi??")}
          {inputFriend(avatar11, "Jelena Andri??")}
          {inputFriend(avatar12, "Tamara Peri??")}
          {inputFriend(avatar6, "Tamara Peri??")}
          {inputFriend(avatar2, "Tamara Peri??")}
          {inputFriend(avatar3, "Tamara Peri??")}
          {inputFriend(avatar4, "Tamara Peri??")}
        </div>
    </div>
  )
}

export default Friends