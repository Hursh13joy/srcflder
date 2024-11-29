import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // React Router Link component for navigation

const Sidebar = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true); // To toggle sidebar visibility
    const [searchQuery, setSearchQuery] = useState(''); // To manage search input

    // Handle sidebar toggle
    const handleSidebarToggle = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    // Handle search input change
    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value);
    };

    // Logout function
    const handleLogout = () => {
        // Add logic for logging out (e.g., clearing user session or token)
        console.log("User logged out");
    };

    return (
        <div className={`d-flex ${isSidebarOpen ? 'sidebar-open' : 'sidebar-closed'}`}>
            {/* Sidebar */}
            <div className={`bg-dark text-white p-3 sidebar ${isSidebarOpen ? '' : 'd-none d-sm-block'} vh-100`}>

                {/* Sidebar Header */}
                <div className="d-flex justify-content-between align-items-center mb-3">
                    <div className="logo d-flex align-items-center">
                        <i className='bx bxl-c-plus-plus'></i>
                        <div className="logo_name ms-2">Pet Planet</div>
                    </div>
                    <i className='bx bx-menu text-white' onClick={handleSidebarToggle} style={{ cursor: 'pointer' }}></i>
                </div>

                {/* Sidebar Search */}
                <ul className="nav flex-column">
                    <li className="nav-item mb-3">
                        <i className='bx bx-file-find'></i>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Search..."
                            value={searchQuery}
                            onChange={handleSearchChange} />
                    </li>

                    {/* Navigation Links */}
                    <li className="nav-item">
                        <Link to="/home" className="nav-link text-white">
                            <i className='bx bx-grid-alt'></i>
                            <span className="ms-2">Dashboard</span>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/user" className="nav-link text-white">
                            <i className='bx bx-user'></i>
                            <span className="ms-2">User</span>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/messages" className="nav-link text-white">
                            <i className='bx bx-chat'></i>
                            <span className="ms-2">Messages</span>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/analytics" className="nav-link text-white">
                            <i className='bx bx-pie-chart'></i>
                            <span className="ms-2">Analytics</span>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/shopping" className="nav-link text-white">
                            <i className='bx bx-folder'></i>
                            <span className="ms-2">Shopping</span>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/order" className="nav-link text-white">
                            <i className='bx bx-cart'></i>
                            <span className="ms-2">Order</span>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/saved" className="nav-link text-white">
                            <i className='bx bx-bookmark-heart'></i>
                            <span className="ms-2">Saved</span>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/settings" className="nav-link text-white">
                            <i className='bx bx-cog'></i>
                            <span className="ms-2">Settings</span>
                        </Link>
                    </li>
                </ul>

                {/* Profile Section */}
                <div className="profile_content mt-5">
                    <div className="d-flex justify-content-between align-items-center">
                        <div className="profile_details d-flex align-items-center">
                            <img src="profile.jpg" alt="Profile" className="rounded-circle" style={{ width: '40px', height: '40px', marginRight: '10px' }} />
                            <div className="name_job">
                                {/* User details can go here */}
                            </div>
                        </div>
                        <i className='bx bx-log-out text-white' onClick={handleLogout} style={{ cursor: 'pointer' }}></i>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="flex-grow-1 p-3">
                {/* The main content of the page will go here */}
            </div>
        </div>
    );
};

export default Sidebar;
