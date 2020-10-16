import React from 'react';
import logo from './logo.svg';
import './App.css';
import Jumbo from './components/jumbo'
import About from './components/about'
import Shop from './components/shop'
import Team from './components/team'
import Contact from './components/contact'
import Footer from './components/footer'

function App() {
  return (
   // Retourne les composants de la page
   <div className='container'>
    <Jumbo />
    <About />
    <Shop />
    <Team />
    <Contact />
    <Footer />
   </div>
   
  );
}

export default App;
