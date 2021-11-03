import React,{useState} from 'react';
import './Page.css';
import Editor from '../Editor/Editor';
import PageHeader from './PageHeader';

const Page = (props) => {
    const [pageTitle, setPageTitle] = useState(props.page.title);
    const [input, setInput] = useState(props.page.content);
    const inputChangeHandler = (e) => {
        setInput(e.target.value);
    }
    const pageTitleChangeHandler = (e) => {
        setPageTitle(e.target.value);
    }
    return (
        <div className="page-container">
            <PageHeader 
                value = {pageTitle} 
                onChange = {pageTitleChangeHandler}
            ></PageHeader>
            <div className = "page-content">
                <Editor 
                    onChange = {inputChangeHandler} 
                    value = {input}
                ></Editor>  
            </div>
            {pageTitle}
            {input}
        </div>
    );
}

export default Page;