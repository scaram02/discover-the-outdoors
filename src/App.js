import React from 'react';
import './App.css';
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home'
import About from './components/About'
// import {posts as DiscoverList} from './components/DiscoverList'
import DiscoverList from './components/DiscoverList'
import Nav from './components/Nav'
import DiscoverDetails from './components/DiscoverDetails'
import Map from'./components/Map'


function App() {
  return (
  <BrowserRouter>
    <Nav />
    <div>
      <Switch>
        <Route exact path="/">
     <Home />
     </Route>

     <Route path='/about'>
     <About />
     </Route>

     {/* <Route 
     exact path='/discover'>
    <DiscoverList />
     </Route> */}
  
  <Route 
    exact path='/discover'
    component={DiscoverList}
    >
    </Route>
    

    <Route 
    exact path='/discover/:topic'
    component={DiscoverDetails}
    >
    </Route>

    <Route 
    exact path='/map'
    component={Map}
    >
    </Route>


     </Switch>
    </div>
   
  </BrowserRouter>
  );
}

export default App;
