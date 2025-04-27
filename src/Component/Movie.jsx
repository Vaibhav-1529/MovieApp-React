import React, { useEffect, useState } from 'react'
import Navbar from './Navbar';
import LeftSec from './LeftSec';
import RIghtSec from './RIghtSec';
function Movie() {
    const [isoutput,setIsoutput]=useState(false);
    const [currntPage,setCurrentPage]=useState(1);
    const [outputData,setOutputdata]=useState([]);
    const [searchvalue,Setsearchvalue]=useState("");
    const [isloadingCard,setIsloadingCard]=useState(false);
      useEffect(()=>{
        console.log("currentpage"+currntPage);
      },[currntPage])
    //for seach value
    useEffect(()=>{
        if(searchvalue.trim()==="")return;
        const options = {
            method: "GET",
            headers: {
              accept: "application/json",
              Authorization:
                "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ZDVkMTU1OGE4MDI0Y2EyNWRmNjFkMTg0MmMxN2Q4NCIsIm5iZiI6MTc0MjgxNDQ2NS4wNjQsInN1YiI6IjY3ZTEzZDAxY2U2MDVhMWVkMWM3NTBlMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.9Qj6JTm62PiUzN5s5Qt_vSgFT3zhGlh4UGs--mPPBNk",
            },
          };
          async function seach() {
            try {
              setIsloadingCard(true);
              const result = await fetch(
                `https://api.themoviedb.org/3/search/movie?query=${searchvalue}&include_adult=false&language=en-US&page=${currntPage}`,
                options
              );
              const data = await result.json();
              console.log(data);
              setOutputdata(data);
            } catch (exception) {
              console.log(exception);
            } finally {
              console.log("this is the final block of search");
              setIsoutput(true);
              setIsloadingCard(false);
            }
          }
          seach();
    },[searchvalue,currntPage])
    const root = window.document.documentElement;
    root.classList.add('dark');
  return (
    <div className="h-auto flex flex-col gap-1 justify-items-center items-center p-2 	dark:bg-[#0f0f0f] bg-white">
        <Navbar Setsearchvalue={Setsearchvalue} setIsoutput={setIsoutput}/>
        <div className="z-10 w-full max-w-[1346px] mx-auto h-auto flex flex-col sm:flex-row gap-2  justify-center items-start">
            <div className='w-[100%] sm:w-[970px] max-w-[1023px] h-full bg-[#D7D3BF]	dark:bg-[#1a1a1a] rounded-lg'>
                <LeftSec isoutput={isoutput} outputData={outputData} setCurrentPage={setCurrentPage} isloadingCard={isloadingCard}/>
            </div>
            <div className='w-[100%] sm:w-[330px] max-w-[1023px] h-auto  bg-[#D7D3BF]	dark:bg-[#1a1a1a]'>
                <RIghtSec/>
            </div>
        </div>
    </div>
    );
}

export default Movie