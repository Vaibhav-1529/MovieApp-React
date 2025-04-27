import React from 'react'

function Output() {
  return (
    <div className='w-full h-auto flex flex-col justify-center items-start'>
        <div>
            <h2 className=" w-full p-2 text-xl sm:text-2xl text-white ">Title</h2>
        </div>
        <div className=' flex flex-wrap justify-start items-start gap-x-5 gap-y-2 pl-3 pr-3' >
            <div className='w-[173px] h-[300px]  rounded-lg'>
                <img className='rounded-lg w-full h-auto shadow-md shadow-black' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQl9izNkDxgVdzk-so3o3JPy3EpDLkVyreWqA&s" alt="demonslayer" />
                <div><h3 className=' w-full pl-2 text-base sm:text-lg text-white '>Title</h3></div>
            </div>
        </div>
    </div>
  )
}

export default Output