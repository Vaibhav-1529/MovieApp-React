import React, { useEffect } from "react";
import Pagination from "./Pagination";
import CardLoading from "./Loading/CardLoading";
function PaginationOutput(props) {
  const [active, setActive] = React.useState(
    props.outputData.page ? props.outputData.page : 1
  );
  useEffect(() => {
    props.setCurrentPage(active);
    console.log(active);
  }, [active]);
  const data = props.outputData?.results ? props.outputData.results : [];
  // console.log(data.length);
  return (
    <div className="w-full h-auto flex flex-col gap-3 justify-around items-start">
      <div className="">
        <h2 className=" w-full p-2 text-2xl sm:text-3xl text-white ">Title</h2>
      </div>

      <div className="w-full h-auto flex justify-center items-center ">
        {/* data insert and loading */}
        { props.isloadingCard?<CardLoading/>:
        <div className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-5 gap-4 pl-3 pr-3">
          {data.map((element, index) => {
            return (
              <div   className={`w-[160px] h-[270px] sm:w-[170px] sm:h-[290px] rounded-lg ${index === data.length-1  ? "self-start" : ""}`}
              key={index}>
                <img
                  className="rounded-lg w-full h-[260px] shadow-md shadow-black"
                  src={
                    element.poster_path
                      ? `https://image.tmdb.org/t/p/w500/${element.poster_path}`
                      : "https://eticketsolutions.com/demo/themes/e-ticket/img/movie.jpg"
                  }
                  alt="image"
                />
                <div>
                  <h3 className=" w-full pl-2 text-base sm:text-lg text-white line-clamp-1 ">
                    {element.title}
                  </h3>
                </div>
              </div>
            );
          })}
        </div>
        } 
      </div>
      <div className="w-full h-auto flex justify-center items-center">
        {data.length != 0 && (
          <Pagination
            active={active}
            setActive={setActive}
            totalPages={props.outputData.total_pages}
          />
        )}
      </div>
    </div>
  );
}

export default PaginationOutput;
