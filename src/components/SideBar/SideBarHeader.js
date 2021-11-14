import React from 'react';
import { Icon } from "@chakra-ui/react"
import {CgNotes} from 'react-icons/cg';
import './SideBarHeader.css';
const SideBarHeader = () => {
    return (
        <div className = "sidebar-header">
            <Icon as = {CgNotes} h={50} w={50}></Icon>
        </div>
    );
}
export default SideBarHeader;
