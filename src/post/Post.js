import React, { forwardRef } from 'react'
import './Post.css';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Badge from '@mui/material/Badge';
import avatar from '../images/small-avatar.png';
import InputOption from '../inputOption/InputOption';
import ThumbUpAltOutlinedIcon from '@mui/icons-material/ThumbUpAltOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import ShareIcon from '@mui/icons-material/Share';

const Post = forwardRef(({name, message, photoUrl}, ref) => {
  return (
    <div ref={ref} className="post">
        <div className='post__author'>
            <Box sx={{ color: 'action.active' }} className="friends__listAvatar">
                <Badge className="friends__listAvatarIcon" color="success" overlap="circular" variant="dot" anchorOrigin={{ vertical: 'bottom', horizontal: 'right', }}>
                    <Avatar src={photoUrl} sx={{ width: 40, height: 40 }} />
                </Badge>
            </Box>
            <div className='post__authorInfo'>
                <h4>{name}</h4>
                <h5>05. maj 2022</h5>
            </div>
        </div>
        <p className='post__description'>{message}</p>
        <div className='post__social'>
            <InputOption Icon={ThumbUpAltOutlinedIcon} title="Sviđa mi se" className="post__socialItem" />
            <InputOption Icon={ChatBubbleOutlineOutlinedIcon} title="Komentar" className="post__socialItem" />
            <InputOption Icon={ShareIcon} title="Podeli" className="post__socialItem" />
        </div>
    </div>
  )
})

export default Post