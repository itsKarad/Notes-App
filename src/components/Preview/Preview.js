import React from 'react';
import ReactMarkdown from 'react-markdown';

const Preview = (props) => {
    return (
        <ReactMarkdown children = {props.markdown}>

        </ReactMarkdown>
    )
};

export default Preview;