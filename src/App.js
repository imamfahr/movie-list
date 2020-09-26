import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom'


//pages
import Home from './pages/Home'
import NowPlaying from './pages/NowPlaying'
import Upcoming from './pages/Upcoming'
import MovieDetail from './pages/MovieDetail'
//Components
import Navbar from './components/Navbar'



function App() {
  return (
    <BrowserRouter>

    <Navbar />
    <Switch>
      <Route exact path ='/' component={Home}/>
      <Route path ='/movie/now-playing' component={NowPlaying}/>
      <Route path ='/movie/upcoming' component={Upcoming}/>
      <Route path ='/movie/:id' component={MovieDetail} />
    </Switch>

    
    </BrowserRouter>
  );
}

export default App;
