import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "../../../public/style.css";

import { Autoplay, Pagination, Navigation } from "swiper/modules";

import { useQuery } from "@tanstack/react-query";

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
    <div className="mb-20">
      <div
        className="mx-72 w-92 h-42 "
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
            delay: 1500,
            disableOnInteraction: true,
          }}
          pagination={{
          dynamicBullets: true,
        }}
          loop={true}
          navigation={visible}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          {data?.slice(0, 4).map((ele, id) => {
            return (
              <li key={id} onMouseEnter={()=>{setvisible(true)}} onMouseLeave={()=>{setvisible(false)}}>
                <SwiperSlide>
                  <div className="flex">

                    <p className="place-self-center">{ele.title}</p>
                    <div className="w-[60vw] h-[90vh]">
                    <img className="object-cover" src={ele.image} />
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
