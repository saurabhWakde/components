import React from "react";

const Responsive = () => {
  return (
    <div className="w-11/12   rounded-lg p-8 mt-20 bg-[#262729]">
      <div className="grid grid-cols-12 grid-rows-12 gap-4 text-white text-center ">
        <div className="col-span-12 row-span-1 col-start-1 row-start-1 md:row-start-4 lg:col-span-6 md:row-span-6 lg:row-span-1 lg:col-start-1 lg:row-start-2 border-2 border-white">
          1
        </div>
        <div className=" col-span-6 col-start-1 row-start-3 md:col-start-1 md:row-start-1  md:col-span-3 row-span-1 lg:col-start-7 lg:row-start-1 border-2 border-white">
          2
        </div>
        <div className=" col-span-6 col-start-7 row-start-3 md:col-start-10 md:row-start-1 md:col-span-3 row-span-1 lg:col-start-10 lg:row-start-2 border-2 border-white">
          3
        </div>
        <div className="col-start-1 row-start-4 col-span-6   md:col-span-3 row-span-1 md:col-start-10 md:row-start-2 lg:col-start-10 lg:row-start-3 border-2 border-white">
          4
        </div>
        <div className="col-start-7 row-start-4 col-span-6 md:col-span-3 md:col-start-6 md:row-start-3  row-span-1 lg:col-start-7 lg:row-start-4 border-2 border-white">
          5
        </div>
        <div className="col-start-4 row-start-5 col-span-5 md:col-start-1 md:row-start-2 md:col-span-3 row-span-1 lg:col-start-4 lg:row-start-3 border-2 border-white">
          6
        </div>
        <div className="col-span-12 row-span-1 col-start-1 row-start-2 md:col-start-4 md:row-start-1 md:row-span-2 md:col-span-6  lg:col-span-3  lg:col-start-7 lg:row-start-2   border-2 border-white">
          7
        </div>
      </div>
    </div>
  );
};

export default Responsive;
