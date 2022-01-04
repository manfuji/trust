import { createPopper } from "@popperjs/core";
import p1 from "../public/Trust/CASSAVA.jpg";
import React from "react";
import Image from "next/image";
import Link from "next/link"
import { appState } from "./context/Context";
const UserDropdown = () => {
  const {user,disptch} = appState();
  // dropdown props
  const [dropdownPopoverShow, setDropdownPopoverShow] = React.useState(false);
  const btnDropdownRef = React.createRef();
  const popoverDropdownRef = React.createRef();
  const openDropdownPopover = () => {
    createPopper(btnDropdownRef.current, popoverDropdownRef.current, {
      placement: "bottom-end",
    });
    setDropdownPopoverShow(true);
  };
  const closeDropdownPopover = () => {
    setDropdownPopoverShow(false);
  };
  return (
    <>
    <ul className="">
      <li>

      <a
        className="text-blueGray-500 block"
        href="#pablo"
        ref={btnDropdownRef}
        onClick={(e) => {
          e.preventDefault();
          dropdownPopoverShow ? closeDropdownPopover() : openDropdownPopover();
        }}
      >
        <div className="items-center flex">
          <span className="w-12 h-12 text-sm text-white bg-blueGray-200 inline-flex items-center justify-center rounded-full">
            <Image
              alt="..."
              className="w-full rounded-full align-middle border-none shadow-lg"
              src={p1}
            />
          </span>
        </div>
      </a>
      </li>
      

      <div
        ref={popoverDropdownRef}
        className={
          (dropdownPopoverShow ? "block " : "hidden ") +
          "bg-white text-base z-50 py-2 font-semibold text-gray-800 hover:bg-gray-50 list-none text-center rounded shadow-lg mt-1 justify-center"
        }
        style={{ minWidth: "12rem" }}
      >
         <Link
          href="/account/profile"
          className={
            "text-sm py-2 capitalize px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
          }
          onClick={(e) => e.preventDefault()}
        >
          <a className="capitalize">

           {user.username}'s Profile
          </a>
        </Link>
        <li>
        <Link
          href="#pablo"
          className={
            "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
          }
          onClick={(e) => e.preventDefault()}
        >
          History
        </Link>
          </li>
        <li>

        <Link
          href="#pablo"
          className={
            "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
          }
          onClick={(e) => e.preventDefault()}
        >
         My Cart
        </Link>
        </li>
        <li>

       
          </li>
        <li>
        <div className="h-0 my-2 border border-solid border-blueGray-100 " />

        <Link
          href="#pablo"
          className={
            "text-sm py-2 px-4 font-bold block w-full whitespace-nowrap bg-transparent text-white bg-red-600 "
          }
          onClick={(e) => e.preventDefault()}
        >
          logout
        </Link>
        </li>
      </div>
    </ul>
    </>
  );
};

export default UserDropdown;
