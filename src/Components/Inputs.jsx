import React from 'react'
import { UilSearchAlt, UilMapMarkerAlt } from '@iconscout/react-unicons'
import { useState } from 'react'

const Inputs = ({setQuery}) => {

  const[name,setName] = useState("");

  const handleOnClick = () => {
    if(name !== ""){
      setQuery({q:name});
    }
  }
  return (
    <div className='flex flex-row justify-center my-6'>
     <div className='flex flex-row w-3/4 items-center justify-center space-x-4'>
        <input type="text" value={name} onChange={(e)=>setName(e.currentTarget.value)}placeholder='Search for city...' className='text-xl font-light p-2 w-full shadow-xl focus:outline-none capitalize placeholder:lowercase'/>
        <UilSearchAlt size={25} onClick={handleOnClick} className='text-white text-lg cursor-pointer transition ease-out hover:scale-125'/>
        <UilMapMarkerAlt size={25} className='text-white text-lg cursor-pointer transition ease-out hover:scale-125'/>
     </div>

     <div className='flex flex-row w-1/4 items-center justify-center'>
        <button name='metric' className='text-xl text-white font-light'>&deg;C</button>
        <p className='text-white text-xl mx-1'>|</p>
        <button name='imperial' className='text-white text-xl font-light'>&deg;F</button>
     </div>
    </div>
  )
}

export default Inputs
