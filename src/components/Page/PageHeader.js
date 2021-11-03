import React from 'react';
import './PageHeader.css'
const PageHeader = (props) => {
    return (
        <div className = "page-header">
            <h1 
                className = "page-header-text" 
                contentEditable = "true" 
                onInput = {props.onChange}
                suppressContentEditableWarning={true}
            >
                {props.value}
            </h1>
        </div>
    );
}

export default PageHeader;