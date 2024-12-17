import { useState } from 'react'

import { IoMdMenu } from "react-icons/io";
import { IoCloseSharp } from "react-icons/io5";
import { FaSearch } from "react-icons/fa";

import RightSideBar from './RightSideBar.jsx';

function Navbar(props)
{
    const [sb,setSb] = useState(false);
    const [movieName,setMovieName] = useState('');

    function sideBar()
    {
        setSb(!sb);
    }

    function searchhandler(e)
    {
        setMovieName(e.target.value);
    }

    function searchclickhandler()
    {
        props.searchMovie(movieName);
    }

    return(
        <>
            <div className="min-h-20 w-full rounded-xl flex justify-between items-center p-1 fixed z-50">
                <img src="logo.png" className="h-12 sm:h-18 md:h-20 lg:h-24 shadow-lg shadow-black rounded-xl"/>

            <div>

            <div className='flex justify-center lg:gap-4 font-mono items-center'>
                <p className='hidden sm:block text-white bg-black font-bold p-1 hover:bg-slate-600 cursor-pointer text-sm md:text-md lg:text-lg shadow-lg shadow-black rounded-xl' onClick={() => props.handleScrollTo(props.refs.nowPlayingRef)}> Now Playing </p>
                <p className='hidden sm:block text-white bg-black font-bold p-1 hover:bg-slate-600 cursor-pointer text-sm md:text-md lg:text-lg shadow-lg shadow-black rounded-xl' onClick={() => props.handleScrollTo(props.refs.popularRef)}> Popular </p>
                <p className='hidden sm:block text-white bg-black font-bold p-1 hover:bg-slate-600 cursor-pointer text-sm md:text-md lg:text-lg shadow-lg shadow-black rounded-xl' onClick={() => props.handleScrollTo(props.refs.topRatedRef)}> Top Rated </p>
                <p className='hidden sm:block text-white bg-black font-bold p-1 hover:bg-slate-600 cursor-pointer text-sm md:text-md lg:text-lg shadow-lg shadow-black rounded-xl' onClick={() => props.handleScrollTo(props.refs.upcomingRef)}> Upcoming </p>
                <div className='flex gap-1 items-center bg-black p-1  shadow-lg shadow-black rounded-xl hover:bg-slate-600'>
                    <input placeholder='search movies' className='text-center text-black font-mono font-bold sm:w-52 lg:w-80 border-none outline-none' onChange={searchhandler}/>
                    <FaSearch className='text-white cursor-pointer' onClick={searchclickhandler}/>
                </div>
                
            </div>

            </div>
            {
                (sb ? <IoCloseSharp className="text-white text-3xl sm:text-4xl cursor-pointer bg-black hover:bg-slate-600 rounded-full shadow-lg shadow-black" onClick={sideBar}/> :
                    <IoMdMenu className="text-white text-3xl sm:text-4xl cursor-pointer bg-black hover:bg-slate-600 rounded-full shadow-lg shadow-black" onClick={sideBar}/>
                )
                    
            }

            {
                (sb ? <RightSideBar session={props.session} handleScrollTo={props.handleScrollTo} refs={ props.refs.contactRef } arefs={props.refs.aboutRef} toprefs={props.refs.topRatedRef} nprefs={props.refs.nowPlayingRef} upcrefs={props.refs.upcomingRef} prefs={props.refs.popularRef} favrefs={props.refs.favRef} /> : null)
            }

            </div>
        </>
    )
}

export default Navbar;