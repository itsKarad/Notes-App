import React from 'react';

const BulletBlock = (props) => {
    return (
        <li {...props.attributes}>
            {props.children}
        </li>    
    );
};

export default BulletBlock;

