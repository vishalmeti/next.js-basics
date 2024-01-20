'use client'
//here we use the above text to tell next.js that let this file be client comppoenet.
//there are 2 types of components i) server-comps ii) client-comps

//in server comps.. user cant interact with the page thats why the current page cant be server comp as
//user needs toclick and increment ie user needs to interact with the page hence we making it client comp

// i) server components run in online server and return the result to user.. bcz of that any console.log that are written
// in server components wont be logged in browser console as the comp will be executed in some 
// online server, to see such logs we need to check vscode console

//ii) client components run in client device. it works similar to all other basic react framework

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