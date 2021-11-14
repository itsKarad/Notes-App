import React from 'react';

const H2Block = (props) => {
    console.log(props.children);
    return (
        <h2 {...props.attributes} style={{
            fontSize: "1.9rem",
        }}>
            {props.children}
        </h2>    
    );
};

export default H2Block;

