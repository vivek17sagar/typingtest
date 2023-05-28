import { useState } from "react";
import "./App.css";
import TopContainer from "./components/TopContainer";
import KeyboardKey from "./components/KeyboardKey";

function App() {
  let data = ["A", "S", "D", "F", "J", "K", "L", ";"];

  const [correct, setCorrect] = useState(0);
  const [wrong, setWrong] = useState(0);

  let letter = "";
  
  function getRandomletter() {
    let randomNumber = Math.floor(Math.random() * 8);
    letter = data[randomNumber];
    return randomNumber;
  }

  function handleKeyDown(e){
      letter.includes((e.key).toUpperCase())?setCorrect(correct+1):setWrong(wrong+1)
  }

  

  return (
    <div className="App" tabIndex={0} onKeyDown={handleKeyDown}>
      <TopContainer correct={correct} wrong={wrong}/>
      <KeyboardKey data={data} userinput={getRandomletter()}/>
    </div>
  );
}

export default App;
