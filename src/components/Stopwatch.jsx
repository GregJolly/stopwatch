import React from 'react'
import { useState, useEffect } from 'react'

export default function Stopwatch() {
    const [time, setTime] = useState(25)
    const [running, setRunning]= useState(false)
  
    useEffect (()=>{
      let interval
      if(running)
      {
        interval = setInterval(()=>{
          setTime((prevTime)=>prevTime + 10)
        }, 10)
      
      }
      else if(!running){
        clearInterval(interval); 
      }
  
      return ()=> clearInterval(interval)
    }, [running]) 
  
  return (
    <div  className='min-h-screen flex flex-col items-center justify-center bg-slate-900  gap-10'>

    <div className='text-9xl font-semibold text-white'>
      <span >{("0" + Math.floor((time/60000)%60)).slice(-2)}:</span>
      <span>{("0" + Math.floor((time/1000)%60)).slice(-2)}:</span>
      <span>{("0" + Math.floor((time/100)%60)).slice(-2)}</span>
      
    </div>
    <div className='flex justify-between gap-10'>
      {running ? (<button  className='uppercase font-semibold p-10 bg-slate-200 rounded-xl text-5xl hover:bg-orange-400'
       onClick={()=>{setRunning(false)}}>Stop</button>):
      (<button className='uppercase font-semibold p-10 bg-slate-200 rounded-xl text-5xl hover:bg-orange-400'
      onClick={()=>{setRunning(true)}}>Start</button>)}
      <button  className='uppercase font-semibold p-10 bg-slate-200 rounded-xl text-5xl hover:bg-orange-400'
      onClick={()=>{setTime(0)}}>Reset</button>
    </div>
  </div>

  )
}
