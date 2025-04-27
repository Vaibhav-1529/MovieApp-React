import React, { useEffect, useState } from "react";
import Gener from "./Gener";
function RIghtSec() {

  const [generArr, SetGenerArr] = useState((localStorage.getItem("gener"))?JSON.parse(localStorage.getItem("gener")):[]);
  function searchGener() {
    localStorage.setItem("gener", JSON.stringify([...generArr]));
    console.log(generArr);
  }
  return (
    <div className="p-2 flex flex-col gap-2 justify-start items-start ">
      <Gener
        generArr={generArr}
        SetGenerArr={SetGenerArr}
        searchGener={searchGener}
      />
      <button
      onClick={searchGener}
       className="bg-accent-light text-white 	dark:bg-accent dark:text-white hover:bg-[#c00] pb-[5px] pt-[5px] dark:hover:bg-[#ff1a1a] text-[1.4rem] w-full rounded-sm flex gap-3 justify-center items-center font-semibold">
        Search<i className="fa-solid fa-magnifying-glass"></i>
      </button>
      <h2 className="text-xl sm:text-2xl text-white ">Spring Season 2025</h2>
    </div>
    
  );
}

export default RIghtSec;
