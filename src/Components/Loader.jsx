import React from 'react';

function Loader() {
    return (
        <>
           <div className='flex flex-col justify-center items-center gap-2'>
                <div className='h-20 w-20 border-r-4 border-white rounded-full animate-spin'> </div>
                <p className='text-white'> Loading </p>
           </div>
        </>
    );
}

export default Loader;
