"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

function NavLink({item}) {
    const pathName = usePathname()
    console.log(item)
  return (
    <div>
        <Link href={item.path} className={`${pathName==item.path ? "block bg-white  text-black w-20 h-8 text-center rounded-2xl":"block w-20 h-8 text-center"}`}>
            {item.name}
        </Link>
    </div>
  )
}

export default NavLink