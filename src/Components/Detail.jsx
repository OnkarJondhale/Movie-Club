import { useState, useEffect } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import Loader from "./Loader.jsx";
import { IoMdArrowRoundBack } from "react-icons/io";
import Comments from "./Comments.jsx"

const base = 'https://www.youtube.com/embed/';
const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjNTI4NzkzYjUzNDU4NmNkMTE4NDI5Y2ZmY2FkOTUwNSIsIm5iZiI6MTczMzg0ODU5MC40ODEsInN1YiI6IjY3NTg2ZTBlMTI4N2Q5YjQ2YmExYTA5MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.o13ubhhcooNhbATGUSvwdKFImeZDkTOoeNEKVDUlhko'
    }
};

function Detail(props) {
    const [key, setKey] = useState(null);
    const [embedUrl, setEmbedUrl] = useState('');
    const [load, setLoad] = useState(true);
    const [data,setData] = useState(null);

    function backhandler() {
        props.movieInfoUpdate();
    }

    useEffect(() => {
        async function getMovieVideo() {
            try {
                let response = await fetch(`https://api.themoviedb.org/3/movie/${props.id}/videos?language=en-US`, options);
                let val = await response.json();
                const trailer = val.results.find(it => it.type === 'Trailer');
                if (trailer) {
                    setKey(trailer.key);
                } else {
                    toast.error("No trailer available for this movie.");
                }
            } catch (error) {
                toast.error("Cannot load the movie video!");
            }
        }

        async function getMovieDetails()
        {
            try
            {
                let response = await fetch(`https://api.themoviedb.org/3/movie/${props.id}?language=en-US`, options);
                let val = await response.json();
                setData(val);
            }
            catch(error)
            {
                toast.error("Can not find movie !")
            }
        }

        getMovieDetails();
        getMovieVideo();
    }, [props.id]);

    useEffect(() => {
        if (key) {
            setEmbedUrl(`${base}${key}`);
            setLoad(false); 
        }
    }, [key]);
    
    return (
        <>
            <ToastContainer />
            <div className='min-h-screen min-w-screen bg-slate-900 flex flex-col gap-4 p-2 py-8' >
            <button className="cursor-pointer absolute top-0 h-fit w-fit p-1 rounded-xl text-white text-xl bg-gray-800 text-[0.8rem]" onClick={backhandler}> <IoMdArrowRoundBack /> </button>
                <div className="min-h-44 sm:min-h-96 rounded-xl flex justify-center items-center p-2 w-full shadow-xl shadow-black">
                    {load ? (
                        <Loader />
                    ) : (
                        <iframe 
                            src={embedUrl} 
                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                            allowFullScreen
                            className="sm:h-[30rem] sm:w-[60rem] rounded-xl"
                        ></iframe>
                    )}       
                </div>

                {
                    data ?
                    
                        <div className='text-white font-mono p-2 flex flex-col gap-2'>
                            <h1 className='text-xl'> {data.title} </h1>
                            <p className='text-[0.8rem]'> {data.overview} </p>
                            <p className='text-[0.8rem]'> Rating : ⭐ {data.vote_average} </p>
                            <p className='text-[0.8rem]'> Language : {data.spoken_languages[0].name} </p>
                            <p className='text-[0.8rem]'> Runtime : {data.runtime} min </p>
                            <p className='text-[0.8rem]'> Release Date : {data.release_date} </p>
                            <div className='flex gap-2 text-[0.8rem]'>
                                <p> Genre: </p>
                                {
                                    data.genres.map((it,index)=>{
                                        
                                    return( <p key={it.id || index} className='text-[0.8rem]'>  {it.name} </p>)
                                    })
                                }
                            </div>
                        </div>
                        :
                        <Loader />
                }

                <Comments username={props.username} id={props.id}/>
            </div>
        </>
    );
}

export default Detail;
