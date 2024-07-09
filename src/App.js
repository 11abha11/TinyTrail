import { useState } from 'react';
import './App.css';
import AnimatedBackground from './AnimatedBackground';
import LinkResult from './LinkResult';
import LinkShortener from './LinkShortener';

function App() {
  const [inputValue , setInputValue] = useState("");

  return (
  <div className="container">
    <LinkShortener setInputValue={setInputValue}/>
    <AnimatedBackground/>
    <LinkResult inputValue = {inputValue}/>
  </div>
  );
}

export default App;