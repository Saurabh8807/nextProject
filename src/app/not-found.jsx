import Link from 'next/link'
import React from 'react'

function Notfound() {
  return (
    <>
        <div>Notfound</div>
        <p>Sorry, the page you are looking for does not exists</p>
        <Link href="/">Go to Home Page </Link>
    </>
  )
}

export default Notfound
