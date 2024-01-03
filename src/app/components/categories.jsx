import React from "react";

const Categories = () => {
  const images = [1, 2, 3, 4, 5, 6, 7, 8];
  return (
    <div>
      <h3 className="text-2xl font-bold mx-3 md:mx-44 py-5 md:py-10">Categories</h3>
      <div className="mx-0 md:mx-36 text-center grid grid-cols-2 md:grid-cols-4 justify-items-center gap-y-6 ">
        {images.map((ele, id) => {
          return (
            <div key={id} className="border border-1 rounded-2xl">
             <div className="p-5 ">
              <div className=" bg-primary-content rounded-full">
                <img
                  src={`./${ele}.png`}
                  alt={ele}
                  className="object-fit w-20 md:w-32 p-4"
                />
              </div>
            </div></div>
          );
        })}

      </div>
    </div>
  );
};

export default Categories;
