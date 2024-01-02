import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { useMediaQuery } from "react-responsive";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "../../../public/style.css";

import { Autoplay, Pagination, Navigation } from "swiper/modules";

import { useQuery } from "@tanstack/react-query";

function Caurosal() {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });
  console.log(isTabletOrMobile);
  const [visible, setvisible] = useState(false);
  const fetchProductList = async () => {
    const response = await fetch("https://fakestoreapi.com/products");
    return response.json();
  };
  const { isLoading, data } = useQuery({
    queryKey: ["productdata"],
    queryFn: fetchProductList,
  });

  if (isLoading) return <p>Loading........</p>;

  return (
    <div className="my-20">
      <div
        className="mx-12  lg:mx-62  w-92 "
        onMouseLeave={() => {
          setvisible(false);
        }}
        onMouseEnter={() => {
          setvisible(true);
        }}
      >
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2000,
            disableOnInteraction: true,
          }}
          pagination={{
            dynamicBullets: true,
          }}
          loop={true}
          navigation={visible}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
          style={{ overflow: "none" }}
        >
          {data?.slice(0, 4).map((ele, id) => {
            return (
              <li
                key={id}
                onMouseEnter={() => {
                  setvisible(true);
                }}
                onMouseLeave={() => {
                  setvisible(false);
                }}
              >
                <SwiperSlide>
                  <div className="flex flex-col md:flex-row justify-center items-center md:justify-between  w-full space-y-2">
                    <div className="flex justify-center items-center flex-col w-full md:w-[50%] ">
                      <p className="mt:0 md:-mt-24 text-xl font-semibold">
                        {ele.title}
                      </p>
                      <button className=" btn-sm place-self-center btn btn-active btn-primary">
                        Shop
                      </button>
                    </div>
                    <div className="md:w-[50%] w-auto">
                      <img
                        className="object-fill h-[60vh] md:w-[60vw] w-full"
                        src={ele.image}
                      />
                    </div>
                  </div>
                </SwiperSlide>
              </li>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
}

export default Caurosal;
