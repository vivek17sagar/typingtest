import React,{useEffect, useState} from 'react'

const Timer = () => {

    const[time,setTime] = useState({
        minute: 5,
        second: 0,
        // startTime: 300
    });

    function leftTime(){
        let timer  = time.minute*60+time.second;
        let minute = Math.floor(timer/60);
        let sec = timer%60-1;
        let left = startTime-1;

        console.log(time)
        setTime({...time,[key]:value})
    }
    useEffect(() => {
        const interval = setInterval(() => leftTime(), 1000);
    
        return () => clearInterval(interval);
      }, []);

  return (
    <>
        <div>Timer</div>
        <div>{time.minute} min {time.second} sec</div>
    </>
  )
}

export default Timer