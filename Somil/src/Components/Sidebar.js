import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaSignOutAlt } from 'react-icons/fa';
import styles from '../styles/sidebar.module.css';
import { SidebarData } from "./SidebarData";

const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div>
      <input 
        type="checkbox" 
        id="check" 
        checked={isSidebarOpen} 
        style={{ display: 'none' }}
        readOnly
      />
    
      <label htmlFor="check">
        <div className={`${styles.bar} ${isSidebarOpen ? styles.open : ''}`} onClick={toggleSidebar}>
          <span className={`${styles.top}`}></span>
          <span className={`${styles.middle}`}></span>
          <span className={`${styles.bottom}`}></span>
        </div>
      </label>

      {/* Overlay */}
      {isSidebarOpen && <div className={styles.overlay} onClick={toggleSidebar}></div>}

      <div className={`${styles.sidebar} ${isSidebarOpen ? styles.sidebarOpen : ''}`}>
        <header>SIMTRAK</header>
        <ul>
          {SidebarData.map((val, key) => {
            const IconComponent = val.icon;
            return (
              <li key={key}>
                <Link to={val.link} className={`${styles.link}`}>
                  <IconComponent className={`${styles.icon}`} /> {val.title}
                </Link>
              </li>
            );
          })}

          <li className={`${styles.logout}`}>
            <button className={`${styles.logoutBtn}`} type="button">
              <FaSignOutAlt className={`${styles.icon}`} /> Logout
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
