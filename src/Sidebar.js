import React from 'react'
import "./Sidebar.css"
import {Avatar, IconButton} from "@material-ui/core"
import { DonutLarge } from '@material-ui/icons'
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SearchIcon from '@material-ui/icons/Search';
import SidebarChats from './SidebarChats';
// import SidebarChat from './SidebarChat'

function Sidebar() {

  // method to capture our message
  const AddNewChat =()=>{
    const chatname = prompt("Enter your message here")
    if(chatname){
      console.log(chatname)
    }
  }
  return (
    <div className="side-bar">
           <div className="sidebar-header">
               <Avatar/>
               <div className="header-right">
                  <IconButton>
                  <DonutLarge/>
                  </IconButton>
                  <IconButton>
                  <ChatIcon/>
                  </IconButton>
                  <IconButton>
                  <MoreVertIcon/>
                 </IconButton>
            </div>
           </div>

          <div className="sidebar-search">
            <div className="search-container">
              <SearchIcon/>
              <input type="text" placeholder="search or start new chat"/>
            </div>
          </div>

          <div className="sidebar-chats">
            <div onClick={AddNewChat} className="chat-head">
              <h2>Add new Chat</h2>
            </div>
            <SidebarChats/>
            <SidebarChats/>
            <SidebarChats/>
            <SidebarChats/>
            <SidebarChats/>
            <SidebarChats/>
            <SidebarChats/>
            <SidebarChats/>
            <SidebarChats/>
            <SidebarChats/>
            <SidebarChats/>
            <SidebarChats/>
            <SidebarChats/>
            <SidebarChats/>
            <SidebarChats/>
            <SidebarChats/>
            <SidebarChats/>
            <SidebarChats/>
            <SidebarChats/>
            <SidebarChats/>
            <SidebarChats/>
            <SidebarChats/>
            <SidebarChats/>
            <SidebarChats/>
            <SidebarChats/>
            <SidebarChats/>
            <SidebarChats/>
            <SidebarChats/>
            <SidebarChats/>
            <SidebarChats/>
            <SidebarChats/>
            <SidebarChats/>
            <SidebarChats/>
            <SidebarChats/>
            <SidebarChats/>
            <SidebarChats/>
            <SidebarChats/>
            
          </div>
    </div>
  )
}

export default Sidebar