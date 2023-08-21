/** @format */
import { NavLink } from "react-router-dom";
import "./../css/sidebar.css";
import React, { useState } from "react";
import {
  FaAngleRight,
  FaAngleLeft,
  FaChartBar,
  FaThLarge,
  FaUsers,
  FaUserFriends,
  FaBars,
} from "react-icons/fa";

const ICON_SIZE = 20;

function Sidebar({ collapsed, handleToggleSidebar }) {
  return (
    <>
      <div className="mobile-nav">
        <button className="mobile-nav-btn" onClick={handleToggleSidebar}>
          <FaBars size={24} />
        </button>
      </div>
      <nav className={collapsed ? "collapsed" : ""}>
        <button type="button" className="nav-btn" onClick={handleToggleSidebar}>
          {collapsed ? <FaAngleRight size={30} /> : <FaAngleLeft size={30} />}
        </button>
        <div>
          {/* Your logo NavLink (commented out for this example) */}
          <div className="links nav-top">
            <NavLink to="/dashboard" className="nav-link">
              <span className="icon">
                <FaThLarge size={ICON_SIZE} />
              </span>
              <span className={!collapsed ? "text-visible" : ""}>
                Dashboard
              </span>
            </NavLink>
            <NavLink to="/customers" className="nav-link">
              <span className="icon">
                <FaUsers size={ICON_SIZE} />{" "}
                {/* Use FaUser icon for Customers */}
              </span>
              <span className={!collapsed ? "text-visible" : ""}>
                Customers
              </span>
            </NavLink>
            <NavLink to="/sorters" className="nav-link">
              <span className="icon">
                <FaUserFriends size={ICON_SIZE} />{" "}
                {/* Use FaSort icon for Sorters */}
              </span>
              <span className={!collapsed ? "text-visible" : ""}>Sorters</span>
            </NavLink>
            <NavLink to="/status" className="nav-link">
              <span className="icon">
                <FaChartBar size={ICON_SIZE} />
              </span>
              <span className={!collapsed ? "text-visible" : ""}>Status</span>
            </NavLink>
          </div>
        </div>
        <div className="links">{/* Add any other links you need here */}</div>
      </nav>
    </>
  );
}

export default Sidebar;
