import './App.css';
import Header from './components/Header';
import Profile from './components/Profile';
import Project from './components/Project';
import Skills from './components/Skills';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <div className='container'>

          <Header/>
          <Skills/>
          <Project/>
          <Profile/>
          <Footer/>

      </div>
    </div>
  );
}

export default App;
