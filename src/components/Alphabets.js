import React from 'react'
import '../css/Alphabets.css'

const Alphabets = ({letter}) => {
  return (
    <div className='keybox'>
        <div className='key'>{letter}</div>
    </div>
  )
}

export default Alphabets