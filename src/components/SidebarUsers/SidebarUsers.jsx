// Sidebar for every server with online and offline users.
import React from 'react'
import { useCollection } from '../../hooks/useCollection';

function SidebarUsers() {
    const users = useCollection("users");

    return (
        <div className="sidebarUsers">
            <span>Online - {/* OnlineCount */}</span>
            <div>
                <ul>
                    {users.documents.map((user) => (
                        <>
                            {user.online && <li>{user.displayName}</li>}
                        </>
                    ))}
                </ul>
            </div>
            <span>Offline - {/* Offline Count */}</span>
            <div>
                <ul>
                    {users.documents.map((user) => (
                        <>
                            {!user.online && <li>{user.displayName}</li>}
                        </>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default SidebarUsers