import React, { useState } from 'react';
import { Rating } from '@mui/material'
import { useLocation } from 'react-router-dom';
import Footer from '../components/Footer';
import { useDispatch } from 'react-redux';
import { add } from "../redux/slice/CartSlice";

const ProductDetails = () => {
  const location = useLocation()
  const item = location?.state
  const dispatch = useDispatch()

  return (
    <>
      <section class="text-gray-600 body-font overflow-hidden">
        <div class="container  py-24 mx-auto">
          <div class="lg:w-7xl mx-auto flex flex-wrap">
            <img alt="ecommerce" class="lg:w-1/2 w-full lg:h-[30rem] h-64 object-contain object-center  rounded" src={item.image} />
            <div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h2 class="text-sm title-font text-gray-500 tracking-widest">{item.category}</h2>
              <h1 class="text-gray-900 text-3xl title-font font-medium mb-1">{item.title}</h1>
              <div class="flex mb-4">
                <span class="flex items-center">

                  <Rating name="read-only" value={item.rating} readOnly />

                </span>
              </div>
              <p class="leading-relaxed">{item.description}</p>
              <div class="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
                <div class="flex">
                  <span class="mr-3">Color</span>
                  <button class="border-2 border-gray-300 rounded-full w-6 h-6 focus:outline-none"></button>
                  <button class="border-2 border-gray-300 ml-1 bg-gray-700 rounded-full w-6 h-6 focus:outline-none"></button>
                  <button class="border-2 border-gray-300 ml-1 bg-indigo-500 rounded-full w-6 h-6 focus:outline-none"></button>
                </div>
                <div class="flex ml-6 items-center">
                  <span class="mr-3">Size</span>
                  <div class="relative">
                    <select class="rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base pl-3 pr-10">
                      <option>SM</option>
                      <option>M</option>
                      <option>L</option>
                      <option>XL</option>
                    </select>
                    <span class="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                      <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4" viewBox="0 0 24 24">
                        <path d="M6 9l6 6 6-6"></path>
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
              <div class="flex">
                <span class="title-font font-medium text-2xl text-gray-900">{item.price}</span>
                <button class="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded" onClick={() => dispatch(add(item))}>Add to Cart</button>

              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default ProductDetails;