import React from 'react'

const TimeAndLocation = () => {
  return (
    <div>
      <div className='flex items-center justify-center my-6'>
        <p className='text-white text-xl font-extralight'>
            Sunday, 22 January 2023 | Local Time: 12:48 PM
        </p>
      </div>

      <div className='flex items-center justify-center my-3'>
        <p className='text-white text-xl font-medium'>
            Toronto, CA
        </p>
      </div>

    </div>
  )
}

export default TimeAndLocation
