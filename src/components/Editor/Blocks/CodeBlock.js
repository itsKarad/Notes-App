import React from 'react';

const CodeBlock = (props) => {
    return (
        <pre {...props.attributes}>
            <code>
                {props.children}
            </code>
        </pre>        
    );
};

export default CodeBlock;