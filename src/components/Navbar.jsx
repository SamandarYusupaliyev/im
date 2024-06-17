// src/components/Navbar.js
import React, { useState, useEffect } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../firebase/firebaseConfig";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { clear } from "../features/userSlice";
import { Link } from "react-router-dom";
import { TiShoppingCart } from "react-icons/ti"


import Weather from "./Weather";
function Navbar() {
  const { user } = useSelector((state) => state.currentUser);
  const dispatch = useDispatch();
  const [weatherCondition, setWeatherCondition] = useState("");

  const logOut = () => {
    signOut(auth)
      .then(() => {
        toast.success("Signed out successfully");
        dispatch(clear());
      })
      .catch((error) => {
        console.log(error.message);
        toast.error(error.message);
      });
  };

  const getBackgroundImage = () => {
    switch (weatherCondition) {
      case "clear":
        return "url(https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.darakchi.uz%2Foz%2F146160&psig=AOvVaw3WvIQJdXN1amSEXKD2uTJQ&ust=1718520571912000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCPib-5eC3YYDFQAAAAAdAAAAABAE)";
      case "rain":
        return "url('https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.darakchi.uz%2Foz%2F146160&psig=AOvVaw3WvIQJdXN1amSEXKD2uTJQ&ust=1718520571912000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCPib-5eC3YYDFQAAAAAdAAAAABAE')";
      case "clouds":
        return "url('https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.darakchi.uz%2Foz%2F146160&psig=AOvVaw3WvIQJdXN1amSEXKD2uTJQ&ust=1718520571912000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCPib-5eC3YYDFQAAAAAdAAAAABAE')";
      default:
        return "url('https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.darakchi.uz%2Foz%2F146160&psig=AOvVaw3WvIQJdXN1amSEXKD2uTJQ&ust=1718520571912000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCPib-5eC3YYDFQAAAAAdAAAAABAE')";
    }
  };

  useEffect(() => {
    // Ensure weatherCondition is set correctly
    if (weatherCondition) {
      document.querySelector(".navbar").style.backgroundImage =
        getBackgroundImage();
    }
  }, [weatherCondition]);

  return (
    <div
      className="container-class mx-auto"
      style={{ backgroundImage: getBackgroundImage(), backgroundSize: "cover" }}
    >
      <div className="navbar items-center text-center justify-between p-4">
        <div className="navbar-start flex items-center text-center ">
          <Link className="btn btn-ghost items-center  text-xl "  to="/" >Kolen Kitchen</Link>
          {/* <Weather
            className="font-medium w-96 justify-between "
            setWeatherCondition={setWeatherCondition}
          /> */}
        </div>
        <div className="navbar-end flex items-center">
          <label className="swap swap-rotate mr-2">
            <input type="checkbox" className="theme-controller" value="dark" />

            <svg
              className="swap-off fill-current w-8 h-8 "
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
            </svg>

            {/* moon icon */}
            <svg
              className="swap-on fill-current w-8 h-8"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
            </svg>
          </label>

          <div className="flex gap-6 items-center justify-center">
            <div className="dropdown dropdown-end">
              <Link to='cart'><TiShoppingCart className="w-6 h-6"/></Link>
             
              
            </div>
            <p className="mr-4 hidden lg:block mt-2">
              {user && user.displayName ? user.displayName : "Guest"}
            </p>
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full">
                  <img
                    alt="User avatar"
                    src={
                      user && user.photoURL
                        ? user.photoURL
                        : "https://via.placeholder.com/150"
                    }
                  />
                </div>
              </div>

              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/chart" className="justify-between">
                    Chart
                  </Link>
                </li>
                <li>
                  <Link to="/create">Create Recipe</Link>
                </li>
                <li>
                  <button onClick={logOut}>Logout</button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;