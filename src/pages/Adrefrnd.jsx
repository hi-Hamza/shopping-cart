import React, { useState } from "react";
import swiper1 from '../assets/swiper1.jpg'

const Asrefrnd = () => {




    return (
        <>
            <div className="h-[100vh] w-full bg-blue-400 flex justify-center items-center">
                <div className="w-[20rem] h-[30rem] bg-white rounded-xl">
                    <img src={swiper1} alt="" className="h-[50%] p-4"/>
                    <h1 className="text-center text-2xl text-gray-600 font-bold space-x-5">Angle</h1>
                    <h1 id="stenger" className="text-center text-2xl text-red-600 font-bold py-2">Stengers</h1>
                  <div className="mx-5 mt-20 flex justify-between items-center">
                  <button className="px-4 py-2 border border-gray-600 rounded-lg">Remove </button>
                    <button id="Add" className="px-3 py-2 border border-gray-600 bg-green-400 rounded-lg">Add Friend </button>
                  </div>
                </div>

            </div>
        </>
    );
}

export default Asrefrnd;