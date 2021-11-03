import React from 'react';
import './SideBarFooter.css';

const SideBarFooter = () => {
    return (
        <div className = "user-container">
            <div className = "user-info">
                <div className = "user-photo-container">
                    <img class = "user-photo" src = "https://pbs.twimg.com/profile_images/1439633446192697346/QJSHe2iC_400x400.jpg"></img>
                </div>
                <div className = "user-details">
                    <div class = "user-address">
                        xx0295
                    </div>
                    <div class = "user-name">
                        Karad
                    </div>                    
                </div>                
            </div>
        </div>
        
    );
};

export default SideBarFooter;
