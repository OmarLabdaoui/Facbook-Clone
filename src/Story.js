import React from 'react'
import { Avatar } from '@mui/material'
function Story({title,image,profilesrc}) {
  return (
    <div className="story" style={{backgroundImage:`url(${image})`}}>
    {<Avatar src={profilesrc} className="story__avatar"/>}
    <h4>{title}</h4>
    </div>
  )
}

export default Story