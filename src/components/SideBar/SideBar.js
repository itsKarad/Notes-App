import React from 'react';
import SideBarItem from './SideBarItem';
import './SideBar.css';
import SideBarHeader from './SideBarHeader';
import SideBarFooter from './SideBarFooter';
import NewPage from './NewPage';

const SideBar = (props) => {
    console.log(props);
    return (          
        <div className = "sidebar-container">
            <div className = "sidebar-header-container">
                <SideBarHeader></SideBarHeader>
            </div>
            <div className="sidebar">     
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
                    <div className = "sidebar-item-container" key = "new-page-form">
                        <NewPage onCreateNewPage = {props.onCreateNewPage}></NewPage>
                    </div>
                </div>                             
            </div>      
            <div className = "sidebar-footer">
                <SideBarFooter></SideBarFooter>
            </div>
        </div>
          
          
    );
}

export default SideBar;