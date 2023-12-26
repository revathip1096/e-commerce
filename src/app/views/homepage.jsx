import React from 'react'
import Card from '../components/card'
import Hero from '../components/navbar'
import { useQuery } from '@tanstack/react-query'

export default function Homepage() {

  const fetchProductList=async ()=>{
    const response=await fetch('https://fakestoreapi.com/products')
    return response.json();
}
  const { isLoading, isError, data:products, error } = useQuery({
    queryKey: ['productdata'],
    queryFn: fetchProductList,
  })
  if(isLoading)
  
    return <p>Loading........</p>
  

 
  return (
    <>

    <Hero />
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-x-4 gap-y-2 m-4 '>
      {
      products?.map((item, i) =>{
        return <Card key={i} product={item}/>
      })
    }
    </div>
    </>
   
  )
}
