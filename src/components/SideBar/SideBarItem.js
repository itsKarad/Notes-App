import React from 'react';
import {Link} from 'react-router-dom';
import './SideBarItem.css';
const SideBarItem = (props) => {
    return (
        <div className="sidebar-item">
            <Link to = {`/${props.id}`} className = "sidebar-link">
                {props.label}
            </Link>            
        </div>
    );
}

export default SideBarItem;