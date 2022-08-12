import { Avatar } from '@mui/material'
import React from 'react'
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import NearMeIcon from '@mui/icons-material/NearMe';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useStateValue } from './StateProvider'
function Post({profilpic,username,image,message,timestamp}) {
  const [{ user }, dispatch] = useStateValue()
  return (
    <div className="post">
    <div className="post__top">
    
    <Avatar src={user.photoURL}  className="post__avatar"/>
    <div className="post__topinfos">
    <h3>{username}</h3>
    <p>{new Date(timestamp?.toDate()).toUTCString()}</p>
    </div>
    </div>
    <div className="post__bottom">
    <p>{message}</p>
    </div>
    <div className="post__image">
   <img src={image} alt=""/>
    </div>
    <div className="post__options">
    <div className="post__option">
    <ThumbUpIcon/>
    <p>Like</p>
    </div>
    <div className="post__option">
    <ChatBubbleOutlineIcon/>
    <p>Comments</p>
    </div>
    <div className="post__option">
    <NearMeIcon/>
    <p>Share</p>
    </div>
    <div className="post__option">
    <AccountCircleIcon/>
    <ExpandMoreIcon/>
  
    </div>
    </div>
    </div>
  )
}

export default Post