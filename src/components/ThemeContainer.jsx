import { FaSun,FaMoon } from "react-icons/fa6";
import { useContext, useEffect, useState} from "react";
import {GlobalContext} from "../context/useGlobalContext";
import { TiShoppingCart } from "react-icons/ti"
import { Link } from "react-router-dom";

const colors =["#496989","#7469B6","#912BBC"]

const themes ={
  winter:"winter",
  dracula:"dracula",
}


function darkModeFromLocalStoage(){
  return localStorage.getItem("mode") || themes.winter
}

function ThemeContainer() {
  const [theme,setTheme] =useState(darkModeFromLocalStoage)
  const handleClick =() =>{
    const newTheme =theme==themes.winter ? themes.dracula:themes.winter
    setTheme(newTheme)
    localStorage.setItem("mode",newTheme)
  }
  useEffect(()=>{
    document.documentElement.setAttribute("data-theme",theme)
  },[theme])


  const {dispatch} =useContext(GlobalContext)
  const changeColor =(color )=>{
    dispatch({
      type:"CHANGE_NAVBAR_BG",
      payload:color,
    })
  }
  return (
    <div className="mb-10 py-3">
       <div className='align-element  justify-between flex items-center'>
        {/*colors */}
          <div className="flex flex-row gap-2">
            {colors.map((color)=>{
                return(
                <div
                  key ={color}
                  onClick={()=> changeColor(color)} 
                  className="h-7 w-7 rounded-full cursor-pointer" 
                  style={{backgroundColor:color}}
                ></div>
                )
            })}
          </div>
        {/* theme */}
         <div>
         <div className="dropdown dropdown-end">
         <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
        <div className="indicator">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
          <span className="badge badge-sm indicator-item">8</span>
        </div>
      </div>
      <div
        tabIndex={0}
        className="card card-compact dropdown-content bg-base-100 z-[1] mt-3 w-52 shadow">
        <div className="card-body">
          <span className="text-lg font-bold">8 Items</span>
          <span className="text-info">Subtotal: $999</span>
          <div className="card-actions">
            <button className="btn btn-primary btn-block">View cart</button>
          </div>
        </div>
      </div>
    </div>
              
            </div>
           <label className="swap swap-rotate">
              {/* this hidden checkbox controls the state */}
              <input type="checkbox"
                onClick={handleClick}
              />

                {/* sun icon */}
                <FaSun  className="swap-on fill-current w-6 h-6 mt-2 mr-1" />
               {/* moon icon */}
               <FaMoon className="swap-off fill-current w-6 h-6 mt-2 mr-1" />
            </label>
           
         </div>
       </div>
    </div>
  )
}

export default ThemeContainer