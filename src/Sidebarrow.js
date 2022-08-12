import { Avatar } from '@mui/material'
import React from 'react'

function Sidebarrow({title,src,Icon}) {
  return (
    <div className="sidebar__row">
    {src && <Avatar src={src}/>}
    {Icon && <Icon/>}
    
    <h4>{title}</h4></div>
  )
}

export default Sidebarrow