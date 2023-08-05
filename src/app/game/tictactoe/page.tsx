"use client";

import { Poppins } from "next/font/google";
import { useEffect, useState } from "react";
import NavBar from "../../../../public/assets/navbar/navBar";
import applicationPage from "../../../../public/assets/applicationPage/applicationPage";

export default function Home() {


  return (
    <main className="flex flex-col h-screen font-sans">
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
      ></link>
      <div className="h-full w-screen">
        {applicationPage("TICTACTOE")}
        {NavBar()}
        <div className="absolute w-full h-full py-32 px-28">
          <div className="w-full h-full bg-white rounded-lg bg-white overflow-auto p-8 text-black">
            Hello
          </div>
        </div>
      </div>
    </main>
  );
}
