import React from 'react';

const QuoteBlock = (props) => {
    console.log(props.children);
    return (
        <span>
            Quote:
            <blockquote {...props.attributes}>
                {props.children}
            </blockquote>  
        </span>
          
    );
};

export default QuoteBlock;

