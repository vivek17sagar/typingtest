import React from 'react'
import Alphabets from './Alphabets'
import '../css/KeyboardKey.css'

const KeyboardKey = ({data,userinput}) => {

  return (
    
    <div className="word-container">
    {
       data.map((item,index)=>{
        return index===userinput? <Alphabets key={index} letter={item}/>:<Alphabets key={index}/>
       }) 
    }
    </div>
  )
}

export default KeyboardKey