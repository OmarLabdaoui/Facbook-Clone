import React, { useState } from 'react'
import { Avatar } from '@mui/material'
import VideocamIcon from '@mui/icons-material/Videocam';
import PhotoLibraryIcon from '@mui/icons-material/PhotoLibrary';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import { useStateValue } from './StateProvider';
import db from './firebase'

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
function MessageSender() {
  const [{ user }, dispatch] = useStateValue()
  const [input,setInput]=useState("");
  const [imageurl,setImageurl]=useState("");
   const handlsubmit=(e)=>{
 e.preventDefault()
 db.collection('posts').add({
  message: input,
  timestamp: firebase.firestore.FieldValue.serverTimestamp(),
  profilePic: user.photoURL,
  username: user.displayName,
  image: imageurl
})
 setInput("")
 setImageurl("")
    }
  return (
    <div className="messagesender">
    <div className="Header__top">
    <Avatar src={user.photoURL} />
    
    <form>
    <input  className="messagesender__input" placeholder={`What is in Your Mind ${user.displayName} ?`}  value={input} onChange={(e)=>setInput(e.target.value)}/>
    <input placeholder="image (url)" value={imageurl} onChange={(e)=>setImageurl(e.target.value)}/>
    <button className="" type="submit" onClick={handlsubmit}>hidden submit</button>
    </form>
    </div>
    <div className="Header__bottom">
    <div className="messagesender__option">
    <VideocamIcon style={{color:"red"}}/>
    <h3>Live Video</h3>
    </div>
    <div className="messagesender__option">
    <PhotoLibraryIcon style={{color:"green"}}/>
    <h3>Photos/Video</h3>
    </div>
    <div className="messagesender__option">
    <InsertEmoticonIcon style={{color:"orange"}}/>
    <h3>Felling/Activity</h3>
    </div>
    </div>
    </div>
  )
}

export default MessageSender