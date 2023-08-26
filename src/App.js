import './App.css';
import { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './components/Header';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Profile from './components/Profile';
import Projects from './components/Projects';
import Footer from './components/Footer';

import React from 'react';
// import Darkmode from './components/Darkmode';


<style>
  @import url('https://fonts.googleapis.com/css2?family=Inter&display=swap%27);
</style>;

function App() {


  // const [darkMode, setDarkMode] = useState(false);

  // const [loading, setLoading] = useState(false);
  // useEffect(() => {
  //   setLoading(true);
  //   setTimeout(() => {
  //     setLoading(false);
  //   }, 1000);
  // }, []);


  return (
    <>
    <div className="App">
      <div className='container'>
{/* 
          
          <Darkmode/> */}
          <Header/>
          <Hero/>
          <Skills/>
          <Profile/>
          <Projects/>
         
      </div>
    </div>

    <Footer/>

    </>
  );
}

export default App;
