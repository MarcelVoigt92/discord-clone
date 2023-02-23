// Sidebar for every server with online and offline users.
import React from 'react'

function SidebarUsers() {
    return (
        <div className="sidebarUsers">
            <span>Online - {/* OnlineCount */}</span>
            <div>
                <ul>
                    <li>
                        .map with online users
                    </li>
                </ul>
            </div>
            <span>Offline - {/* Offline Count */}</span>
            <div>
                <ul>
                    <li>
                        .map with offline users
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default SidebarUsers