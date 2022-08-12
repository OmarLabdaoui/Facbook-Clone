import React from 'react'
import Sidebarrow from './Sidebarrow'
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import EmojiFlagsIcon from '@mui/icons-material/EmojiFlags';
import PeopleIcon from '@mui/icons-material/People';
import ChatIcon from '@mui/icons-material/Chat';
import StoreIcon from '@mui/icons-material/Store';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useStateValue } from './StateProvider';
function Sidebar() {
  const [{ user }, dispatch] = useStateValue()
  return (
    <div className="sidebar">
    <Sidebarrow src={user.photoURL} title={user.displayName} />
   <Sidebarrow Icon ={LocalFireDepartmentIcon} title="COVID-19 Information Center"/>
   <Sidebarrow Icon ={EmojiFlagsIcon} title="Pages"/>
   <Sidebarrow Icon ={PeopleIcon} title="Friends"/>
   <Sidebarrow Icon ={ChatIcon} title="Messenger"/>
   <Sidebarrow Icon ={StoreIcon} title="MarketPlace"/>
   <Sidebarrow Icon ={VideoLibraryIcon} title="Video"/>
   <Sidebarrow Icon ={ExpandMoreIcon} title="MarketPlace"/>
  
   

    </div>
  )
}

export default Sidebar