import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
const Menu = () => {
  const [subMenuOpen, setSubMenuOpen] = useState(false);

  const toggleMenu = () => {
    setSubMenuOpen(!subMenuOpen);
  };

  return (
    <div className="menu">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        {/* Logo */}
        <a className="navbar-brand" href="#">
          <img src="images/logo.png" alt="Logo" className="logo" />
        </a>

        {/* Navbar Links */}
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a href="home.html" className="nav-link active">Home</a>
            </li>
            <li className="nav-item">
              <a href="contact-us.html" className="nav-link">Contact Us</a>
            </li>
            <li className="nav-item">
              <a href="notification.html" className="nav-link">Notification</a>
            </li>
            <li className="nav-item">
              <a href="profile.html" className="nav-link">Profile</a>
            </li>
            <li className="nav-item">
              <a href="login_page.html" className="nav-link">Logout</a>
            </li>
          </ul>
        </div>

        {/* User Avatar */}
        <img
          src="images/user-avatar.jpg"
          alt="User Avatar"
          className="user-pic rounded-circle"
          onClick={toggleMenu}
          style={{ cursor: 'pointer' }}
        />

        {/* Submenu */}
        {subMenuOpen && (
          <div className="dropdown-menu show" aria-labelledby="user-avatar">
            <div className="dropdown-header">
              <img src="images/user.png" alt="User" className="rounded-circle" width="50" height="50" />
              <h5 className="mt-2">Hi</h5>
            </div>
            <hr />
            <a href="edit-profile.html" className="dropdown-item">
              <img src="images/profile.png" alt="Profile" width="20" height="20" />
              <span>Edit Profile</span>
            </a>
            <a href="settings.html" className="dropdown-item">
              <img src="images/setting.png" alt="Settings" width="20" height="20" />
              <span>Settings</span>
            </a>
            <a href="help.html" className="dropdown-item">
              <img src="images/help.png" alt="Help" width="20" height="20" />
              <span>Help</span>
            </a>
            <a href="logout.html" className="dropdown-item">
              <img src="images/logout.png" alt="Logout" width="20" height="20" />
              <span>Logout</span>
            </a>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Menu;
