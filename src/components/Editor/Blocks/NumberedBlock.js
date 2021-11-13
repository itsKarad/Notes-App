import React from 'react';

const NumberedBlock = (props) => {
    console.log(props.children);
    return (
        <ol {...props.attributes}>
            {props.children}
        </ol>    
    );
};

export default NumberedBlock;

