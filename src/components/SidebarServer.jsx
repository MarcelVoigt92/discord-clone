// Server Sidebar for accessing and managing Channels
import React, { useState } from 'react'
import { IoIosArrowDown, IoIosArrowForward } from 'react-icons/io'
import { AiOutlinePlus } from 'react-icons/ai'
import { HeaderServer } from './index.js'
import "./SidebarServer.css";

function SidebarServer() {
    const [rotateTextArrow, setRotateTextArrow] = useState(false);
    const handleTextRotate = () => setRotateTextArrow(!rotateTextArrow);
    const rotateText = rotateTextArrow ? "rotate(-90deg)" : "rotate(0)"

    const [rotateVoiceArrow, setRotateVoiceArrow] = useState(false);
    const handleVoiceRotate = () => setRotateVoiceArrow(!rotateVoiceArrow);
    const rotateVoice = rotateVoiceArrow ? "rotate(-90deg)" : "rotate(0)"

    return (
        <div className='sidebar'>
            <HeaderServer />
            <div className='sidebar__channels'>
                <div className='sidebar__channelsHeader'>
                    <div className='sidebar__header'>
                        <IoIosArrowDown style={{ transform: rotateText, transition: "all 0.2s linear" }} onClick={handleTextRotate} />{/* show/hide textchannels */}
                        <span onClick={handleTextRotate}>Text Channels</span>
                    </div>
                    <AiOutlinePlus className='sidebar__addChannel' />
                    <div>
                        <ul>
                            <li>
                                .map all Text Channels
                            </li>
                        </ul>
                    </div>
                </div>
                <div className='sidebar__channelsHeader'>
                    <div className='sidebar__header'>
                        <IoIosArrowDown style={{ transform: rotateVoice, transition: "all 0.2s linear" }} onClick={handleVoiceRotate} /> {/* show/hide textchannels */}
                        <span onClick={handleVoiceRotate}>Voice Channels</span> {/* non existent voice channels kekw */}
                    </div>
                    <AiOutlinePlus className='sidebar__addChannel' />
                    <ul>
                        <li>
                            no .map we just pretend they exist *wheeze*
                        </li>
                    </ul>
                </div>
            </div>

        </div>
    )
}

export default SidebarServer