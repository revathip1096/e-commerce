import React, { useState } from 'react'
import SimpleImageSlider from "react-simple-image-slider";
import { useQuery } from '@tanstack/react-query';


function Caurosal() {
  const [visible,setvisible]=useState(false);
  const fetchProductList = async () => {
    const response = await fetch("https://fakestoreapi.com/products");
    return response.json();
  };
  const {
    isLoading,
    data,
    
  } = useQuery({
    queryKey: ["productdata"],
    queryFn: fetchProductList,
  });

  if (isLoading) return <p>Loading........</p>;
  
  return (
    <div className='mx'>
      <div className='ml-52 border-primary' onMouseLeave={()=>{setvisible(false)}} onMouseEnter={()=>{setvisible(true)}}>
      
      <SimpleImageSlider
        navStyle={2}
        width={800}
        height={500}
        images={data?.slice(0,15).map((ele,id)=>{return {url:ele.image}})}
        showBullets={true}
        autoPlay={true}
        bgColor={"primary"}
        showNavs={visible}
      />
      HII
      </div>
      
    </div>
  )
}

export default Caurosal
