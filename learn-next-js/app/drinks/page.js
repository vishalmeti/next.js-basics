
'use client'
const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a'
import DrinksList from '@/components/DrinksList'

//so here we are adding a delay of 1sec in fetching data from the url. As we know this is a server componenet
// we are fetching data from online server and displaying to user.. if we want a loading screen till the data is 
//displayed we can do a loading.js file . name should be loading.js only.. nothing else.
// so untill the data is ready to be show... next.js will show the loading.js page.

const fetchData = async() =>{
  await new Promise ((resolve)=>setTimeout(resolve,1000))
  const response = await fetch (url)
if(!response.ok){
  throw new Error("Failed to fetch drinks")
}
  const data = await response.json()
  return data;
}

const Drinks = async() => {
  const data = await fetchData();
  // console.log(data.drinks)
  return (
    <div>
      <h1 className='text-4xl font-bold'>Drinks</h1> 
      <DrinksList drinkList={data.drinks } />
    </div>
  )
}

export default Drinks