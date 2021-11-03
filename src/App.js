
import React, {useState, useEffect} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import SideBar from './components/SideBar/SideBar';
import Page from './components/Page/Page';
import './App.css';

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

const Pages = ({match}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(null);
  const {
    params: {pageId},
  } = match;
    
  // This works
  useEffect(() => {
    setIsLoading(true);
    console.log(pageId);
    const selectedPage = DUMMY_PAGES.find(p => p.id === pageId);
    console.log(selectedPage);
    setPage(selectedPage);    
    setIsLoading(false);
  }, [pageId]);

  if(isLoading){
    return (
      <div className="app-container container">
        <div className = "row">
          <div className = "col-4">
            <SideBar pages = {DUMMY_PAGES}></SideBar> 
          </div>
          <div className = "col-8">
            <h3>Loading...</h3>
          </div>
        </div>     
      </div> 
    )
  }
  return (      
    <div className="app-container container">
      <div className = "row">
        <div className = "col-4">
          <SideBar pages = {DUMMY_PAGES}></SideBar> 
        </div>
        <div className = "col-8">
          <Page page = {page}></Page>
        </div>
      </div>     
    </div>      
  );    
};

function App() {   
  return (  
    <Router>
      <Switch>      
        <Route path="/:pageId" component = {Pages} exact>
        </Route>
      </Switch>
    </Router> 
  );
}

export default App;
