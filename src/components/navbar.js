import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import React from 'react'
import Logo from '../images/logo.svg'

const Navbar = () => {
    return (
        <>
            <header className='fixed top-0 left-0 right-0 z-20 bg-red-600 shadow-lg shadow-red-500/50 text-white max-w-6xl mx-auto mt-5 rounded-md'>
                <div className='flex justify-between items-center py-1 px-8'>
                    <div className='flex justify-between items-center'>
                        <Logo className='h-8 mr-2' />
                        Destinesia Studio
                    </div>
                    <nav>
                        <a href='https://github.com/destinesiastudio'>
                            <FontAwesomeIcon className='mx-2' icon={faGithub} size='lg' />
                        </a>
                    </nav>
                </div>
            </header>
            {/* Offset the navbar */}
            <div className='h-14' />
        </>
    )
}

export default Navbar