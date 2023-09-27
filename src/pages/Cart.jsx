import React from "react";
import { useSelector , useDispatch } from "react-redux";
import { MDBBtn, MDBIcon } from 'mdb-react-ui-kit';
import { increment, remove } from "../redux/slice/CartSlice";




const Cart = () => {
    const {cart ,quantity} = useSelector((state) => state.cartData)
const dispatch = useDispatch();

console.log(cart , "cartdata")

const hundleRemove = (id) => {
    dispatch(remove(id))
}

    return (
        <>
              {/* <h3 className="py-1 mx-auto max-w-7xl">Cart : Items </h3><hr /> */}
            <div className="main-div mt-12  md:mx-auto md:max-w-7xl md:mt-12  md:flex justify-around">
          

                <div className=" h-full w-full md:w-[70%]  p-3 shadow">


                    {
                        cart.map((crtitm) => (
                            <div className="cartCard flex justify-between items-center my-3">

                                <div className="flex">
                                    <img src={crtitm.image} alt="" className="w-[20vw] md:[10rem] h-52 object-contain object-center " />
                                    <div className="pl-3 pt-3">
                                        <h3 className="pb-1 text-[1rem] md:text-[2rem] lg;text-[3rem] ">{crtitm.title}</h3>
                                        <h5 className="pb-1 text-[0.8rem] md:text-[1.5rem] lg;text-[2.5rem] text-red-400">{crtitm.price}</h5>
                                        <MDBBtn color='danger' tag='a' floating onClick={() => hundleRemove(crtitm.id)}>
                                            <MDBIcon fas icon="trash" />
                                        </MDBBtn>
                                    </div>
                                </div>

                                <div className="flex items-center gap-1">
                                    <MDBBtn >-</MDBBtn>
                                    <input type="text" value={quantity} className="border-2 border-black w-7 rounded" />
                                    <MDBBtn >+</MDBBtn>
                                </div>

                            </div>
                        ))
                    }



                </div>


                <div className="h-full w-full md:w-[25%]  shadow rounded p-3">
                    <h4 className="p-2 ">Summery</h4><hr />
                    <div className="flex justify-between items-center p-2">
                        <h3 className="text-2xl font-light">Quantity</h3>
                        <h6 className="text-red-500">{cart.length}</h6>
                    </div>
                    <div className="flex justify-between items-center p-2">
                        <h3 className="text-2xl font-light">totle amount</h3>
                        <h6 className="text-red-500">{0}</h6>
                    </div>
                    <MDBBtn className="mx-5  md:mx-4 my-2 w-[80%]">Go To Chect Out</MDBBtn>
                </div>

            </div>
        </>
    );
};


export default Cart;


















