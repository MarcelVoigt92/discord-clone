//Navigation Bar for navigating between servers and private messages.
import React from 'react'
import { FaDiscord, FaCompass } from 'react-icons/fa'
import { AiOutlinePlus } from 'react-icons/ai'

function Navbar() {
    return (
        <div>
            <FaDiscord /> {/* private message tab */}
            <div>
                pretend to .map private message notifications in here
            </div>
            <div>
                <ul>
                    <li>
                        .map all servers the logged in user is a member of
                    </li>
                </ul>
            </div>
            <AiOutlinePlus /> {/* Create/Join new Server button */}
            <FaCompass /> {/* explore public servers button */}
        </div>
    )
}

export default Navbar