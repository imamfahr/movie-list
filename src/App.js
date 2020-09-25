import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom'


//pages
import Home from './pages/Home'
import ListPage from './pages/ListPage'
//Components
import Navbar from './components/Navbar'



function App() {
  return (
    <BrowserRouter>

    <Navbar />

    <Switch>
      <Route exact to ='/' component={Home}/>
      <Route to ='/ListPage' component={ListPage}/>

    </Switch>

    
    </BrowserRouter>
  );
}

export default App;
