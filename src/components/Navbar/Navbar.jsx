import { NavLink } from 'react-router-dom'
import './navbar.css'
import { IoSearch } from 'react-icons/io5'
import { IoIosArrowDown } from 'react-icons/io'
import { useState } from 'react'

const Navbar = () => {
    return (
        <header className='header '>
            <div className='container'>
                <div className='logo'>
                    <h1>Dsports365</h1>
                </div>
                <nav>
                    <NavLink to={"/"} className={({ isActive }) => isActive && "nav-active"}>নিউজ</NavLink>
                    
                    <div className='dropdown'>
                        <NavLink to={"/cricket"}
                            className={({ isActive }) => `nav-cricket ${isActive && "nav-active"}`}>ক্রিকেট <IoIosArrowDown />
                        </NavLink>

                        <div className={`nav-dropdown`}>
                            <div className="subcategories">
                                <NavLink to={"/football"}>ক্রিকেট </NavLink>
                                <NavLink to={"/football"}>ফুটবল </NavLink>
                            </div>
                            <div className="suggested-news">
                            </div>
                        </div>
                    </div>

                    <NavLink to={"/football"} className={({ isActive }) => isActive && "nav-active"}>ফুটবল <IoIosArrowDown /></NavLink>
                    <NavLink to={"/other-sports"} className={({ isActive }) => isActive && "nav-active"}>আরও খেলা</NavLink>
                    <NavLink to={"/editorial"} className={({ isActive }) => isActive && "nav-active"}>এডিটোরিয়াল</NavLink>
                    <NavLink to={"/interview"} className={({ isActive }) => isActive && "nav-active"}>সাক্ষাৎকার</NavLink>
                    <IoSearch />
                </nav>
            </div>

        </header>
    )
}

export default Navbar