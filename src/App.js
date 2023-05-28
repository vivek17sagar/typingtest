import { useState } from "react";
import "./App.css";
import TopContainer from "./components/TopContainer";
import KeyboardKey from "./components/KeyboardKey";
import Accuracy from "./components/Accuracy";
import Start from "./components/Start";

function App() {
  let data = ["A", "S", "D", "F", "J", "K", "L", ";"];

  const [correct, setCorrect] = useState(0);
  const [wrong, setWrong] = useState(0);

  const [accuracy, setAccuracy] = useState(false);
  const [mountwatch,setMountWatch] = useState(false);

  let letter = "";

  function mountWatchData(param){
    setMountWatch(param)
  }


  function getTime(param){
    setAccuracy(param);
  }
  
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
      {
        accuracy===false ? <div><TopContainer watch={mountwatch} func = {getTime} correct={correct} wrong={wrong} total={correct+wrong}/>
          <KeyboardKey data={data} userinput={getRandomletter()}/><Start func={mountWatchData}/></div>:
          <Accuracy total={correct+wrong} correct={correct} wrong={wrong}/>
    }
    </div>
  );
}

export default App;
