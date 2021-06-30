import logo from './logo.svg';
import React from 'react';
import './App.css';
import Sidebar from './Sidebar';
import MainChat from './MainChat';
import { BrowserRouter as Router, Switch,Route, Link} from "react-router-dom"
import Login from './Login';

function App() {
  return (
    <div className="app">
       <div className="main-body">
        <Router>
          <Switch>
            <Route path='/'>
             <Sidebar/>
             <MainChat/>
            </Route>
            <Route path= '/login'>
              <Login/>
            </Route>
          </Switch>
        </Router>
          
       </div>
       {/* <h1>This is our messaging app home page component</h1> */}

    </div>
  );
}

export default App;