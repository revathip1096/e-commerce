import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Example from "./modal";
import { useState } from "react";

function Card({ product }) {
  const router = useRouter();
   const [open, setOpen] = useState(false)
  return (
    <div>
      <div className="card card-compact bg-base-100  shadow-lg  min">
        <div>
          <figure>
            <img
              onClick={() => {setOpen(true)}}
              className="hover:scale-110 ease-in duration-200 cursor-pointer object-fill h-60 w-96 rounded-lg bg-transparent"
              src={product.image}
              alt="Shoes"
            />
          </figure>
        </div>
        <div className="card-body">
          <h2 className="card-title line-clamp-1">
            <Link href={`/product/${product.id}`}>{product.title}</Link>
          </h2>
          <p className="line-clamp-3">{product.description}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-neutral-content btn-sm">Buy Now</button>
          </div>
        </div>
      </div>
      <Example open={open} setOpen={setOpen} product={product}/>
    </div>
  );
}

export default Card;
