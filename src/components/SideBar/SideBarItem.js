import React from 'react';
import {NavLink} from 'react-router-dom';
import './SideBarItem.css';
const SideBarItem = (props) => {
    return (
        <div className="sidebar-item">
            <NavLink activeStyle = {{color: "black"}} to = {`/${props.id}`} className = "sidebar-link">
                {props.label}
            </NavLink>            
        </div>
    );
}

export default SideBarItem;