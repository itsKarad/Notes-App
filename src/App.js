
import React from 'react';
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';

import SideBar from './components/SideBar/SideBar';
import Page from './components/Page/Page';
import './App.css';
import DUMMY_PAGES from './seed';


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
