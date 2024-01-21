import React from 'react'
import Link from 'next/link'
let bredCrumb=() =>{

    return <div className="text-sm breadcrumbs">
    <ul>
      <li>
          <Link href='/' >Home</Link>
      </li> 
      <li>
      Drinks
      </li> 
    </ul>
  </div>
} 

const layout = ({children}) => {
  return (
    <div>{bredCrumb()} {children}</div>
  )
}

export default layout