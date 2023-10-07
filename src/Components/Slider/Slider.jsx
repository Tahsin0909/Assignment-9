import { useContext } from "react";
import { AuthContext } from "../ContextApi/ContextApi";


const Slider = () => {
    const { sliderData } = useContext(AuthContext)
    console.log(sliderData)
    return (
        <div className="">
            <div className="carousel h-[200px] md:h-[500px] lg:h-[700px] lg:w-[100vw-10%]  ">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src="https://i.ibb.co/pbbGT6t/image.png" className="w-full" />
                    <div className="absolute hidden lg:flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src="https://i.ibb.co/GcghR3B/image-l-ZMqhu-Ew-transformed.png" className="w-full" />
                    <div className="absolute hidden lg:flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src="https://i.ibb.co/1s36KNY/image.png" className="w-full" />
                    <div className="absolute hidden lg:flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <img src="https://i.ibb.co/vsx2V1Q/image.png" className="w-full" />
                    <div className="absolute hidden lg:flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
            <div className="text-center w-52 border border-3 border-red-600">
                <p className="absolute z-50 top-60 left-1 right-1 lg:text-5xl ">
                    <span className="lg:text-6xl text-white">
                        <span className="text-transparent font-bold bg-gradient-to-r from-blue-500 to-[#c7c0af] bg-clip-text">Unlock </span>
                        the Magic of Elysian
                    </span>
                    <br />
                    <span className="text-transparent font-bold bg-gradient-to-r from-blue-900 to-[#ffffff] bg-clip-text">Where Dreams Turn into Unforgettable Events</span>
                </p>
            </div>
        </div>
    );
};

export default Slider;