//Header for every chat with Channel name, message search function etc.
import React from 'react'
import { BiHash } from 'react-icons/bi'
import { FiMessageSquare } from 'react-icons/fi'
import { BsFillBellFill, BsFillPinAngleFill } from 'react-icons/bs'
import { MdPeopleAlt } from 'react-icons/md'
import './HeaderChat.css'


function HeaderChat() {
    return (
        <div className='headerChat'>
            <div className='headerChannelName'>
                <BiHash /> {/* Hashtag Icon infront of channel name */}
                <span>Channel Name</span>
            </div>
            <div className='headerIcons'>
                <FiMessageSquare /> {/* Threads Icon */}
                <BsFillBellFill /> {/* Notification Bell Icon */}
                <BsFillPinAngleFill /> {/* Pinned Messages Icon */}
                <MdPeopleAlt /> {/* Show/Hide MemberList */}
            </div>
        </div>
    )
}

export default HeaderChat