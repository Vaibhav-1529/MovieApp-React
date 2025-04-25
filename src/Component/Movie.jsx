import React from 'react'
import Navbar from './Navbar';
import LeftSec from './LeftSec';
function Movie() {
    const root = window.document.documentElement;
    root.classList.add('dark');
  return (
    <div className="h-auto flex flex-col gap-1 justify-items-center items-center p-2 	dark:bg-[#0f0f0f] bg-white">
        <Navbar/>
        <div className="z-10 w-full max-w-[1346px] mx-auto h-auto flex flex-col sm:flex-row gap-2  justify-center items-start">
            <div className='w-[100%] sm:w-[970px] max-w-[1023px] h-auto bg-[#D7D3BF]	dark:bg-[#1a1a1a]'>
                <LeftSec/>
            </div>
            <div className='w-[100%] sm:w-[330px] max-w-[1023px] h-[400px]  bg-[#D7D3BF]	dark:bg-[#1a1a1a]'></div>
        </div>
    </div>
    );
}

export default Movie