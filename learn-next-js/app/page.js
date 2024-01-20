import Link from 'next/link'
import React from 'react'

const HomePage = () => {
  return (
    <div>
      <h1 className='text-5xl my-8 font-bold'>Next.Js Tutorial</h1>
      <Link href='/client' className='btn btn-accent' >Get Started</Link>
    </div>
  )
}

export default HomePage