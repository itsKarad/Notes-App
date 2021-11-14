import React from 'react';
import './SideBarFooter.css';
import { Avatar } from "@chakra-ui/react"
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuGroup,
} from "@chakra-ui/react";

const SideBarFooter = () => {
    return (
        <div className = "user-container">                           
            <Menu>
                <MenuButton>
                    <div className = "user-info"> 
                        <div className = "user-photo-container">
                            <Avatar size="md" name = "karad" src = "https://www.larvalabs.com/cryptopunks/cryptopunk9476.png">
                            </Avatar>
                        </div>
                        <div className = "user-details">
                            <div className = "user-address">
                                0x7031
                            </div>
                            <div className = "user-name">
                                Karad
                            </div>                    
                        </div>
                    </div>
                </MenuButton>
                <MenuList>
                    <MenuGroup title="Data">
                        <MenuItem>Export data</MenuItem>
                    </MenuGroup>
                    <MenuGroup title="Profile">
                        <MenuItem>Settings</MenuItem>
                        <MenuItem>Switch Accounts</MenuItem>
                        <MenuItem>Log out</MenuItem>
                    </MenuGroup>      
                </MenuList>
            </Menu>                               
        </div>        
    );
};

export default SideBarFooter;
