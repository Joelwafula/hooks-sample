import React, { useState } from 'react'

const AnotherButton = () => {

    const [set, setState] = useState(0)

    function incremental(){
        setState(current => current+1)
        setState(current => current+1)
        setState(current => current+1)
        setState(current => current+1)
        setState(current => current+1)

    }
    function decremental(){
        setState(current => current-1)
        setState(current => current-1)
        setState(current => current-1)
        setState(current => current-1)
        setState(current => current-1)
    }
  return (
    <div><button onClick={decremental}> -</button>
    <h1>{set}</h1>
    <button onClick={incremental}>+ </button>

    
    </div>
  )
}

export default AnotherButton