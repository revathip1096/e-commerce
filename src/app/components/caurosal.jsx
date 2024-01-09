"use client"
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
import Link from "next/link";

function Caurosal() {
  
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
        className="mx-3 md:mx-12  lg:mx-62  w-92 "
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
                    <div className="flex justify-center items-center flex-col space-y-3 w-full md:w-[50%] pl-12">
                      <p className="mt:0 md:-mt-24 text-xl font-semibold">
                        {ele.title}
                        
                      </p>
                      <p className="mt:0 md:-mt-24 text-l font-normal line-clamp-3">
                        {ele.description}
                        
                      </p>
                      <Link href={`/product/${ele.id}`}>
                      <button  className=" btn-md place-self-center btn btn-active btn-primary">
                        Buy now
                      </button>
                      </Link>
                    </div>
                    <div className="md:w-[40%] w-auto">
                      <img
                        className="object-fill md:h-[60vh]  h-[30vh] md:w-[50vw] w-full"
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
