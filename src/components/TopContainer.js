import React from 'react'
import Timer from './Timer'
import '../css/TopContainer.css'

const TopContainer = () => {

  return (
    <div className='topConatiner'>
        <div className='left-content'>
            <div>Correct :- <span>0</span></div>
            <div>Wrong :- <span>0</span></div>
            
        </div>
        <div>
           <h1>Typing-Test</h1>
        </div>
        <div className='right-content'>
            <Timer/>
        </div>
    </div>
  )
}

export default TopContainer