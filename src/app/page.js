"use client"
import Image from 'next/image'
import Hero from './components/navbar'
import Productspage from './views/productspage'
import Homepage from './views/homepage'


export default function Home() {
  
  return (
    <>
      <Hero />
      <Homepage/>
    </>
   
  )
}
