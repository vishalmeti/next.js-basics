import Link from 'next/link'
import React from 'react'


const links=[
    {href:'/client', label: 'client'},
    {href:'/drinks', label: 'drinks'},
    {href:'/tasks', label: 'tasks'},
    {href:'/query', label: 'query'},
]



const Navbar = () => {
  return (
    <nav className='global-test bg-base-300 py-4' >
        <div className="global-navStyles navbar">
            <Link href='/' className='btn btn-primary'>Home</Link>
        </div>
        <ul className='menu menu-horizontal md:ml-8' >
            {links.map((link)=>{
                return <li key={link.href}>
                    <Link href={link.href} className='capitalize'>{link.label}</Link>
                </li>
            })}
        </ul>
    </nav>
  )
}

export default Navbar