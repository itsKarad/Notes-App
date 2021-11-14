import React, {useState, useMemo, useCallback } from 'react';
import { createEditor} from 'slate'
import { Slate, Editable, withReact } from 'slate-react'
import { withHistory } from 'slate-history'
import './Editor.css';
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
import BulletBlock from './Blocks/BulletBlock';
import NumberedBlock from './Blocks/NumberedBlock';
import H1Block from './Blocks/H1Block';
import H2Block from './Blocks/H2Block';
import H3Block from './Blocks/H3Block';
import QuoteBlock from './Blocks/QuoteBlock';



const EditorBlock = (props) => {  
  const pageId = props.pageId;
  const localStorageLabel = "content_" + props.pageId;
  const [value, setValue] = useState(JSON.parse(localStorage.getItem(localStorageLabel)) || initialValue);
  const editor = useMemo(() => withHistory(withReact(createEditor())), []);
  
  const keyDownHandler = (e) => {       
    if(e.ctrlKey){
       
      if(e.key === "e"){
        e.preventDefault(); 
        toggleCodeMark(editor);          
      }
      else if(e.key === "b"){   
        e.preventDefault();        
        toggleBoldMark(editor);
      } 
      else if(e.key === "i"){
        e.preventDefault(); 
        toggleItalicMark(editor);
      }    
      else if(e.key === "u"){
        e.preventDefault(); 
        toggleUnderlineMark(editor);
      }
      else if(e.key === "s"){
        e.preventDefault(); 
        toggleStrikethroughMark(editor);
      }   
    }

  }
  const renderElement = useCallback((props) => {
    if(props.element.type === "bullet"){
      return <BulletBlock {...props}></BulletBlock>
    }
    else if(props.element.type === "numbered"){
      return <NumberedBlock {...props}></NumberedBlock>
    }
    else if(props.element.type === "h1"){
      return <H1Block {...props}></H1Block>
    }
    else if(props.element.type === "h2"){
      return <H2Block {...props}></H2Block>
    }
    else if(props.element.type === "h3"){
      return <H3Block {...props}></H3Block>
    }
    else if(props.element.type === "quote"){
      return <QuoteBlock {...props}></QuoteBlock>
    }
    else {
      return <TextBlock {...props}></TextBlock>
    }
  }, []);
  const renderLeaf = useCallback((props) => {
    return <Leaf {...props}></Leaf>
  }, []);
  const valueChangeHandler = (val) => {
    setValue(val);
    const isAstChange = editor.operations.some(
      op => "set_selection" !== op.type
    );
    if(isAstChange){
      // Save to local storage
      localStorage.setItem(localStorageLabel, JSON.stringify(val));
    }
  }
  return (
      <div className = "editor-container" key = {props.pageId}>
          <Slate 
            key = {pageId}
            editor={editor} 
            value={value} 
            onChange={valueChangeHandler}
          >
              <Toolbar editor = {editor}/>
              <Editable 
                
                  placeholder="Just start typing..."
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