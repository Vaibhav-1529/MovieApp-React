import React from "react";
import Pagination from "./Pagination";
function PaginationOutput(props) {
  const [active, setActive] = React.useState(props.outputData.page);
  const data = props.outputData.results?props.outputData.results:[];
  return (
    <div className="w-full h-auto flex flex-col gap-3 justify-around items-start">
      <div className="">
        <h2 className=" w-full p-2 text-2xl sm:text-3xl text-white ">Title</h2>
      </div>
      <div className="w-full h-auto flex justify-center items-center ">
      <div className="w-auto h-auto flex-grow-0 flex flex-wrap justify-start items-center gap-x-4 gap-y-4 pl-3 pr-3">
        {data.map((element, index) => {
          return (
            <div className="w-[170px] h-[300px]  rounded-lg" key={index}>
              <img
                className="rounded-lg w-full h-[260px] shadow-md shadow-black"
                src={
                  element.poster_path
                    ? `https://image.tmdb.org/t/p/w500/${element.poster_path}`
                    :"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQl9izNkDxgVdzk-so3o3JPy3EpDLkVyreWqA&s"
                }
                alt="image"
              />
              <div>
                <h3 className=" w-full pl-2 text-base sm:text-lg text-white text-nowrap overflow-hidden ">
                  {element.title}
                </h3>
              </div>
            </div>
          );
        })}
        {/* <div className="w-[173px] h-[300px]  rounded-lg">
          <img
            className="rounded-lg w-full h-auto shadow-md shadow-black"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQl9izNkDxgVdzk-so3o3JPy3EpDLkVyreWqA&s"
            alt="demonslayer"
          />
          <div>
            <h3 className=" w-full pl-2 text-base sm:text-lg text-white ">
              Title
            </h3>
          </div>
        </div> */}
      </div>
      </div>
      <div className="w-auto h-auto flex justify-center items-center">
        {data==[] &&
          <Pagination
            active={active}
            setActive={setActive}
            totalPages={props.outputData.total_pages}
          />
        }
      </div>
    </div>
  );
}

export default PaginationOutput;
