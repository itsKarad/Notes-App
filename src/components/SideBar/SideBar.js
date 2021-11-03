import React from 'react';
import SideBarItem from './SideBarItem';
import './SideBar.css';
import SideBarHeader from './SideBarHeader';
import SideBarFooter from './SideBarFooter';

const SideBar = (props) => {
    return (          
        <div className = "sidebar-container">
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
            <div className = "sidebar-footer">
                <SideBarFooter></SideBarFooter>
            </div>
        </div>
          
          
    );
}

export default SideBar;