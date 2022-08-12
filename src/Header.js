import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import FlagIcon from '@mui/icons-material/Flag';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import SupervisedUserCircleIcon from '@mui/icons-material/SupervisedUserCircle';
import StorefrontIcon from '@mui/icons-material/Storefront';
import { Avatar ,IconButton} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import ForumIcon from '@mui/icons-material/Forum';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useStateValue } from './StateProvider'

function Header() {
  const [{ user }, dispatch] = useStateValue()
  return (
    <div className="Header">
    <div className="Header__left">
    <img  src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/2021_Facebook_icon.svg/800px-2021_Facebook_icon.svg.png" alt="facbook image"/>
  <div className="inputsearch">
  <SearchIcon color="gray" size={18}/>
  <input type="search" placeholder="Recherche sur facbook"/>
  </div>
    </div>
    <div className="Header__center">
<div className="Header__option Header__option-active">
<HomeIcon fontSize="large"/>
</div>
<div className="Header__option">
<FlagIcon fontSize="large"/>
</div>
<div className="Header__option">
<SubscriptionsIcon fontSize="large"/>
</div>
<div className="Header__option">
<StorefrontIcon fontSize="large"/>
</div>
<div className="Header__option">
<SupervisedUserCircleIcon fontSize="large"/>
</div>

    </div>
    <div className="Header__right">
    <div className="Header__infos">
    <Avatar src={user.photoURL} />
    <h5>{user.displayName}</h5>
    </div>
    <IconButton>
    <AddIcon/>
    </IconButton>
    <IconButton>
    <ForumIcon/>
    </IconButton>
    <IconButton>
    <NotificationsIcon/>
    </IconButton>
    <IconButton>
    <ExpandMoreIcon/>
    </IconButton>
    </div>
    
    </div>
  )
}

export default Header