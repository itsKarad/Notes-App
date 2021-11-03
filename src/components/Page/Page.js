import React,{useState, useEffect} from 'react';
import { useParams } from 'react-router';
import './Page.css';
import Editor from '../Editor/Editor';
import PageHeader from './PageHeader';

const DUMMY_PAGES = [
    {
      id: "home",
      title: "Home",
      content : "Just some text for home."
    },
    {
      id: "docs",
      title: "Documentation",
      content : "Just some text for docs."
    },
    {
      id: "notes",
      title: "Meeting Notes",
      content : "Just some text for meeting notes."
    },
    {
      id: "projects",
      title: "Projects",
      content : "Just some text for projects."
    },
    {
      id: "public",
      title: "Public",
      content : "Just some text for public."
    },
];

const Page = (props) => {
    const pageId = useParams().pageId;
    const [pageTitle, setPageTitle] = useState("");
    const [input, setInput] = useState("");

    useEffect(() => {
        const selectedPage = DUMMY_PAGES.find(page => page.id === pageId);        
        setPageTitle(selectedPage.title);
        setInput(selectedPage.content);
    }, [pageId]);
    
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