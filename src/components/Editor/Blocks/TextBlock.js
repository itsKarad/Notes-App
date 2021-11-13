import React from 'react';

const TextBlock = (props) => {
    return (
        <p {...props.attributes}>
            {props.children}
        </p>
    );
};

export default TextBlock;