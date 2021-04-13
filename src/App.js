import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Results from './components/Results';
import requests from './api/requests'

function App() {

  const [selectedOption, setSelectedOption] = useState(requests.fetchTrending)

  return (
    <div className="App">
      <Header />
      <Navbar setSelectedOption={setSelectedOption} />
      <Results selectedOption={selectedOption} />
    </div>
  );
}

export default App;
