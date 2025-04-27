import React from 'react'

function CardLoading() {
    let arr=[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19];
  return (
    <div className="w-auto h-auto flex-grow-0 flex flex-wrap justify-start items-center gap-x-4 gap-y-4 pl-3 pr-3 animate-pulse">
        {
        arr.map((index)=>{
            return (
            <div className='w-[168px] h-[290px] p-2  flex flex-col gap-2 rounded-lg border-[2px] border-[#2b2f33]' key={index}>
            <div className='rounded-lg w-full h-[260px] bg-[#2b2f33]'></div>
            <div className='h-[13px] w-full bg-slate-700 bg-[#2b2f33]'></div>
        </div>)
        })

        }
    </div>
  )
}

export default CardLoading