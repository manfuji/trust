import Image from "next/image";
import { useEffect, useState } from "react";
import logo from "../../public/LOGO.jpg";
import Link from "next/link";
import { MenuIcon,ShoppingCartIcon, StopIcon,  } from "@heroicons/react/solid";
import { appState } from "../../pages/context/Context";
import { useRouter } from "next/dist/client/router";
import UserDropdown from "../UserDropdown";
import { LOGOUT } from "../../pages/context/Types";
import axios from "axios";
function Header() {
  const {user,dispatch} = appState();

  const router = useRouter();
  
  const [toggle, setToggle] = useState(true);
  
  return (
    <>
      <div className="bg-pink-600 text-white w-full flex flex-col lg:flex-row justify-between text-xl p-2 sticky top-0 z-50 opacity-90">
        {/* first side of navbar  */}
        <div className=" flex justify-between">
          <div className="relative h-10 w-10">
            <Image src={logo} layout="fill" />
          </div>
          <button className="lg:hidden" onClick={() => setToggle(!toggle)}>
            <MenuIcon className="h-8 w-8 inline" />
          </button>
        </div>

        {/* middle */}
        {/* <div className="hidden lg:inline-flex"> */}
        <div className={`lg:inline ${toggle ? "hidden" : "inline"} `}>
          <ul className="flex flex-col lg:flex-row text-center space-x-2 mx-10 sm:mx-20 md:mx-28 lg:mx-0">
            <li className="px-8 py-2 lg:px-4 focus:bg-pink-500 text-lg cursor-pointer hover:bg-pink-500 rounded-md">
              {" "}
              <Link href="/"> Home </Link>{" "}
            </li>
            <li className="px-8 py-2 lg:px-4 focus:bg-pink-500 text-lg cursor-pointer hover:bg-pink-500 rounded-md">
              {" "}
              <Link href="/service"> Services </Link>{" "}
            </li>
            <li className="px-8 py-2 lg:px-4 focus:bg-pink-500 text-lg cursor-pointer hover:bg-pink-500 rounded-md">
              {" "}
              <Link href="/contact"> Contact </Link>{" "}
            </li>
            <li className="px-8 py-2 lg:px-4 focus:bg-pink-500 text-lg cursor-pointer hover:bg-pink-500 rounded-md">
              {" "}
              <Link href="/about"> About </Link>{" "}
            </li>
          </ul>
        </div>
        {/* End of the Navbar
         */}
        <div
          className={`lg:inline mt-4 lg:mt-0 ${toggle ? "hidden" : "inline"} `}
        >
          <ul className="flex flex-row space-x-2 mr-4">
            <li className="px-8 py-2 lg:px-4 focus:bg-pink-500 text-lg cursor-pointer hover:bg-pink-500 rounded-md">
              {" "}
              <Link href="/product/cart"><a> <ShoppingCartIcon className="h-8 w-8 inline-flex" /> <span className="bg-gray-200 text-pink-600 -ml-3 px-1 rounded-xl -top-9 bg-transparent">{user.cart.length}</span> </a></Link>{" "}
            </li>
            {user.isAuthenticated == false ? (
              <>
                <li className="px-8 py-2 lg:px-4 focus:bg-pink-500 text-lg cursor-pointer hover:bg-pink-500 rounded-md">
                  {" "}
                  <Link href="/account/login"> Login </Link>{" "}
                </li>
                <li className="px-8 py-2 lg:px-4 focus:bg-pink-500 text-lg cursor-pointer hover:bg-pink-500 rounded-md">
                  {" "}
                  <Link href="/account/register"> Signup </Link>{" "}
                </li>
              </>
            ) : (
              <>
              
              <li>
                <UserDropdown />

              </li>
              <li>
                <button
                  className="p-1 text-xl rounded-md"
                  onClick={(e) => {
                    e.preventDefault();
                    dispatch({type:LOGOUT});
                    router.push("/account/login")
                  }}
                >
                  <StopIcon className="h-8 w-8" />
                </button>
                </li>
              
              </>
            )}
          </ul>
        </div>
        {/* </div> */}
      </div>
    </>
  );
}

export default Header;
