import React from "react";
import CarouselComp from "./CarouselComp";
import PaginationOutput from "./PaginationOutput";
function LeftSec(props) {
  return (
    <div className="flex flex-col gap-2 justify-center items-start w-full h-full p-2">
      {props.isoutput ? (
        <div className="w-[100%] h-auto flex justify-start items-center">
          <PaginationOutput
            outputData={props.outputData}
            setCurrentPage={props.setCurrentPage}
            isloadingCard={props.isloadingCard}
          />
        </div>
      ) : (
        <CarouselComp />
      )}
    </div>
  );
}

export default LeftSec;
