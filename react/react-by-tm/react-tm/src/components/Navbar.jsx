import React from 'react'
import logo from '/src/assets/images/logo.png'

const Navbar = () => {
    return (
        <nav className='bg-indigo-700 border-b border-indigo-500 '>
            <div className='mx-auto max-w-7 px-2 sm:px-6 lg:px-8'>
                <div className='flex items-center justify-between h-20 '>
                    <div className='flex flex-1 items-center justify-center md:justify-start md:items-stretch'>
                        <a href="#" className='flex flex-shrink-0 items-center mr-4 '>
                            <img src={logo} alt="react jobs" className='h-10 w-auto' />
                            <span className='hidden text-white text-2xl  font-bold ml-2 md:block'>
                                React Jobs
                            </span>
                        </a>


                        <div className='md:ml-auto '>
                            <div className='flex space-x-2'>
                                <a href="/" >Home</a>
                                <a href="/jobs" >Jobs</a>
                                <a href="/add-job" >Add Jobs</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar