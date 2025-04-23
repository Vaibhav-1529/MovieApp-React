import React from 'react'
import Navbar from './Navbar';
function Movie() {
    const root = window.document.documentElement;
    root.classList.add('dark');
  return (
    <div className="h-auto flex flex-col justify-items-center items-center 	dark:bg-[#0f0f0f] bg-white">
        <Navbar/>
    </div>
    );
}

export default Movie