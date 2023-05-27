import { useState } from 'react';
import './App.css';
import Alphabets from './components/Alphabets';
import TopContainer from './components/TopContainer';

function App() {

  let data = ['A','S','D','F','J','K','L',';'];

  const[letter,setLetter] = useState('A');

  
  function getRandomletter(){
    let randomNumber = Math.floor(Math.random()*8);
    return data[randomNumber];
  }

  console.log(getRandomletter());
  console.log(getRandomletter());
  console.log(getRandomletter());
  console.log(getRandomletter());
  console.log(getRandomletter());
 
  return (
    <div className="App">
     <TopContainer/>
     <div className='word-container'>
       <div className='left-word-container'> 
          <Alphabets letter={letter}/>
          <Alphabets/>
          <Alphabets letter={letter}/>
          <Alphabets letter={letter}/>
        </div>
        <div className='right-word-container'> 
          <Alphabets/>
          <Alphabets/>
          <Alphabets/>
          <Alphabets/>
        </div>
     </div>
     
    </div>
  );
}

export default App;
