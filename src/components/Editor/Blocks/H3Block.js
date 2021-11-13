import React from 'react';

const H3Block = (props) => {
    console.log(props.children);
    return (
        <h3 {...props.attributes}>
            {props.children}
        </h3>    
    );
};

export default H3Block;

