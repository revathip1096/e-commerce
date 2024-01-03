"use client";
import React from "react";
import { useTheme } from "../_stores/theme";
import Link from "next/link";

function Navbar({ children }) {
  const themes = [
    "light",
    "dark",
    "synthwave",
    "retro",
    "cyberpunk",
    "valentine",
    "halloween",
    "garden",
    "forest",
    "aqua",
    "lofi",
    "pastel",
    "fantasy",
    "wireframe",
    "luxury",
    "dracula",
    "cmyk",
    "autumn",
    "business",
    "acid",
    "lemonade",
    "night",
    "coffee",
    "winter",
    "dim",
    "nord",
    "sunset",
  ];
  const { theme, settheme } = useTheme();
  return (
    <>
      <div className="navbar bg-base-100 sticky top-0 z-30">
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h7"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <Link href="./">Homepage</Link>
              </li>
              <li>
                <Link href="./products">Products</Link>
              </li>
              <li>
                <Link href="./about">About</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="navbar-center">
          <a className="btn btn-ghost text-xl">ISHA</a>
        </div>
        <div className="navbar-end">
          <div className="dropdown dropdown-bottom">
            <ul className=" menu menu-horizontal px-1">
              <li>
                <details>
                  <summary>Themes</summary>
                  <ul className="p-2  z-50 h-72 overflow-x-hidden overflow-scroll">
                    {themes?.map((ele, id) => {
                      return (
                        <li
                          key={id}
                          className="z-50 "
                          onClick={() => {
                            settheme(ele);
                          }}
                        >
                          <a className="link  no-underline">{ele}</a>
                        </li>
                      );
                    })}
                  </ul>
                </details>
              </li>
            </ul>
          </div>
        </div>
        <div className="hidden md:block avatar ">
          <div className="w-10 ring ring-primary ring-offset-1 bg-neutral-content rounded-full">
            <img src="./icon.png" className=""/>
          </div>
        </div>
      </div>
      {children}
    </>
  );
}

export default Navbar;
