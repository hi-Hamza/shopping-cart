import React, { useEffect, useState } from "react";
import { MDBDropdown, MDBDropdownMenu, MDBDropdownToggle, MDBDropdownItem } from 'mdb-react-ui-kit';
import '../css/card.css'
import { BsCart3 } from 'react-icons/bs'
import { getApi } from "../api/Api";
import { useDispatch } from "react-redux";
import { add } from "../redux/slice/CartSlice";


const Product = () => {
    const [products, setProducts] = useState([])
    const dispatch = useDispatch()

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
                    <MDBDropdown dropright >
                        <MDBDropdownToggle >Dropend</MDBDropdownToggle>
                        <MDBDropdownMenu>
                            <MDBDropdownItem link>Menu item</MDBDropdownItem>
                            <MDBDropdownItem link>Menu item</MDBDropdownItem>
                            <MDBDropdownItem link>Menu item</MDBDropdownItem>
                        </MDBDropdownMenu>
                    </MDBDropdown>
                </div>
                {/* third div  */}
                <div className="card-div md:mx-auto md:max-w-7xl gap-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">


                    {
                        products.map((product) => (
                            <div className="card my-10" key={product.id}>
                                <div className="card-img"><img src={product.image} className="img" alt="" /></div>
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