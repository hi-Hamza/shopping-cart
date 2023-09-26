import React from "react";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import Product from "../components/Product";
import SwiperCard from "../components/SwiperCard";
import ProductOff from "../components/ProductOff";

const Home = () => {
    return(
        <>
       <Hero/>
       <SwiperCard/>
       <ProductOff/>
       <Product/>
       <ProductOff/>
       <Footer/>
        </>
    );};


    export default Home;