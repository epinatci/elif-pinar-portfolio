import './App.css';

import Header from './components/Header';
import Profile from './components/Profile';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Footer from './components/Footer';

import React from 'react';
import Hero from './components/Hero';

<style>
  @import url('https://fonts.googleapis.com/css2?family=Inter&display=swap%27);
</style>;

function App() {
  return (
    <div className="App">
      <div className='container'>

          <Header/>
          <Hero/>
          <Skills/>
          <Profile/>
          <Projects/>
          <Footer/>

      </div>
    </div>
  );
}

export default App;
