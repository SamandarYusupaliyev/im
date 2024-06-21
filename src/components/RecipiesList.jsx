import { Link } from "react-router-dom"
import { CiHeart } from "react-icons/ci";
import {IoTrashOutline} from "react-icons/io5"
import { data} from "autoprefixer";

function RecipiesList({recipies}) {
  return <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
    {recipies.map((recipie)=>{
      return (
      <li key={recipie.id}>
        <div className="card w-96 bg-base-100 shadow-xl mt-4 mb-5">
       <figure>
        <img src={recipie.image} alt="Shoes"
         />
        </figure>
        <div className="card-body relative">
        <CiHeart className=" absolute w-7 h-7 -top-[200px] right-[20px]  cursor-pointer" />
        <h2 className="text-2xl font-bold -mt-3">{recipie.title}</h2>
        <div className="rating">
          <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400 w-4" />
          <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400 w-4" checked />
          <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400 w-4" />
          <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400 w-4" />
          </div>
        <p className=" text-[16px] font-normal pl-1 bg-amber-300 rounded w-20 ">{recipie.cookingTime}</p>
        <p className="line-clamp-3 mb-2">{recipie.method}</p>
       <div className="card-actions flex-nowrap items-center">
      <Link  to={`/singleRecipie/${recipie.id}`} className="btn btn-primary w-20 font-bold ">More</Link>
      <button onClick={()=>deleteRecipie(recipie.id)} className="btn btn-secondary">
          <IoTrashOutline/>
      </button> 
      </div>
      </div>
      </div>
      </li>
      )
    })}
  </ul>
}

export default RecipiesList
{/* <h3 className="text-3xl">{recipie.title}</h3>
<img src={recipie.image} alt="" /> */}