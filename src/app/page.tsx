"use client";

import { Poppins } from "next/font/google";
import { useEffect, useState } from "react";
import NavBar from "../../public/assets/navbar/navBar";
import MainPage from "../../public/assets/mainPage/mainPage";

export default function Home() {

  return (
    <main className="flex flex-col h-screen font-sans">
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
      ></link>
      <div className="h-full w-screen">
        {/* {MainPage("DashBoard", <div>Hello</div>)} */}
        {MainPage("DashBoard", <div> Hello </div>)}
        {/* <div className="absolute w-full h-32 flex items-center px-40 text-5xl font-bold">
          DashBoard
          
        </div>
        <div className="absolute w-full h-full py-32 px-28">
          <div className="w-full h-full bg-white rounded-lg bg-white overflow-auto p-8">
            Hello
          </div>
        </div> */}
          {NavBar()}
      </div>
    </main>
  );
}