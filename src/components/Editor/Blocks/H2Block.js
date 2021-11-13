import React from 'react';

const H2Block = (props) => {
    console.log(props.children);
    return (
        <h2 {...props.attributes}>
            {props.children}
        </h2>    
    );
};

export default H2Block;

