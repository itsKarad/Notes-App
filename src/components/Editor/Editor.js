import React, {useState, useMemo, useCallback, useEffect } from 'react';
import { createEditor, Descendant, Transforms, Editor, Element as SlateElement, Text} from 'slate'
import { Slate, Editable, withReact, useSlate } from 'slate-react'
import isHotkey from 'is-hotkey'
import { withHistory } from 'slate-history'
import './Editor.css';
import CodeBlock from './Blocks/CodeBlock';
import TextBlock from './Blocks/TextBlock';
import Leaf from './Blocks/Leaf';
import {
  toggleBoldMark, 
  toggleCodeMark, 
  toggleItalicMark, 
  toggleStrikethroughMark, 
  toggleUnderlineMark,
} from './util';
import Toolbar from './Toolbar';



const EditorBlock = (props) => {  
    const [value, setValue] = useState(JSON.parse(localStorage.getItem("content")) || initialValue);
    const editor = useMemo(() => withHistory(withReact(createEditor())), []);
    
    const keyDownHandler = (e) => {       
      if(e.ctrlKey){
        e.preventDefault();  
        if(e.key === "e"){
          toggleCodeMark(editor);          
        }
        else if(e.key === "b"){          
          toggleBoldMark(editor);
        } 
        else if(e.key === "i"){
          toggleItalicMark(editor);
        }    
        else if(e.key === "u"){
          toggleUnderlineMark(editor);
        }
        else if(e.key === "s"){
          toggleStrikethroughMark(editor);
        }   
      }

    }
    const renderElement = useCallback((props) => {
      if(props.element.type === "code"){
        return <CodeBlock {...props}></CodeBlock>
      }
      else {
        return <TextBlock {...props}></TextBlock>
      }
    });
    const renderLeaf = useCallback((props) => {
      return <Leaf {...props}></Leaf>
    });

    return (
        <div className = "editor-container">
            <Slate 
              editor={editor} 
              value={value} 
              onChange={val => {                
                setValue(val);
                const isAstChange = editor.operations.some(
                  op => "set_selection" !== op.type
                );
                console.log(isAstChange);
                console.log(val);
                if(isAstChange){
                  // Save to local storage
                  localStorage.setItem("content", JSON.stringify(val));
                }
              }}
            >
                <Toolbar editor = {editor}/>
                <Editable 
                    placeholder="Enter some rich text…"
                    onKeyDown = {keyDownHandler}
                    renderElement = {renderElement}
                    renderLeaf = {renderLeaf}
                />
            </Slate>
        </div>
    );
}


const initialValue = [
  {
    type: "paragraph",
    children: [{
      text: "A line of text in a paragraph!!!"
    }]
  },
]

export default EditorBlock;