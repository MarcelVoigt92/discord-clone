//Footer with User Avatar, Clients Options, online status etc.
import React from 'react'
import { BsFillMicFill, BsFillMicMuteFill } from 'react-icons/bs';
import { MdHeadset, MdHeadsetOff } from 'react-icons/md';
import { FaCog } from 'react-icons/fa'

function Footer() {
    return (
        <div className='footer'>
            <img src="" alt="" /> {/* UserAvatar */}
            <div>On/Off</div> {/* Online/Offline Toggle */}
            <span>Username</span>
            <span>Status</span>
            <BsFillMicFill /> <BsFillMicMuteFill /> {/* Mic Mute/Unmute Button */}
            <MdHeadset /> <MdHeadsetOff /> {/* Headphones Mute/Unmute Button */}
            <FaCog /> {/*or <HiCog/> (Options Cogwheel) */}
        </div>
    )
}

export default Footer