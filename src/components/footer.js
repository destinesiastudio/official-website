import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
    return (
        <footer className='bg-black-600 text-white flex justify-around py-4 text-xs'>
            <p>© 2024 Destinesia Studio Pty Ltd. All rights reserved.</p>
            <div>
                <a href='https://github.com/destinesiastudio'>
                    <FontAwesomeIcon className='mx-2' icon={faGithub} />
                </a>
            </div>
        </footer>
    )
}

export default Footer