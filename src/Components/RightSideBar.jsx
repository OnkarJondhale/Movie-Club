import { useState } from 'react'

import { FaUser } from "react-icons/fa";

function RightSideBar(props)
{
    return(
        <>
            <div className='min-h-40 w-[95%] sm:w-1/4 rounded-xl absolute top-20  md:top-24 lg:top-28 right-2 flex gap-2 flex-col justify-between items-center p-2 mt-4 bg-blue-800 text-white font-mono'>
                <FaUser className="p-1 bg-blue-400 text-2xl rounded-full cursor-pointer hover:bg-slate-900"/>
                <p className='cursor-pointer sm:hidden hover:bg-slate-900 w-full text-center' onClick={() => props.handleScrollTo(props.nprefs)}>Now Playing</p>
                <p className='cursor-pointer sm:hidden hover:bg-slate-900 w-full text-center' onClick={() => props.handleScrollTo(props.prefs)}>Popular</p>
                <p className='cursor-pointer sm:hidden hover:bg-slate-900 w-full text-center' onClick={() => props.handleScrollTo(props.upcrefs)}>upcoming</p>
                <p className='cursor-pointer sm:hidden hover:bg-slate-900 w-full text-center' onClick={() => props.handleScrollTo(props.toprefs)}>Top Rated</p>
                <p className='cursor-pointer hover:bg-slate-900 w-full text-center' onClick={() => props.handleScrollTo(props.arefs)}> About </p>
                <p className='cursor-pointer hover:bg-slate-900 w-full text-center' onClick={() => props.handleScrollTo(props.refs)}> Contact </p>
                <p className='cursor-pointer hover:bg-slate-900 w-full text-center' onClick={props.session}> Logout </p>
            </div>
        </>
    );
}

export default RightSideBar;