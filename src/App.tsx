import React from 'react';
import './App.css';
import Header from "./components/Header";
import Hero from "./components/Hero";
import Latest from "./components/Latest";

function App() {
  return (
    <div className="App">
          <Header/>
        <Hero/>
        <Latest/>
    </div>
  );
}

export default App;
