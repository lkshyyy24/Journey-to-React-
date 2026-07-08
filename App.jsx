import React, { useState } from 'react'

function App() {
const [color,setColor] = useState('bg-white')
  return (
<div className={`h-screen ${color} flex flex-col items-center justify-center transition-all duration-500`}>

<div className='flex flex-col bg-white  w-{500px} shadow-2xl rounded-xl'>
    
  <h1 className=' m-4 flex justify-center'>Color Changing </h1>
  <p className=' m-4 flex justify-center'>press buttons to chnage color </p>
  <button 
  className='p-4 bg-red-100 rounded-xl m-3'
  onClick = {() => setColor('bg-red-600')} >
    press to change to red
  </button>
    <button className='p-4 bg-yellow-100 rounded-xl m-3'
  onClick = {() => setColor('bg-yellow-300')} >
    press to change to yellow
  </button>
  <button className='p-4 bg-green-100 rounded-xl m-3'
  onClick = {() => setColor('bg-green-200')} >
    press to change to green
  </button>
    <button className='p-4 bg-purple-100 rounded-xl m-3'
  onClick = {() => setColor('bg-purple-200')} >
    press to change to purple
  </button>
    <button className='p-4 bg-white rounded-xl m-3'
  onClick = {() => setColor('bg-white')} >
    press to change to default
  </button>
</div>
</div>

  )
}

export default App
