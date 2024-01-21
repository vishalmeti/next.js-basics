'use client'
// {props.drinkList.map((drink)=>{
//     renderTabledrink(drink)
// })}
import Link from 'next/link'
import {useState} from 'react'

const TableView = ({...props}) => (
    <div className="overflow-x-auto">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>Name</th>
            <th>Alcoholic</th>
            <th>Instructions</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {props.drinkList.map((drink) => (
            <tr key={drink.idDrink}>
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img
                        src={`/tailwind-css-component-profile-${drink.strDrinkThumb}@56w.png`}
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">{drink.strDrink}</div>
                    <div className="text-sm opacity-50">{drink.strCategory}</div>
                  </div>
                </div>
              </td>
              <td>
                <br />
                <span className={`badge badge-ghost btn-sm`}>
                  {drink.strAlcoholic}
                </span>
              </td>
              <td>{drink.strInstructions}</td>
              <th>
                <Link href={`/drinks/${drink.idDrink}`} >
                  <button className="btn btn-info btn-sm" >Know more.</button>
                </Link>
              </th>
            </tr>
          ))}
        </tbody>
        {/* foot */}
      </table>
    </div>
  );
  
  const CardView = ({...props})=>{
    <div class="card w-72 h-96 bg-base-100 shadow-xl">
  <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" class="w-full h-40 object-cover" /></figure>
  <div class="card-body">
    <h2 class="card-title">Shoes!</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div class="card-actions justify-end">
      <button class="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
  }

  const Toggle = () => {
    const [state, setState] = useState(true);
  
    const handleToggleChange = () => {
        setState(!state)
    };
  
    return (
      <div className="form-control">
        <label className="label cursor-pointer">
          <span className="label-text right-0">View Type</span>
          <input
            type="checkbox"
            className="toggle"
            checked={isChecked}
            onChange={handleToggleChange}
          />
        </label>
      </div>
    );
  };
const DrinksList = ({...props}) => {

    return (
        <TableView {...props}/>
    );
  };
  
  export default DrinksList;
  