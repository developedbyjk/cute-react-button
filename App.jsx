import React from "react"

export default function App() {
  
  const [gameRunning, setGameRunning] = React.useState(false)
  

function toggle(){
  setGameRunning(!gameRunning)
}

    return (
        <div>       
          <button className = 'video-game-button' onClick={toggle}>
            { gameRunning ? 'Pause' : 'Play '}
          </button>
        </div>
  )
}