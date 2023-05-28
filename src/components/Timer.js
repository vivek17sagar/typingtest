import React,{useEffect, useState} from 'react'

const Timer = ({func}) => {

    let[timer,setTime] = useState(300);

    useEffect(() => {
        const interval = setInterval(() => {setTime(timer--)
          if(timer===0){
            func(true);
          }
        }, 1000);
    
        return () => clearInterval(interval);
      }, []);

  return (
    <>
        <div>Timer</div>
        <div>{Math.floor(timer/60)} min {timer%60} sec</div>
    </>
  )
}

export default Timer