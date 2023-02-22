// Server Sidebar for accessing and managing Channels
import React from 'react'
import { IoIosArrowDown, IoIosArrowForward } from 'react-icons/io'

function SidebarServer() {
    return (
        <div>
            <div>
                <IoIosArrowDown /> <IoIosArrowForward /> {/* show/hide textchannels */}
                <span>Text Channels</span>
                <ul>
                    <li>
                        .map all Text Channels
                    </li>
                </ul>
            </div>
            <div>
                <IoIosArrowDown /> <IoIosArrowForward /> {/* show/hide textchannels */}
                <span>Voice Channels</span> {/* non existent voice channels kekw */}
                <ul>
                    <li>
                        no .map we just pretend they exist *wheeze*
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default SidebarServer