import React, {useState, useEffect} from 'react';
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';

import SideBar from './components/SideBar/SideBar';
import Page from './components/Page/Page';
import './App.css';
import DUMMY_PAGES from './seed';
import useHttp from './hooks/use-http';


const Pages = ({match}) => {
  const [pages, setPages] = useState([]);
  const {isLoading, error, sendRequest, resetError} = useHttp();

  useEffect(() => {
    const fetchPages = async() => {
      const data = await sendRequest({url : "https://react-http-17b94-default-rtdb.firebaseio.com/pages.json"});
      console.log(data);
      setPages(data);
    }
    fetchPages();
  }, []);
  
  if(isLoading){
    return (      
      <div className="app-container container">
        <div className = "row">
          <h1>Loading...</h1>
        </div>     
      </div>      
    ); 
  }
  else if(pages.length === 0){
    return (      
      <div className="app-container container">
        <div className = "row">
          <h1>There was some error while fetching pages from Firebase.</h1>
        </div>     
      </div>      
    ); 
  }
  else{
    return (      
      <div className="app-container container">
        <div className = "row">
          <div className = "col-4">
            <SideBar pages = {pages}></SideBar> 
          </div>
          <div className = "col-8">
            <Page pages = {pages}></Page>
          </div>
        </div>     
      </div>      
    );
  }
      
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
