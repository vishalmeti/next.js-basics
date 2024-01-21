import React from 'react'

let bredCrumb=() =>{

    return <div className="text-sm breadcrumbs">
    <ul>
      <li>
          Home
      </li> 
      <li>
          Client
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