import React, { useState } from "react";

function Navbar() {
  const [issearchbar,setSearchbar]=useState(false);
  return (
    <div className="z-10 w-full max-w-[1346px] px-4 md:px-6 mx-auto h-auto p-[1.1em] bg-[#A59D84]/80 backdrop-blur dark:bg-[#0f0f0f]/80 dark:backdrop-blur flex flex-col gap-[5px] justify-center items-center">

    <div className="w-[100%] h-[100%]  flex justify-between items-center ">
      <div className="w-auto h-[100%] flex justify-center items-center gap-2  ">
        <i className="fa-solid fa-bars text-gray-800 dark:text-gray-300 text-[1.9rem] cursor-pointer p-2  "></i>
        <div className="flex justify-center items-center gap-1 text-black dark:text-white">
          <span className="text-5xl md:text-5xl font-extrabold tracking-tight text-[#e50914] dark:text-[#ff4c4c]">
            M
          </span>
          <div className="leading-none flex flex-col justify-center">
            <span className="text-lg/[1.0rem] md:text-xl/[1.2rem] font-medium tracking-wide">
              OVIE
            </span>
            <span className="text-lg/[1.0rem] md:text-xl/[1.2rem] font-medium tracking-wide">
              ASTER
            </span>
          </div>
        </div>
        <form action="" className="relative sm:flex hidden  justify-center items-center ">
          <input
            type="text"
            className="h-[2.5rem] pr-[60px] pl-[30px] font-medium rounded-l-2xl border-none bg-gray-100	dark:bg-[#1e1e1e] text-[1.2rem] focus:outline-none focus:border-transparent "
            placeholder="Enter anime name"
          />
          <button className="h-[2.5rem] font-medium rounded-r-2xl border-none bg-gray-100	dark:bg-[#1e1e1e]">
            <i className="fa-solid fa-magnifying-glass text-gray-800 dark:text-gray-300 text-[1.3rem] cursor-pointer p-2 "></i>
          </button>
        </form>

        <div className=" sm:flex hidden justify-start items-center w-auto h-auto">
        <i className="fa-brands fa-square-reddit text-gray-800 dark:text-gray-300 text-[2.5rem] cursor-pointer p-2"></i>
        <i className="fa-brands fa-square-instagram text-gray-800 dark:text-gray-300 text-[2.5rem] cursor-pointer p-2"></i>
        <i className="fa-brands fa-square-twitter text-gray-800 dark:text-gray-300 text-[2.5rem] cursor-pointer p-2"></i>
        </div>
      </div>
      <div className="w-auto h-[100%] flex justify-center items-center gap-2 ">
      <form action=""className="relative sm:hidden block">
        <i 
        onClick={()=>{setSearchbar((prev)=>!prev)}}
        className="fa-solid fa-magnifying-glass text-gray-800 dark:text-gray-300 	text-lg md:text-xl cursor-pointer p-2 "></i>
      </form>
      <button className="bg-accent-light text-white 	dark:bg-accent dark:text-white hover:bg-[#c00] dark:hover:bg-[#ff1a1a] text-[1.3rem] pl-[10px] pr-[10px] rounded-lg flex justify-center items-center font-semibold">
        Login
      </button>
      </div>
    </div>
    {issearchbar&&
    <div className="w-full h-full flex justify-between items-center ">
    <form action="" className="relative block">
          <input
            type="text"
            className="h-[2.5rem] pr-[60px] pl-[30px] w-[290px] font-medium rounded-l-2xl border-none bg-gray-100	dark:bg-[#1e1e1e] text-[1.2rem] focus:outline-none focus:border-transparent "
            placeholder="Enter anime name"
          />
          <button className="h-[2.5rem] font-medium rounded-r-2xl border-none bg-gray-100	dark:bg-[#1e1e1e]">
            <i className="fa-solid fa-magnifying-glass text-gray-800 dark:text-gray-300 text-[1.3rem] cursor-pointer p-2 "></i>
          </button>
        </form>
    </div>}
    
    </div>

  );
}

export default Navbar;
