import React, { useState } from 'react'

export default function Reaction({ icon, counter}) {
    const [count, setCount] = useState(counter)
    function incrementar(){
        setCount(count + 1);
    }
  return (
    <div className = "data" onClick={incrementar}>
        {icon}
        <span className="nu">{count}k</span> 
    </div>
  )
  }



