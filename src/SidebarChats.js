import React,{useEffect,useState} from 'react'
import "./SidebarChats.css"
import {Avatar, IconButton} from "@material-ui/core"

function SidebarChats({channelname,id}) {
   const[randomNumber,setRandom]=useState('')

    //algo to generate random number
    useEffect(()=>{
        setRandom(Math.floor(Math.random()*10000))
    },[])

  return (
    <div className="chats">
      <Avatar src={`https://avatars.dicebear.com/api/human/${randomNumber}.svg`}/>
     <div className="chat-info">
       <h2>{channelname}</h2>
       <p>Hello guys hows the build</p>
     </div>
    </div>
  )
}

export default SidebarChats