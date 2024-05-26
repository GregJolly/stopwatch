  import { useState } from "react"
  import Stopwatch from "./components/Stopwatch"



  function App() {

    const [showStopwatch, setShowStopWatch] = useState(false)
    return (
      <>
      <div  className='min-h-screen flex flex-col items-center justify-center bg-slate-900  gap-10'>
      { !showStopwatch ?      
      ( <button className="text-5xl flex justify-between gap-10 font-bold bg-orange-400 p-10 rounded-xl cursor-pointer
      hover:bg-orange-300 hover:text-6xl duration-200 text-slate-900 "
        onClick={()=>setShowStopWatch(true)}>

      <i className="fa-solid fa-stopwatch"></i> 
        </button>):
        (<Stopwatch />)
      }
      </div>
      </>
    )
  }

  export default App
