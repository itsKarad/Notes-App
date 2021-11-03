
import React from 'react';
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';

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
  }
];

const Pages = ({match}) => {
  
  return (      
    <div className="app-container container">
      <div className = "row">
        <div className = "col-4">
          <SideBar pages = {DUMMY_PAGES}></SideBar> 
        </div>
        <div className = "col-8">
          <Page></Page>
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
        <Redirect to="/home"></Redirect>
      </Switch>
    </Router> 
  );
}

export default App;
