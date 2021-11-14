import React from 'react';

const Leaf = (props) => {
    var textDecorationValue = "none";
    if(props.leaf.underline){
        textDecorationValue = "underline";
    }
    if(props.leaf.strikethrough){
        textDecorationValue = "line-through"
    }
    if(props.leaf.code){
        return (
            <code {...props.attributes} style = {{
                fontWeight: props.leaf.bold ? "bold" : "normal",
                fontStyle: props.leaf.italic ? "italic" : "normal",
                textDecoration: textDecorationValue,
            }}>
                {props.children}

            </code>
        )
    }
    return (
        <span {...props.attributes} style = {{
            fontWeight: props.leaf.bold ? "bold" : "normal",
            fontStyle: props.leaf.italic ? "italic" : "normal",
            textDecoration: textDecorationValue,
        }}>
            {props.children}
        </span>        
    );
};

export default Leaf;