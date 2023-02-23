//Footer with User Avatar, Clients Options, online status etc.
import React, { useState } from 'react'
import { BsFillMicFill, BsFillMicMuteFill } from 'react-icons/bs';
import { MdHeadset, MdHeadsetOff } from 'react-icons/md';
import { FaCog } from 'react-icons/fa'
import { useSelector } from "react-redux";
import { selectUser } from "../../redux/reducers/userSlice";
import './Footer.css'

function Footer() {
    const user = useSelector(selectUser);

    const [micMute, setMicMute] = useState(false);
    const handleMicMute = () => setMicMute(!micMute);
    const micIcon = micMute ? <BsFillMicMuteFill /> : <BsFillMicFill />;

    const [headsetMute, setHeadsetMute] = useState(false);
    const handleHeadsetMute = () => setHeadsetMute(!headsetMute);
    const headsetIcon = headsetMute ? <MdHeadsetOff /> : <MdHeadset />;

    const [online, setOnline] = useState(false);
    const handleOnline = () => setOnline(!online);
    const onlineColor = online ? 'red' : 'green';

    return (
        <div className='footer'>
            <div className='avatarContainer'>
                <img src={user.photo} alt="" /> {/* UserAvatar */}
                <div className='onlineStatus' onClick={handleOnline} style={{ backgroundColor: `${onlineColor}` }}></div> {/* Online/Offline Toggle */}
            </div>
            <div className='nameStatusContainer'>
                <span>{user.displayName}</span>
                {/* <span>Status</span> */}
            </div>
            <div className='footerIcons'>
                <span onClick={handleMicMute}>{micIcon}</span>{/* Mic Mute/Unmute Button */}
                <span onClick={handleHeadsetMute}>{headsetIcon}</span>{/* Headphones Mute/Unmute Button */}
                <FaCog /> {/*or <HiCog/> (Options Cogwheel) */}
            </div>
        </div>
    )
}

export default Footer