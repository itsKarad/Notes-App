import React,{useState, useEffect} from 'react';
import ReactMarkdown from 'react-markdown'
import { useParams } from 'react-router';
import './Page.css';
import EditorBlock from '../Editor/Editor';
import PageHeader from './PageHeader';
import Preview from '../Preview/Preview';

const Page = (props) => {
    const pageId = useParams().pageId;
    console.log(pageId);
    const selectedPage = props.pages.find(page => page.id === pageId); 
    const [pageTitle, setPageTitle] = useState(selectedPage.title);
    const [input, setInput] = useState(selectedPage.content); 
    useEffect(() => {
        setPageTitle(selectedPage.title);
        setInput(selectedPage.content);
    }, [selectedPage]);
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
                <EditorBlock 
                    onChange = {inputChangeHandler} 
                    value = {input}
                    pageId = {pageId}
                ></EditorBlock>  
            </div>
        </div>
    );
}

export default Page;