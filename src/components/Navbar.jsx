import React, { useState } from "react";
import { BsCart3 } from 'react-icons/bs'
import { HiOutlineMenuAlt4 } from 'react-icons/hi'
import { AiOutlineClose } from 'react-icons/ai'
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import logo from '../assets/logo.jpg'



const Navbar = () => {
    const [nav, setNav] = useState(true)

    const item = useSelector((state) => state.cartData)

    const navigate = useNavigate()

    const hundleNav = () => {
        setNav(!nav)
    }

    return (
        <>
            <nav class="bg-gray-800 fixed top-0 w-full z-50 flex h-16 items-center justify-between ">


                <div class="flex flex-1 items-center justify-between  sm:items-stretch sm:justify-between mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                    {/* 1 div  */}
                    <div class="flex flex-start-0 items-center">
                        <img class="h-8 w-auto" src={logo} alt="Your Company" />
                    </div>

                    {/* 2 idv  */}
                    <div class="item-center hidden sm:ml-6  sm:flex">
                        <div class="flex space-x-4">
                            <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium" onClick={() => navigate("/")}>Home</a>
                            <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium" onClick={() => navigate("/cart")}>Cart</a>
                            <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Contact</a>
                        </div>
                    </div>
                    {/* 3 div  */}

                    <div className="icons flex gap-5 items-center">
                        <div className="shppingCart relative">
                            <BsCart3 size={20} className="text-white " />
                            {
                                item.length >= 1 ?   <div className="absolute top-0 left-2  text-white bg-green-400 border border-black rounded-3xl  px-2">{item.length}</div> : null
                            }
                           
                        </div>

                        <div className="menu text-white sm:hidden" onClick={hundleNav}>
                            {!nav ? <AiOutlineClose size={24} /> : <HiOutlineMenuAlt4 size={24} />}
                        </div>
                    </div>
                </div>




                {/* <!-- Mobile menu, show/hide based on menu state. --> */}

                {
                    !nav ? <div class="z-50 fixed top-0 left-0 bg-gray-600 w-1/2 h-full sm:hidden" id="mobile-menu">
                        <div class="space-y-1 px-2 pb-3 pt-20">
                            {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}

                            <a href="#" class="border-b border-gray-800  text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Home</a>
                            <a href="#" class="border-b border-gray-800 mt-4 text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Cart</a>
                            <a href="#" class="border-b border-gray-800 mt-4 text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Contact</a>
                        </div>
                    </div> : null
                }




            </nav>
        </>
    );
};


export default Navbar;