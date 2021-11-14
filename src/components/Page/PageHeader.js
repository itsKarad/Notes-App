import React from 'react';
import { Heading } from "@chakra-ui/react"
import './PageHeader.css'
const PageHeader = (props) => {
    return (
        <div className = "page-header">
            <Heading 
                size = "2xl"
                className = "page-header-text" 
                contentEditable = "true" 
                onInput = {props.onChange}
                suppressContentEditableWarning={true}
            >
                {props.value}
            </Heading>
        </div>
    );
}

export default PageHeader;