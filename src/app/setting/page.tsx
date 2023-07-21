"use client";

import { Poppins } from "next/font/google";
import { useEffect, useState } from "react";
import NavBar from "../../../public/assets/navbar/navBar";
import MainPage from "../../../public/assets/mainPage/mainPage";

export default function Home() {


  return (
    <main className="flex flex-col h-screen font-sans">
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
      ></link>
      <div className="h-full w-screen">
        {MainPage("Setting")}
        {NavBar()}
      </div>
    </main>
  );
}
