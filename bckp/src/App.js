import React,{useState} from 'react';
import {Route} from 'react-router-dom';

import Navbar from './components/Navbar/Index'
import Main from './components/Main/Index'




const App = () =>{
   return(
      <div className="container">
         <Route exact path="/" render={() =>( <Navbar/> )} />
      </div>
   )
}

export default App;
