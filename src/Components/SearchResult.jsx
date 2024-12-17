import { useState, useEffect } from 'react';

import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

import Card from "./Card.jsx";
import './Scroll.css';
import Loader from "./Loader.jsx"


import { IoCloseSharp } from "react-icons/io5";

const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjNTI4NzkzYjUzNDU4NmNkMTE4NDI5Y2ZmY2FkOTUwNSIsIm5iZiI6MTczMzg0ODU5MC40ODEsInN1YiI6IjY3NTg2ZTBlMTI4N2Q5YjQ2YmExYTA5MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.o13ubhhcooNhbATGUSvwdKFImeZDkTOoeNEKVDUlhko'
    }
  };

const APIKEY = 'c528793b534586cd118429cffcad9505';

function SearchResult(props) {
    const [data, setData] = useState(null);

    useEffect(() => {
        async function getSearchMovieDetails() {
            try {
                let response = await fetch(`https://api.themoviedb.org/3/search/movie?query=${props.searchName}&page=1`, options);
                let val = await response.json();
                setData(val);
            } catch {
                toast.error("Movie Not Found!");
            }
        }

        getSearchMovieDetails();
    }, [props.searchName]);

    function closeclickhandler()
    {
        props.searchMovie('');
    }

    return (
        <>
            <ToastContainer />
            <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 min-h-96 w-[90%] max-h-[90vh] overflow-y-scroll bg-slate-900 gap-8 flex flex-wrap items-center justify-center p-4 hide-scrollbar rounded-xl" style={{ zIndex: 1500 }} >
                <div className="w-full text-center text-white text-lg font-semibold mb-4">
                    Search Results for: {props.searchName}
                    <IoCloseSharp className='text-white shadow-xl shadow-black text-xl cursor-pointer relative float-end' onClick={closeclickhandler} />
                </div>
                {data && data.results ? (
                    (data.results.length>0 ?
                        data.results.map((it, index) => (
                            <Card key={it.id || index} movie={it} baseurl={props.baseUrl} movieInfoUpdate={props.movieInfoUpdate} />
                        )) : <div className='text-xl text-white font-mono'> Movie Not Found ! </div>
                    )
                ) : (
                    <Loader />
                )}
            </div>
        </>
    );
}

export default SearchResult;
