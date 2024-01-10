"use client"
import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Example from "./modal";
import { useState } from "react";
import { FaCartPlus } from "react-icons/fa";
import { GoHeartFill } from "react-icons/go";
import { useCart } from "../_stores/cartStore";

import toast, { Toaster } from 'react-hot-toast';

function Card({ product }) {
  const { cartItems, addProduct, updateQuantity } = useCart();
  const Addtocart = () => {
    const existingprodct = cartItems.find((ele) => ele.id == product.id);

    if (existingprodct) {
      updateQuantity(existingprodct.id, existingprodct.quantity + 1);
       toast.custom((t) => (
        <div
          className={`${
            t.visible ? "animate-enter" : "animate-leave"
          } max-w-md w-full bg-white  rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}
        >
          <div className="flex-1 w-0 p-4">
            <div className="flex items-start">
              <div className="flex-shrink-0 pt-0.5">
                <img
                  className="h-10 w-10 rounded-full"
                  src={product.image}
                  alt=""
                />
              </div>
              <div className="ml-3 flex-1">
                <p className="text-sm font-medium text-gray-900">
                  {product.title}
                </p>
                <p className="mt-1 text-sm text-gray-500">
                  {"Added " + existingprodct.quantity+" items"}
                </p>
              </div>
            </div>
          </div>
          <div className="flex border-l border-gray-200">
            <button
              onClick={() => toast.dismiss(t.id)}
              className="w-full border border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center text-sm font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              Close
            </button>
          </div>
        </div>
      ));
    } else {
      addProduct(product);
      toast.custom((t) => (
        <div
          className={`${
            t.visible ? "animate-enter" : "animate-leave"
          } max-w-md w-full bg-white  rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}
        >
          <div className="flex-1 w-0 p-4">
            <div className="flex items-start">
              <div className="flex-shrink-0 pt-0.5">
                <img
                  className="h-10 w-10 rounded-full"
                  src={product.image}
                  alt=""
                />
              </div>
              <div className="ml-3 flex-1">
                <p className="text-sm font-medium text-gray-900">
                  {product.title}
                </p>
                <p className="mt-1 text-sm text-gray-500">
                  Added to cart
                </p>
              </div>
            </div>
          </div>
          <div className="flex border-l border-gray-200">
            <button
              onClick={() => toast.dismiss(t.id)}
              className="w-full border border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center text-sm font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              Close
            </button>
          </div>
        </div>
      ));
    }
  };
  const router = useRouter();
  const [open, setOpen] = useState(false);
  return (
    <div>
       <Toaster />
      <div className="card card-compact bg-base-100  shadow-lg  min ">
        <div>
          <figure>
            <img
              onClick={() => {
                setOpen(true);
              }}
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
            <GoHeartFill className="m-1 text-primary  text-xl cursor-pointer md:hover:scale-[.85] ease-in duration-200 " />
            <FaCartPlus
              onClick={Addtocart}
              className="m-1 text-base-content   text-xl cursor-pointer md:hover:scale-[.85] ease-in duration-200 "
            />
            <button
              className="btn btn-neutral-content btn-sm"
              onClick={() => {
                setOpen(true);
              }}
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>
      <Example open={open} setOpen={setOpen} product={product} />
    </div>
  );
}

export default Card;
