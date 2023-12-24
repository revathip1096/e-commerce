import React from 'react'
import Card from '../components/card'
import Hero from '../components/navbar'

export default function Homepage() {
  const items=[{image:"https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg",name:"nike",description:"hello world"},
  {image:"https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg",name:"reebok",description:"hello world2"},
  {image:"https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg",name:"puma",description:"hello world3"}]
  return (
    <Hero>
    <div className='flex flex-wrap gap-3 aligin-center justify-center shrink'>
      {
      items.map((item, i) =>{
        return <Card key={i} product={item}/>
      })
    }
      
    

    </div>
    </Hero>
  )
}
