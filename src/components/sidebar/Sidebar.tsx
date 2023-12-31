import React from 'react'
import "./Sidebar.scss"
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AddIcon from '@mui/icons-material/Add';
import SidebarChannel from './SidebarChannel';
import SidebarFooter from './SidebarFooter';

const Sidebar = () => {
  return (
    <div className='sidebar'>
      {/* {sidebarLeft} */}
      <div className='sidebarLeft'>
        <div className='serverIcon'>
          <img src='./discordicon.png' alt='' />
        </div>
        <div className='serverIcon'>
          <img src='./logo192.png' alt='' />
        </div>
      </div>

      {/* {sidebarRight} */}
      <div className='sidebarRight'>
        <div className='sidebarTop'>
          <h3>Discord</h3>
          <ExpandMoreIcon />
        </div>

        {/* sidebarChanneles */}
        <div className='sidebarChannels'>
          <div className='sidebarChannelsHeader'>
            <div className='sidebarHeader'>
              <ExpandMoreIcon />
              <h4>Reactチャンネル</h4>
            </div>
            <AddIcon className='sidebarAddIcon'/>
          </div>

          <div className='sidebarChannelList'>
            <SidebarChannel />
            <SidebarChannel />
          </div>

          <SidebarFooter />
        </div>
      </div>
    </div>
  )
}

export default Sidebar
