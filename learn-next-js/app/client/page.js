'use client'
import { useState } from "react"

const ClientPage = () => {
  const [count, setcount] = useState(0)
  return (
    <div>
      <h1 className='text-7xl font-bold mb-4 '>Counter : {count}</h1>
      <button className="btn btn-neutral mx-1" onClick={()=>{
        setcount(count+1)
      }} >
        Increase
      </button>
      <button className="btn btn-warning mx-1" onClick={()=>{
        setcount(0)
      }} >
        Re-set
      </button>
      <button className="btn btn-neutral mx-1" onClick={()=>{
        setcount(count-1)
      }} >
        Decrease
      </button>
    </div>
  )
}

export default ClientPage