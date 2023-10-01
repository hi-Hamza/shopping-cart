import React, { useEffect, useState } from "react";
import toast, { Toaster } from 'react-hot-toast';
import '../css/card.css'
import { BsCart3 } from 'react-icons/bs'
import { getApi } from "../api/Api";
import { useDispatch, useSelector } from "react-redux";
import { add } from "../redux/slice/CartSlice";
import { useNavigate } from "react-router-dom";
import Aos from "aos";
import 'aos/dist/aos.css'
import Footer from "../components/Footer";
const AllProduct = () => {
    const [products, setProducts] = useState([])
    const [search, setSearch] = useState("")
    const dispatch = useDispatch()
    const navigate = useNavigate()
  
    useEffect(() => {
        productsData()
        Aos.init({duration:500})
    }, [])

    const productsData = async () => {
        let response = await getApi();
        const data = response.data
        setProducts(data)
       
    }
   



    const hundleAdd = (product) => {
        dispatch(add(product))
        addToast()
    }
    const addToast = () => {
        toast.success("Add Cart Item")
    }
    return (
        <>
            <Toaster
                position="top-center"
                reverseOrder={false}
            />
            <div className="w-full h-full ">
                {/* first div  */}
                <div className="text-center text-4xl">
                    <h1>Products</h1>
                </div>
                {/* second div  */}
                <div className="options  mx-auto max-w-7xl p-4">
                    <h1 className="text-[3vw] md:text-[1.5vw]">Chose Category ↓</h1>
                    <div className="md:flex md:justify-between  items-center">
                        <div className="flex gap-1 mb-2 flex-col md:flex-row">
                            <button className="px-4 py-2 border-2 border-gray-600 text-gray-600 hover:bg-gradient-to-l hover:from-gray-400 hover:to-gray-800 hover:text-white rounded-lg ">man's</button>
                            <button className="px-4 py-2 border-2 border-gray-600 text-gray-600 hover:bg-gradient-to-l hover:from-gray-400 hover:to-gray-800 hover:text-white rounded-lg ">women</button>
                            <button className="px-4 py-2 border-2 border-gray-600 text-gray-600 hover:bg-gradient-to-l hover:from-gray-400 hover:to-gray-800 hover:text-white rounded-lg ">electronics</button>
                            <button className="px-4 py-2 border-2 border-gray-600 text-gray-600 hover:bg-gradient-to-l hover:from-gray-400 hover:to-gray-800 hover:text-white rounded-lg ">jewelery</button>
                        </div>
                        <input type="search" value={search} onChange={(e) => e.target.value} name="" id="" placeholder="Search your fev Products" className="w-[50vw] md:w-[20vw] rounded-lg border border-gray-600 outline-none py-2 px-3" />
                    </div>
                </div>
                {/* third div  */}
                <div className="card-div w-80 mx-auto sm:w-full sm:mx-auto md:mx-auto md:max-w-7xl md:w-full lg:mx-auto lg:max-w-7xl lg:w-full gap-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">


                    {
                        products.map((product) => (
                            <div className="card my-10" data-aos="zoom-in-down" key={product.id}>
                                <div className="card-img"><img src={product.image} className="img" alt="" onClick={() => navigate("/productdetails", { state: product })} /></div>
                                <div className="cardcontent">
                                    <div className="card-title">{product.title.slice(0, 25)}</div>
                                    <div className="card-subtitle">{product.category}</div>
                                    <hr className="card-divider" />
                                    <div className="card-footer">
                                        <div className="card-price">{product.price}</div>
                                        <button className="card-btn">
                                            <BsCart3 className="icon" onClick={() => hundleAdd(product)} />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))
                    }




                </div>

            </div>

            <Footer/>

        </>
    );
};

export default AllProduct;