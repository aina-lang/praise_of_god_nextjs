import Image from 'next/image';
import React from 'react'
import Landingbg from "../assets/images/Landingbg.jpg"
function Banner() {
    return (
        <div style={{ backgroundImage: `url(${Landingbg.src})` }} className="min-h-screen w-full bg-cover bg-blend-darken bg-black/50 flex flex-col justify-center items-start bg-fixed" >
            <div className="bannerContent max-w-[900px]  min-h-[270px] p-10 rounded-md mt-40 ">
                <div className="bannerTextContent justify-center items-center flex flex-col">
                    <div className="bannerTitle mb-2  text-left w-full">
                        <h1 className="text-white  text-[110px] font-bold ">Praise Of 

                        </h1>
                        <span className="text-blue-500 text-[110px] font-bold">God</span>
                    </div>
                    <div className="bannerDescription">
                        <p className="text-white text-left mb-3">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta autem id corrupti debitis enim, consequuntur ut iste explicabo aspernatur deserunt iusto excepturi, vitae officiis nemo. Amet fuga illo doloribus voluptatum.</p>
                        <div className="button text-left mt-5">
                            <a href="#" className="p-2 border-2 border-blue-500 text-blue-500  rounded-full px-10 mt-5 shadow-md">Contacter</a>
                            <a href="#" className="p-2 border-2 border-blue-500 bg-blue-500 mx-5 rounded-full px-10 mt-5 text-white shadow-md">Voir plus</a>
                        </div>
                    </div>
                </div>
                {/* g */}

            </div>
            {/* <div className=" grid grid-cols-3 gap-5 p-10 items-center  h-40 mt-10 absolute -bottom-14">
                <div className="border-2 border-gray-200/20 w-[250px] text-white rounded-md bg-white/20 shadow-md  p-5">
                    <h3 className="title text-center text-xl">Rapide</h3>
                    <p className="text-center">Lorem ipsum dolor sit amet consectetur adipisicing</p>
                </div>
                <div className="border-2 border-gray-200/20 w-[250px] text-white rounded-md bg-white/20 shadow-md  p-5">
                    <h3 className="title text-center text-xl">Rapide</h3>
                    <p className="text-center">Lorem ipsum dolor sit amet consectetur adipisicing</p>
                </div>
                <div className="border-2 border-gray-200/20 w-[250px] text-white rounded-md bg-white/20 shadow-md  p-5">
                    <h3 className="title text-center text-xl">Rapide</h3>
                    <p className="text-center">Lorem ipsum dolor sit amet consectetur adipisicing</p>
                </div>
            </div> */}
        </div>
    )
}

export default Banner;