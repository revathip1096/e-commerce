import React from "react";
import { QueryClient } from "@tanstack/react-query";
import Link from "next/link";
import { useRouter } from "next/navigation";

function Card({ product }) {
  const router = useRouter();
  const queryClient = new QueryClient();
  console.log(queryClient);
  const data = queryClient.getQueryData(["productdata"]);
  console.log(data);
  return (
    <div>
      <div className="card card-compact bg-base-100 shadow-2xl hover:scale-105 ease-in duration-200 min">
        <div>
          <figure>
            <img
              onClick={() => router.push(`/product/${product.id}`)}
              className="cursor-pointer object-fill h-60 w-96 rounded-lg bg-transparent"
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
    </div>
  );
}

export default Card;
