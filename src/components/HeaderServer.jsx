//Header for Server Sidebar - With Server options adding, deleting and managing Channels etc.
import React from 'react'
import { IoIosArrowDown } from 'react-icons/io'
import { RxCross2 } from 'react-icons/rx'

function HeaderServer() {
    return (
        <div>
            <span>Server Name</span>
            <IoIosArrowDown /> <RxCross2 /> {/*or <IoIosArrowUp /> - Arrow Up/Down for server options */}
            <div>       {/* Server Options Menu */}
                <span>Invite People</span>
                <span>Server Settings</span>
                <span>Create Channel</span>
                <span>Create Category</span>
                <span>Create Events</span>
                <span>Notification Settings</span>
                <span>Privacy Settings</span>
            </div>
        </div>
    )
}

export default HeaderServer