import React from 'react'
import { Carousel, Typography, Button } from "@material-tailwind/react";
function CarouselComp() {
  return (
    <Carousel className="rounded-xl  h-full w-full sm:h-[400px] sm:w-[970px] overflow-hidden">
    <div className="relative h-full w-full">
      <img
        src="https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80"
        alt="image 3"
        className="h-full w-full object-cover"
      />
      <div className="absolute bottom-0 inset-0 flex justify-start h-auto w-full items-end bg-black/55">
        <div className="absolute w-[80%] left-[10%] bottom-[10%]">
          <Typography
            variant="h1"
            color="white"
            className="text-xl md:text-3xl lg:text-5xl"
          >
            The Beauty of Nature
          </Typography>
          <Typography
            variant="lead"
            color="white"
            className="mb-5 text-lg sm:text-xl  opacity-80"
          >
            It is not so much for its beauty that the forest makes a claim
            upon men&apos;s hearts, as for that subtle something, that quality
          </Typography>
          <div className="flex">
            <Button size="lg" color="white" className='font-bold text-xl'>
              Watch Now
            </Button>
          </div>
        </div>
      </div>
    </div>
   
  </Carousel>
);
}
export default CarouselComp