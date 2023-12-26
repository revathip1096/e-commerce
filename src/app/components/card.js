import React from 'react'

function Card({product}) {
  return (
    <div>
    <div className="card card-compact bg-base-100 shadow-xl hover:scale-105">
    <div>
    <figure><img className=' object-fill h-60 w-96 rounded-lg' src={product.image} alt="Shoes" /></figure>
    </div>
    <div className="card-body">
      <h2 className="card-title">{product.name}</h2>
      <p className='line-clamp-5'>{product.description}</p>
      <div className="card-actions justify-end">
        <button className="btn btn-primary btn-sm">Buy Now</button>
      </div>
    </div>
  </div>
    </div>
  )
}

export default Card
