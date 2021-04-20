import { Avatar, IconButton } from '@material-ui/core'
import { AttachFile, MoreVert, SearchOutlined } from '@material-ui/icons'
import React from 'react'
import './Chat.css'
function Chat() {
    return (
        <div className="chat">
            <div className="chat_header">
                <Avatar />
            <div className="chat_headerInfo">
            
                <h3>Room name</h3>
                <p>This the last message</p>
            </div>
                <IconButton>
                    <SearchOutlined />
                </IconButton>
                <IconButton>
                <AttachFile/>
                </IconButton>
               <IconButton>
                   <MoreVert />
               </IconButton>
            </div>
            <div className="chat_body">
                <p className="chat_message">
                    <span className="chat_name">Savan </span>
                    This is as message
                    <span className="chat_tiemstamp">{new Date().toUTCString()}</span>
                </p>
                <p className="chat_message">
                    <span className="chat_name">Savan </span>
                    This is as message
                    <span className="chat_tiemstamp">{new Date().toUTCString()}</span>
                </p>
                <p className="chat_message">
                    <span className="chat_name">Savan </span>
                    This is as message
                    <span className="chat_tiemstamp">{new Date().toUTCString()}</span>
                </p>
                <p className="chat_message">
                    <span className="chat_name">Savan </span>
                    This is as message
                    <span className="chat_tiemstamp">{new Date().toUTCString()}</span>
                </p>
            </div>
        </div>
    
    );
}

export default Chat;
