
import '../App.css';
import { BrowserRouter as Router, Routes, Route, NavLink} from "react-router-dom";

import Home from "./Home.jsx";
import Header from "./Header.jsx";
import TicTacToe from "./TicTacToe.jsx";
import Quiz from "./Quiz.js"; 

import { LanguageProvider } from './Language';
import LanguageSelector from './LanguageSelector';
import { useState } from 'react';


function App() {

  return (
    <LanguageProvider className="App">
    <div className="App">
    <div className='Header'>
        <Header />
        <LanguageSelector/>
    </div>
      <Router>
        
        <div className='nav nav-tabs'><nav  role='tablist' style={{display: 'block'}}> 
          <div><NavLink className='NavLink' to='/'>Home</NavLink></div>
          <div><NavLink className='NavLink' to='/TicTacToe'>TicTacToe</NavLink></div>
          <div><NavLink className='NavLink' to='/Quiz'>Quiz</NavLink></div>
        </nav>
        </div>
        <Routes>
          <Route path="/" element ={<Home />}/>
          <Route path="TicTacToe" element ={<TicTacToe />}/>
          <Route path="Quiz" element ={<Quiz />}/>
        </Routes>
      </Router>
    </div>
    </LanguageProvider>
  );
}

async function download(){
  let token = "d74e4cdf0df41da5a54c";
  let url = "https://core.dit.upm.es/api/quizzes/random10wa?token="+token;
  let array = []
  fetch(url)
  .then(res => res.json())
  .then(
    (result) => {
      array= [...result];

      });
  
  return array;
}

export default App;
