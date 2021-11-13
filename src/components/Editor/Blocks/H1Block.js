import React from 'react';

const H1Block = (props) => {
    console.log(props.children);
    return (
        <h1 {...props.attributes}>
            {props.children}
        </h1>    
    );
};

export default H1Block;

