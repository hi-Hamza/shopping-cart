import React from "react";
import owner from '../assets/owner.jpg'

const Owner = () => {
    return (
        <>

            <div class="flex justify-center items-center bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 p-10 md:py-16">
                <div class="bg-white w-full md:w-1/2 py-4 shadow flex justify-center max-w-7xl ">
                    <div class="px-8">
                        <h1 class="text-indigo-600 text-2xl md:text-4xl font-semibold my-4 text-center">OWNER </h1>
                        <div class="flex items-center justify-center space-x-10">
                            <div class="md:ml-[6px] flex flex-col items-center lg:flex-row bg-white">
                                <img src={owner} class="w-52 " alt="" />
                                <div class="px-5 py-10 text-black flex flex-col w-full lg:w-[70%] ">
                                    <q class="text-sm -mt-5 -ml-5 md:-ml-0 text-left "> ["HTML-satucture","CSS-Style" ,"javaScript-language","C-language","React js-library","next js-library","bootstrap-frameWork","tailwind-frameWork","material-Ui","MDB-Ui","Swiper-library","axios-lobrary","redux and redux-toolkit","Routing" ] </q>
                                    <div class="mt-5 text-left -ml-5 md:text-right ">
                                        <h1 class="font-bold text-lg">Muhammad Ali Hamza</h1>
                                        <p class="text-sm">Web Developer</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}


export default Owner;