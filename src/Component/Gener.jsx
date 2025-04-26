import React, { useEffect, useState } from "react";

function Gener(props) {
  const [generItem, SetGenerItem] = useState([]);
  function handleSelect(item) {
    props.SetGenerArr((prev) => {
      if(props.generArr.some((g) => g.id === item.id)){
        const newarr=props.generArr.filter((element)=>{
          return element.id!==item.id;
        })
        return newarr;
      }
      else 
      return [...prev, item];
    });
  }

  useEffect(() => {
    async function getgener() {
      try {
        const options = {
          method: "GET",
          headers: {
            accept: "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ZDVkMTU1OGE4MDI0Y2EyNWRmNjFkMTg0MmMxN2Q4NCIsIm5iZiI6MTc0MjgxNDQ2NS4wNjQsInN1YiI6IjY3ZTEzZDAxY2U2MDVhMWVkMWM3NTBlMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.9Qj6JTm62PiUzN5s5Qt_vSgFT3zhGlh4UGs--mPPBNk",
          },
        };
        const result = await fetch(
          "https://api.themoviedb.org/3/genre/movie/list?language=en",
          options
        );
        const data = await result.json();
        console.log(data.genres);
        SetGenerItem(data.genres);
      } catch (exp) {
        console.log(exp);
      } finally {
        console.log("this is final block of gener");
      }
    }
    getgener();
  }, []);

  return (
    <div className="w-full h-auto p-1 flex flex-col gap-2 ">
      <h2 className="text-xl sm:text-2xl text-white ">Quick Filter</h2>
      <div className="w-full flex flex-wrap justify-start items-center gap-1">
        {generItem.map((item) => {
          const isSelected = props.generArr.some((g) => g.id === item.id);
          return (
            <div
              key={item.id}
              onClick={() => {
                handleSelect(item);
              }}
              className={` cursor-pointer text-lg sm:text-xl border border-gray-400 px-2 py-1 rounded-lg 
                ${
                  isSelected
                    ? "dark:bg-[#ff4c4c] text-white"
                    : "dark:bg-[#1e1e1e] text-gray-400"
                }`}
            >
              {item.name}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Gener;
