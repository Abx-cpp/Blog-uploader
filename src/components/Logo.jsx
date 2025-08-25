import React from 'react'
import logo from '../assets/Logo.png'

function Logo({width =  '10px'}) {
  return (
    <div className={`w-full max-w-[${width}] rounded-lg`}>
      <img src={logo} alt="Logo" />
    </div>
  )
}

export default Logo