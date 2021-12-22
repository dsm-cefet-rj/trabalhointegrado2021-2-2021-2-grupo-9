import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { IconContext } from 'react-icons';

import { SidebarData } from './SidebarData';
import { SidebarDataFull } from './SidebarDataFull';

import { LoginContext } from "context";

import './SideBar.css';

const SideBar = ({ sidebar, setSidebar }) => {
  const { isLogged } = useContext(LoginContext) || []
  const showSidebar = () => setSidebar(!sidebar);

  const pickSideBar = isLogged ? SidebarDataFull : SidebarData

  return (
    <>
      <IconContext.Provider value={{ color: '#000000' }}>
        <div className="navbar">
          <Link to='#' className='menu-bars'>
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>
        </div>
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul className='nav-menu-items' onClick={showSidebar}>
            <li className='navbar-toggle'>
              <Link to='#' className='menu-bars'>
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
            {pickSideBar.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default SideBar;