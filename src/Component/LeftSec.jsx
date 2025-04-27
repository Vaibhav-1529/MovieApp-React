import React from 'react'
import CarouselComp from './CarouselComp'
import Output from './Output'
import PaginationOutput from './PaginationOutput'
function LeftSec(props) {
  return (
    <div className='flex flex-col gap-2 justify-center items-start w-full h-full p-2'>
            {/* <CarouselComp/> */}
            {/* <div className='mt-6 w-full h-auto'>
            <Output/>
            </div> */}
            <div className='w-[100%] h-auto flex justify-start items-center'>
            <PaginationOutput outputData={props.outputData}/>
            </div>
    </div>
  )
}

export default LeftSec