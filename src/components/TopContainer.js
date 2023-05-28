import React from 'react'
import Timer from './Timer'
import '../css/TopContainer.css'

const TopContainer = ({watch,func,correct,wrong,total}) => {

  return (
    <div className='topConatiner'>
        <div className='left-content'>
            <div>Correct :- <span>{correct}</span></div>
            <div>Wrong :- <span>{wrong}</span></div> 
            <div>Total :- <span>{total}</span></div>   
        </div>
        <div>
           <h1>Typing-Test</h1>
        </div>
        
        <div className='right-content'>
         {watch===true?<Timer func={func}/>:null}
        </div>
    </div>
  )
}

export default TopContainer