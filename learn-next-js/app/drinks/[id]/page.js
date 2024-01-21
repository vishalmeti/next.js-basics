'use-client'
import React from 'react'
import Link from 'next/link';
const url = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=';

const getSingleDrink = async(id) =>{
  const urlString = url+(id)
  const res = await fetch(urlString)
  if(!res.ok){
    throw new Error('Failed to fetch the drink!')
  }
  return res.json()
}

const SingleDrinkPage = async({params}) => {
    const data = await getSingleDrink(params.id)
    console.log(data.drinks[0])
  return (
    <div className="mockup-browser border bg-base-300">
  <div className="mockup-browser-toolbar">
    <div className="input">DRINK : {data.drinks[0].strDrink}</div>
  </div>
  <div className=" px-4 py-16 bg-base-200">
    
    <span className='font-bold' >INGREDIENTS</span>: {data.drinks[0].strIngredient1}
                                                    {data.drinks[0].strIngredient2}
                                                    {data.drinks[0].strIngredient3}
                                                  <br/>
    <span className='font-bold' >INSTRUCTIONS</span>: {data.drinks[0].strInstructions}
    
  </div>
  <Link href='/drinks'className='btn btn-neutral' > Back to drinks </Link> <br/>
</div>
  )
}

export default SingleDrinkPage