import React, { useEffect, useState } from "react";
import { MDBDropdown, MDBDropdownMenu, MDBDropdownToggle, MDBDropdownItem } from 'mdb-react-ui-kit';
import '../css/card.css'
import { BsCart3 } from 'react-icons/bs'
import { getApi } from "../api/Api";
import { useDispatch } from "react-redux";
import { add } from "../redux/slice/CartSlice";
import {useNavigate } from "react-router-dom";


const Product = () => {
    const [products, setProducts] = useState([])
    const dispatch = useDispatch()
    const navigate = useNavigate()

    useEffect(() => {
        productsData()
    }, [])

    const productsData = async () => {
        let response = await getApi();
        console.log(response.data)
        setProducts(response.data)
    }

    const hundleAdd = (product) => {
        dispatch(add(product))
    }

    return (
        <>
            <div className="w-full h-full ">
                {/* first div  */}
                <div className="text-center text-4xl">
                    <h1>Products</h1>
                </div>
                {/* second div  */}
                <div className="options  mx-auto max-w-7xl p-4">
                 
                </div>
                {/* third div  */}
                <div className="card-div w-80 mx-auto sm:w-full sm:mx-auto md:mx-auto md:max-w-7xl md:w-full lg:mx-auto lg:max-w-7xl lg:w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">


                    {
                        products.map((product) => (
                            <div className="card my-10" key={product.id}>
                                <div className="card-img"><img src={product.image} className="img" alt=""  onClick={() => navigate("/productdetails",{ state:  product })}/></div>
                                <div className="cardcontent">
                                    <div className="card-title">{product.title}</div>
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

        </>
    );
};

export default Product;