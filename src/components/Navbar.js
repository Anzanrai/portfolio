import React, { useState } from 'react';
import { Link, useLocation, matchPath } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

import '../scss/navbar.css';

const Navbar = (props) => {
  const [navbarCollapse, setNavbarCollapse] = useState(true);

  const handleCollapse = () => {
    navbarCollapse ? setNavbarCollapse(false) : setNavbarCollapse(true);
  };

  let location = useLocation();
  let { pathname } = location;

  const matchPath = (path) => {
    return pathname === path;
  };

  return (
    <div>
      <div
        className="navbar-vertical"
        style={{ display: navbarCollapse ? 'none' : '' }}
      >
        <div>
          <span className="navbar-vertical-close">
            <CloseIcon onClick={() => handleCollapse()} />
          </span>
        </div>

        <div>
          <ul
            className="navbar-group"
            style={{
              display: navbarCollapse ? 'none' : '',
              maxHeight: navbarCollapse ? '0vh' : '100vh',
            }}
          >
            <li className="nav-item">
              <Link
                to="/"
                className="nav-link"
                onClick={() => handleCollapse()}
                style={{ color: matchPath('/') ? '#f1bb52' : '#453737' }}
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/about"
                className="nav-link"
                onClick={() => handleCollapse()}
                style={{ color: matchPath('/about') ? '#f1bb52' : '#453737' }}
              >
                About Me
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/resume"
                className="nav-link"
                onClick={() => handleCollapse()}
                style={{ color: matchPath('/resume') ? '#f1bb52' : '#453737' }}
              >
                Resume
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/portfolio"
                className="nav-link"
                onClick={() => handleCollapse()}
                style={{
                  color: matchPath('/portfolio') ? '#f1bb52' : '#453737',
                }}
              >
                Portfolio
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/contact"
                className="nav-link"
                onClick={() => handleCollapse()}
                style={{ color: matchPath('/contact') ? '#f1bb52' : '#453737' }}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="navbar-burger">
        <MenuIcon onClick={() => handleCollapse()} />
      </div>

      <div className="navbar-horizontal">
        <div>
          <ul className="navbar-horizontal_group">
            <li className="navbar-horizontal_group_nav-item">
              <Link
                to="/"
                className="navbar-horizontal_group_nav-link"
                onClick={() => handleCollapse()}
                style={{ color: matchPath('/') ? '#f1bb52' : 'white' }}
              >
                Home
              </Link>
            </li>
            <li className="navbar-horizontal_group_nav-item">
              <Link
                to="/about"
                className="navbar-horizontal_group_nav-link"
                onClick={() => handleCollapse()}
                style={{ color: matchPath('/about') ? '#f1bb52' : 'white' }}
              >
                About Me
              </Link>
            </li>
            <li className="navbar-horizontal_group_nav-item">
              <Link
                to="/resume"
                className="navbar-horizontal_group_nav-link"
                onClick={() => handleCollapse()}
                style={{ color: matchPath('/resume') ? '#f1bb52' : 'white' }}
              >
                Resume
              </Link>
            </li>
            <li className="navbar-horizontal_group_nav-item">
              <Link
                to="/portfolio"
                className="navbar-horizontal_group_nav-link"
                onClick={() => handleCollapse()}
                style={{
                  color: matchPath('/portfolio') ? '#f1bb52' : 'white',
                }}
              >
                Portfolio
              </Link>
            </li>
            <li className="navbar-horizontal_group_nav-item">
              <Link
                to="/contact"
                className="navbar-horizontal_group_nav-link"
                onClick={() => handleCollapse()}
                style={{ color: matchPath('/contact') ? '#f1bb52' : 'white' }}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
