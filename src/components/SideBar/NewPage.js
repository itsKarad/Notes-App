import React, {useState} from 'react';
import {NavLink} from 'react-router-dom';
import './NewPage.css';
const NewPage = (props) => {
    const [newPageTitle, setNewPageTitle] = useState('New page');
    const [clicked, setIsClicked] = useState(false);
    const [isCreated, setIsCreated] = useState(false);
    const onClick = () => {
        setIsClicked(true);
    }
    const onCreate = () => {
        // send request to backend
        props.onCreateNewPage(newPageTitle);
        console.log("Added page!");
        setIsClicked(false);
    }
    const onKeyDown = (e) => {        
        if (e.key === 'Enter') {
            console.log("ent")
            setIsCreated(true);
            onCreate();
        }
        else{
            setIsCreated(false);
        }

    }
    const titleChangeHandler = (e) => {
        console.log(e.target.textContent);
        setNewPageTitle(e.target.textContent);
    };
    const onBlur = () => {
        console.log("blur")
        setIsCreated(true);
        onCreate();
    }
    return (
        <div className="sidebar-item">
            {
                clicked && !isCreated &&
                <span  
                    contentEditable = {true} 
                    placeholder = "New page" 
                    onKeyDown = {onKeyDown} 
                    value = {newPageTitle}
                    onInput = {titleChangeHandler}
                    suppressContentEditableWarning={true}
                    onBlur = {onBlur}>
                    New page
                </span>
            } 
            
            {
                isCreated && 
                <NavLink activeStyle = {{color: "black"}} to = {`/${props.id}`} className = "sidebar-link">
                    {props.label}
                </NavLink>
            }
            {
                !clicked && 
                <button className = "sidebar-link" onClick = {onClick}>
                    +
                </button> 
            }                   
        </div>
    );
}

export default NewPage;