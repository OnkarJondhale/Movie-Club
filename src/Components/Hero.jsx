import { useState, useEffect } from 'react';
import Loader from "./Loader";
import { FaPlay } from "react-icons/fa";

function Hero({ data, baseUrl, movieInfoUpdate }) {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            if (data) {
                setCurrentIndex((prevIndex) => (prevIndex + 1) % data.results.length);
            }
        }, 10000);

        return () => clearInterval(interval);
    }, [data]);

    function playhandler() {
        movieInfoUpdate(data.results[currentIndex].id);
    }

    return (
        <div className='flex justify-center items-center'>
            {data ? (
                <div>
                    <div className="h-full w-full rounded-xl bg-transparent hidden lg:block lg:text-md transition-transform duration-1000 ease-in-out transform translate-x-0">
                        <img src={`${baseUrl}original${data.results[currentIndex].backdrop_path}`} className="w-full rounded" />
                        <div className="text-white font-bold p-2 rounded-xl h-fit w-1/3 absolute lg:top-72 lg:left-10 flex flex-col justify-between items-center shadow-xl shadow-black">
                            <h1 className='font-extrabold text-2xl'>{data.results[currentIndex].title}</h1>
                            <p>{data.results[currentIndex].overview}</p>
                            <button
                                className='bg-red-400 p-2 rounded-lg cursor-pointer mt-2 hover:bg-red-800 flex gap-1 justify-center items-center z-50'
                                onClick={playhandler} 
                                style={{ zIndex: 1000 }} 
                            >
                                PLAY <FaPlay />
                            </button>
                        </div>
                    </div>

                    <div className="h-full w-full rounded-xl bg-transparent lg:hidden pt-20 px-2 transition-transform duration-1000 ease-in-out transform translate-x-0">
                        <img src={`${baseUrl}original${data.results[currentIndex].poster_path}`} className="h-full w-full rounded" />
                        <div className="text-white font-bold p-2 rounded-xl h-fit absolute top-4/5 flex flex-col justify-between items-center shadow-xl shadow-black">
                            <p className='text-[0.8rem]'>{data.results[currentIndex].overview}</p>
                            <button
                                className='bg-red-400 p-2 rounded-lg text-[0.8rem] cursor-pointer mt-2 hover:bg-red-800 flex gap-1 justify-center items-center z-50'
                                onClick={playhandler} 
                                style={{ zIndex: 1000 }} 
                            >
                                PLAY <FaPlay />
                            </button>
                        </div>
                    </div>

                    <div className='h-64 lg:h-1 w-full bg-slate-900'></div>
                </div>
            ) : (
                <div className='pt-60'>
                    <Loader />
                </div>
            )}
        </div>
    );
}

export default Hero;
