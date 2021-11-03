import React from 'react';
import SideBarItem from './SideBarItem';
import './SideBar.css';
import SideBarHeader from './SideBarHeader';

const SideBar = (props) => {
    return (          
        <div className="sidebar">     
            <SideBarHeader></SideBarHeader>
            <div className = "sidebar-pages">
                {
                    props.pages.map((page) => {
                        return (
                            <div className = "sidebar-item-container" key = {page.id}>
                                <SideBarItem key = {page.id} id = {page.id} label = {page.title}></SideBarItem>
                            </div>
                        )
                    })
                }
            </div>               
        </div>        
    );
}

export default SideBar;