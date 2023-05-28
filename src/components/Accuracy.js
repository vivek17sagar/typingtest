import React from 'react'
import '../css/Accuracy.css'

const Accuracy = ({total,correct,wrong}) => {
  return (
    <div className='footer'>
    <div>
        <div className='keypressTotal result'>Total KeyPress :- {total}</div>
        <div className='correctPress result'>Total Correct :- {correct}</div>
        <div className='wrongPress result'>Total Wrong :- {wrong}</div>
        <div className='speed result'>WPM :- {Math.floor(total/5)}</div>
    </div>
    <div>
        <div className='accuracyBox'>Accuracy :- {Math.floor((correct/total)*100)}%</div>
        </div>
    </div>
  )
}

export default Accuracy