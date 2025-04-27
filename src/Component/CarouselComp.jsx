import React from 'react'
import { Carousel, Typography, Button } from "@material-tailwind/react";

function CarouselComp() {
  return (
    <Carousel className="rounded-xl h-full w-full sm:h-[400px] sm:w-full overflow-hidden">
      <div className="relative h-full w-full">
        <img
          src="https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80"
          alt="image 3"
          className="h-full w-full object-cover"
        />
        <div className="absolute bottom-0 inset-0 flex justify-start items-end bg-black/55">
          <div className="absolute w-[90%] sm:w-[80%] left-[5%] sm:left-[10%] bottom-[5%] px-2 sm:px-0">
            <Typography
              variant="h1"
              color="white"
              className="text-lg sm:text-2xl md:text-4xl lg:text-5xl font-bold"
            >
              The Beauty of Nature
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="mb-4 sm:mb-5 text-sm sm:text-base md:text-lg hidden sm:block opacity-80"
            >
              It is not so much for its beauty that the forest makes a claim
              upon men&apos;s hearts, as for that subtle something, that quality.
            </Typography>
            <div className="flex">
              <Button color="white" className="font-bold text-xs sm:text-base p-2 sm:p-3">
                Watch Now
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Carousel>
  );
}

export default CarouselComp;
