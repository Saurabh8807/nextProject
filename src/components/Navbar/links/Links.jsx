import Link from 'next/link'
import React from 'react'
import NavLink from './navLinks/navLinks'

function Links() {

    const links = [
      { name: 'Home', path: '/' },
      { name: 'About', path: '/about' },
      { name: 'Contact', path: '/contact' },
      { name: 'Blog', path: '/blog' },
    ]

    const session =true
    const isAdmin = true
  return (
    <div className='flex gap-8 mt-6'>{
        links.map((link)=>(
            <NavLink item={link} key={link.name}/>
        ))
        }
        {
          session?
          (
            <>
            {isAdmin &&              
            <NavLink item={{name:"Admin",path:"/admin"}}/>
          }
          <button className='Logout'>Logout</button>
            </>
          ) :(            
          <NavLink item={{name:"Login",path:"/login"}} key={link.name}/>
          )
        }
    </div>
  )
}

export default Links