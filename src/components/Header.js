import React, { useEffect, useState } from 'react'
import logo from '../assets/logo.png'
import {Link,NavLink, useNavigate } from 'react-router-dom'
import userIcon from '../assets/user.png'
import { IoSearch } from "react-icons/io5";
import { navigation } from '../contants/navigation';


 
const Header = () => {
    const [searchInput, setSearchInput] = useState('')
    const navigate=useNavigate();

    useEffect(() => {
        navigate(`/search?q=${searchInput}`)
    }, [searchInput])
    const handelSubmit = (e) => {
        e.preventDefault()
    }

    return (

        <header className='fixed top-0 w-full h-16 bg-neutral-600 bg-opacity-75'>
            <div className='container mx-auto px-3 flex items-center h-full'>
                <Link to={"/"}>
                    <img
                        src={logo}
                        alt='logo'r
                        width={120}

                    />
                </Link>

                <nav className='flex items-center gap-1 ml-5'>
                    {
                        navigation.map((nav, index) => {
                            return (
                                <div>
                                    <NavLink key={nav.label} to={nav.href} className={({ isActive }) => 'px-2 hover:text-neutral-100 $(isActive &&"text-natural-100" )'}>
                                        {nav.label}
                                    </NavLink>
                                </div>
                            )
                        })
                    }
                </nav>
                <div className='ml-auto  flex items-center gap-5'>
                    <form className='flex items-center gap-2 ' onSubmit={handelSubmit}>
                        <input
                            type='text'
                            placeholder='Search here....'
                            className='bg-transparent px-4 py- outline-none border-none hidden lg:block'
                            onChange={(e) => setSearchInput(e.target.value)}
                            value={searchInput}
                        />
                        <button className='text-2xl text-white'>
                            <IoSearch />
                        </button>
                    </form>
                    <div className='w-8 h-8 rounded-full overflow-hidden cursor-pointer active:scale-50 transition-all'>
                        <img
                            src={userIcon}
                            width='w-ful h-full'
                        />
                    </div>
                </div>
            </div>


        </header>
    )
}

export default Header;