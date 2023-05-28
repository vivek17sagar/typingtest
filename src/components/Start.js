import React, { useState } from 'react'
import '../css/Start.css'

const Start = ({func}) => {

    let[hide,setHide] = useState(true);

  return (
    
        hide===true?<div><div className='startBox'>
        <div className='Start' onClick={()=>{setHide(false)
            func(true)
        }}>Start</div>
        </div></div>:null
    
  )
}

export default Start