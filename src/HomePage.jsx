

import React ,{useState}from 'react';
//import { Button } from 'react';
//import { Button } from 'react-bootstrap';

function HomePage() {
  const [first, setfirst] = useState(0)

  function incremental(){
    setfirst(prevState => (prevState + 1))
  }
  function decremental(){
    setfirst(prevState=>(prevState - 1))
  }

  return (
   <div className='app'>
    <button onClick={incremental}>-</button>
   <h1>{first}</h1>
   <button onClick={decremental}>+</button>
   </div>
   
   
  )
}

export default HomePage

