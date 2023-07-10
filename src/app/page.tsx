"use client";

import Image from "next/image";
import { Poppins } from "next/font/google";
import { useEffect, useState } from "react";

export default function Home() {

  const [showMenu, setShowMenu] = useState(false);

  const handleClickHamburgerMenu = () => {
    setShowMenu((prev) => !prev);
  };

  const transformHamburger = () => {};

  return (
    <main className="flex flex-col h-screen font-sans">
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
      ></link>
      <div className="h-full w-screen">
        <input
          id="navButton"
          type="checkbox"
          className="hidden invisible appearance-none"
        ></input>
        <div
          onClick={handleClickHamburgerMenu}
          className="absolute h-[40px] w-[40px] z-10 bg-[#122030] rounded top-12 left-6 shadow-hamburger cursor-pointer"
        >
          {[
            [
              "1",
              "top",
              "30%",
              showMenu ? "rotate-45 translate-y-2" : "-translate-y-1/2",
            ],
            ["2", "mid", "50%", showMenu ? "hidden" : ""],
            [
              "3",
              "bot",
              "70%",
              showMenu ? "-rotate-45 -translate-y-2" : "translate-y-1/2",
            ],
          ].map(([id, idName, topDistance, r]) => (
            <span
              style={{ top: topDistance }}
              key={id}
              id={idName}
              className={
                "h-[6%] w-[60%] bg-white absolute rounded ease duration-300 left-[50%] transform -translate-x-1/2 " +
                r
              }
            ></span>
          ))}
        </div>
        <div
          className={`h-full transition-all duration-200  bg-[#122030] overflow-hidden ${
            showMenu ? "w-1/6" : "w-0"
          }`}
        >
          <div className=" flex shrink-0 w-full text-5xl font-extrabold justify-start ml-16 overflow-hidden p-10 pointer-events-none">
            MENU
          </div>
          <ul>
            {[
              ["1", "#", "fas fa-tv w-10 text-center", "DashBoard"],
              ["2", "#", "far fa-user w-10 text-center", "Profile"],
              ["3", "#", "far fa-address-book w-10 text-center", "Portfolio"],
              ["4", "#", "fas fa-cogs w-10 text-center", "Setting"],
            ].map(([id, url, icon, title]) => (
              <li key={id} className="hover:bg-sky-900 text-xl">
                <a
                  href={url}
                  className="font-medium p-5 block capitalize ease-out duration-200 flex items-center shrink-0"
                >
                  <i className={icon + " shrink-0"}></i> {title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </main>
  );
}
