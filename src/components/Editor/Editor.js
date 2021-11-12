import React from 'react';
import { createEditor } from 'slate'
import { Slate, Editable, withReact } from 'slate-react';
import './Editor.css';
const Editor = (props) => {
    return (
        <div className = "editor-container">
            <textarea 
            placeholder = "Just start typing..."
            id="editor" 
            className = "editor"
            rows="10" 
            cols="50"
            value = {props.value}
            onChange = {props.onChange}
            ></textarea>
        </div>
    );
}

export default Editor;