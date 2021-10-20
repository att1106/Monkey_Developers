import React from 'react'
import NavbarLinks from '../navbarLink/NavbarLink';
import "./sidebar.styles.scss";

const Sidebar = ({ isOpen, toggleSidebar, navbarLinks }) => {
    return (
        <div className={`sidebar${isOpen ? " open" : ""}`} >
            <NavbarLinks navbarLinks={navbarLinks} toggleSidebar={toggleSidebar} />
        </div>
    )
}

export default Sidebar
