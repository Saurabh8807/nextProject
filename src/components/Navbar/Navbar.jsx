import Link from 'next/link'
import React from 'react'
import Links from './links/Links'

const Navbar = () => {

  

  return (
    <div className='flex justify-between h-20 w-4/5 mx-auto text-white'>
      <div className='mt-6'>logo</div>
      <div>
        <Links/>
      </div>
    </div>
  )
}

export default Navbar