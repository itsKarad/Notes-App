import React from 'react';
import {NavLink} from 'react-router-dom';
import { Text } from "@chakra-ui/react"

const SideBarItem = (props) => {
    return (
        <div className="sidebar-item">
            <Text fontSize="xl">
                <NavLink activeStyle = {{color: "black"}} to = {`/${props.id}`} className = "sidebar-link">
                    {props.label}
                </NavLink>
            </Text>                        
        </div>
    );
}

export default SideBarItem;