import React from 'react';
import {
    toggleBoldMark, 
    toggleCodeMark, 
    toggleItalicMark, 
    toggleStrikethroughMark, 
    toggleUnderlineMark,
  } from './util';

const Toolbar = (props) => {
    const handleMouseDown = (id) => {

    }
    return (
        <div>
            <button onMouseDown = {event => {
                event.preventDefault();
                toggleBoldMark(props.editor);
            }}>B</button>
            <button onMouseDown = {event => {
                event.preventDefault();
                toggleItalicMark(props.editor);
            }}>i</button>
            <button onMouseDown = {event => {
                event.preventDefault();
                toggleUnderlineMark(props.editor);
            }}>U</button>
            <button onMouseDown = {event => {
                event.preventDefault();
                toggleStrikethroughMark(props.editor);
            }}>S</button>
            <button onMouseDown = {event => {
                event.preventDefault();
                toggleCodeMark(props.editor);
            }}>Code</button>
        </div>
    );

};

export default Toolbar;