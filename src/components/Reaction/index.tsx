import React from 'react'

export default function Reaction({ icon, counter}) {
  return (
    <div className = "data">
        {icon}
        <span className="nu">{counter}k</span> 
    </div>
  )
}

