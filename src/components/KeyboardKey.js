import React from 'react'
import Alphabets from './Alphabets'
import '../css/KeyboardKey.css'

const KeyboardKey = ({data,userinput}) => {

  return (
    
    <div className="word-container">
    {
       data.map((item,index)=>{
        return index===userinput? <Alphabets letter={item}/>:<Alphabets/>
       }) 
    }
    </div>
  )
}

export default KeyboardKey