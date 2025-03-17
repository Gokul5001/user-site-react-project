import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaUser } from 'react-icons/fa';
import { AiOutlineClose } from 'react-icons/ai';
import { SidebarData } from './SidebarData';

function Navbar() {
    const [sidebar, setSidebar] = useState(false);
    const [user, setUser] = useState(null);
    const [showUserMenu, setShowUserMenu] = useState(false);

    useEffect(() => {
        const username = localStorage.getItem('username');
        if (username) {
            setUser(username);
        }
    }, []);

    const toggleSidebar = () => setSidebar(!sidebar);

    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const handleLogout = () => {
        localStorage.removeItem('username');
        localStorage.removeItem('token');
        setUser(null);
        window.location.reload();
    };

    // Reference to the user menu wrapper
    const userMenuRef = useRef(null);

    // Function to close user menu when clicking outside
    const handleClickOutside = (event) => {
        if (userMenuRef.current && !userMenuRef.current.contains(event.target)) {
            setShowUserMenu(false);
        }
    };

    useEffect(() => {
        // Add event listener when the user menu is shown
        if (showUserMenu) {
            document.addEventListener('click', handleClickOutside);
        } else {
            document.removeEventListener('click', handleClickOutside);
        }
        // Cleanup the event listener
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, [showUserMenu]);

    const toggleUserMenu = () => setShowUserMenu(!showUserMenu);

    return (
        <>
            <nav className="bg-gradient-to-r from-blue-500 to-purple-500 p-4 shadow-md border-b-2 border-gray-300 z-50">
                <div className="container mx-auto flex justify-between items-center">
                    <div className="flex items-center">
                        <button onClick={toggleSidebar} className="text-white hover:text-gray-300 mr-4">
                            <FaBars className="w-6 h-6" />
                        </button>
                        <div className="text-white text-2xl font-bold flex items-center ml-1">
                            
                            <span>BLUEBLINK</span>
                        </div>
                    </div>
                    <div className="hidden md:flex space-x-8 items-center">
                        <button className="text-white hover:text-gray-300 transition duration-300" onClick={() => scrollToSection('home')}>Home</button>
                        <button className="text-white hover:text-gray-300 transition duration-300" onClick={() => scrollToSection('About')}>About</button>
                        <div className="relative group">
                            <button className="text-white hover:text-gray-300 transition duration-300" onClick={() => scrollToSection('Services')}>Services</button>
                            <div className="absolute hidden group-hover:block bg-white text-gray-700 mt-2 rounded-lg shadow-lg w-48">
                                <buttton className="block px-4 py-2 hover:bg-gray-200 transition duration-300">Web Design</buttton>
                                <button className="block px-4 py-2 hover:bg-gray-200 transition duration-300">SEO</button>
                                <button className="block px-4 py-2 hover:bg-gray-200 transition duration-300">Marketing</button>
                            </div>
                        </div>
                        <button className="text-white hover:text-gray-300 transition duration-300" onClick={() => scrollToSection('contact')}>Contact</button>
                        {user ? (
                            <div className="relative" ref={userMenuRef}>
                                <button onClick={toggleUserMenu} className="flex items-center space-x-2 text-white hover:text-gray-300 transition duration-300">
                                    <FaUser className="w-6 h-6" />
                                    <span>Welcome, {user}</span>
                                </button>
                                {showUserMenu && (
                                    <div className="absolute left-0 mt-2 bg-white text-gray-700 rounded-lg shadow-lg w-48">
                                        <Link to="/MyAccount" className="block px-4 py-2 hover:bg-gray-200 transition duration-300" onClick={toggleUserMenu}>My Account</Link>
                                        <button onClick={handleLogout} className="block px-4 py-2 hover:bg-gray-200 transition duration-300">Logout</button>
                                    </div>
                                )}
                            </div>
                        ) : (
                            <Link to="/signup" className="px-4 py-2 bg-white text-blue-500 rounded">Sign up</Link>
                        )}
                    </div>
                </div>
            </nav>
            <div className={`nav-menu ${sidebar ? 'active' : ''} fixed top-0 left-0 w-64 h-full bg-gradient-to-r from-blue-800 to-purple-600 transition-transform duration-300 transform ${sidebar ? 'translate-x-0' : '-translate-x-full'} z-50`}>
                <div className="nav-menu-items w-full">
                    <div className='navbar-toggle w-full h-20 flex justify-start items-center'>
                        <button className='menu-bars ml-8 text-2xl text-white' onClick={toggleSidebar}>
                            <AiOutlineClose />
                        </button>
                    </div>
                    {SidebarData.map((item, index) => {
                        // Check if the item should be shown based on authentication status
                        if (item.visibleOnlyWhenLoggedIn && !user) {
                            return null;  // Skip rendering this item if not logged in
                        }
                        return (
                            <div key={index} className="nav-text flex items-center h-15 px-4 list-none">
                                <Link to={item.path} className="text-white w-full flex items-center h-full px-4 py-2 rounded-lg hover:bg-blue-500 transition duration-300" onClick={toggleSidebar}>
                                    {item.icon}
                                    <span className="ml-4">{item.title}</span>
                                </Link>
                            </div>
                        );
                    })}
                </div>
            </div>
            {sidebar && <div className="fixed inset-0 bg-black opacity-50 z-40" onClick={toggleSidebar}></div>}
        </>
    );
}

export default Navbar;
