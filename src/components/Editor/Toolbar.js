import React from 'react';
import {
    toggleBoldMark, 
    toggleCodeMark, 
    toggleItalicMark, 
    toggleStrikethroughMark, 
    toggleUnderlineMark,
    toggleBulletBlock,
    toggleNumberedBlock,
    toggleH1Block,
    toggleH2Block,
    toggleH3Block,
    toggleQuoteBlock
  } from './util';

const Toolbar = (props) => {
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
            <button onMouseDown = {event => {
                event.preventDefault();
                toggleBulletBlock(props.editor);
            }}>Bullet</button>
            <button onMouseDown = {event => {
                event.preventDefault();
                toggleNumberedBlock(props.editor);
            }}>1.</button>
            <button onMouseDown = {event => {
                event.preventDefault();
                toggleH1Block(props.editor);
            }}>H1</button>
            <button onMouseDown = {event => {
                event.preventDefault();
                toggleH2Block(props.editor);
            }}>H2</button>
            <button onMouseDown = {event => {
                event.preventDefault();
                toggleH3Block(props.editor);
            }}>H3</button>
            <button onMouseDown = {event => {
                event.preventDefault();
                toggleQuoteBlock(props.editor);
            }}>Q</button>
        </div>
    );

};

export default Toolbar;