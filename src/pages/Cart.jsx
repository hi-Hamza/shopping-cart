import React from "react";
import { useSelector , useDispatch } from "react-redux";
import { MDBBtn, MDBIcon } from 'mdb-react-ui-kit';
import { remove } from "../redux/slice/CartSlice";
import { totalQuantity , totalPrice } from "../redux/slice/CartSlice";


const Cart = () => {
    const cartItem = useSelector((state) => state.cartData)
const dispatch = useDispatch();



const hundleRemove = (id) => {
    dispatch(remove(id))
}

    return (
        <>
            <h3 className="py-1 mx-auto max-w-7xl">Cart : Items </h3><hr />
            <div className="main-div mx-auto max-w-7xl mt-10  flex justify-around">


                <div className=" h-full w-[70%]  p-3 shadow">


                    {
                        cartItem.map((crtitm) => (
                            <div className="cartCard flex justify-between items-center my-3">

                                <div className="flex">
                                    <img src={crtitm.image} alt="" className="w-[15vw] object-cover " />
                                    <div className="pl-3 pt-3">
                                        <h3 className="pb-1">{crtitm.title}</h3>
                                        <h5 className="pb-1">{crtitm.price}</h5>
                                        <MDBBtn color='danger' tag='a' floating onClick={() => hundleRemove(crtitm.id)}>
                                            <MDBIcon fas icon="trash" />
                                        </MDBBtn>
                                    </div>
                                </div>

                                <div className="flex items-center gap-1">
                                    <MDBBtn>-</MDBBtn>
                                    <input type="text" value={crtitm.quantity} className="border-2 border-black w-7 rounded" />
                                    <MDBBtn>+</MDBBtn>
                                </div>

                            </div>
                        ))
                    }



                </div>


                <div className="h-full w-[25%]  shadow rounded">
                    <h4 className="p-2 ">Summery</h4><hr />
                    <div className="flex justify-between items-center p-2">
                        <h3 className="text-2xl font-light">Quantity</h3>
                        <h6 className="text-red-500">{totalQuantity}</h6>
                    </div>
                    <div className="flex justify-between items-center p-2">
                        <h3 className="text-2xl font-light">totle amount</h3>
                        <h6 className="text-red-500">{totalPrice}</h6>
                    </div>
                    <MDBBtn className="mx-4 my-2 w-[80%]">Go To Chect Out</MDBBtn>
                </div>

            </div>
        </>
    );
};


export default Cart;


















