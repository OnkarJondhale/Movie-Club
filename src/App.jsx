import { useState } from 'react'
import { useEffect } from 'react'
import { useRef } from 'react' 
import './App.css'

import { Firebase } from "./Firebase.js";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { signInWithEmailAndPassword } from "firebase/auth";

import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

import SearchResult from './Components/SearchResult.jsx';
import Navbar from './Components/Navbar.jsx';
import Hero from './Components/Hero.jsx';
import Signup from "./Components/Signup.jsx";
import Login from "./Components/Login.jsx";
import Slider from "./Components/Slider.jsx";
import Detail from "./Components/Detail.jsx";
import Contact from './Components/Contact.jsx';
import About from './Components/About.jsx';

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjNTI4NzkzYjUzNDU4NmNkMTE4NDI5Y2ZmY2FkOTUwNSIsIm5iZiI6MTczMzg0ODU5MC40ODEsInN1YiI6IjY3NTg2ZTBlMTI4N2Q5YjQ2YmExYTA5MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.o13ubhhcooNhbATGUSvwdKFImeZDkTOoeNEKVDUlhko'
  }
};

const auth = getAuth(Firebase);

function App() {
  const [data,setData] = useState(null);
  const [topRated,setTopRated] = useState(null);
  const [popular,setPopular] = useState(null);
  const [upcoming,setUpcoming] = useState(null);
  const [baseurl,setBaseUrl] = useState(null);
  const [login,setLogin] = useState(false);
  const [active,setActive] = useState(false);
  const [movieInfo,setMovieInfo] = useState(false);
  const [id,setId] = useState(null);
  const [searchName,setSearchName] = useState('');
  const [result,setResult] = useState(false);
  const [username,setUsername] = useState('');

  const nowPlayingRef = useRef(null); 
  const topRatedRef = useRef(null); 
  const popularRef = useRef(null); 
  const upcomingRef = useRef(null);
  const contactRef = useRef(null);
  const aboutRef = useRef(null);

  useEffect(()=>{

    async function Authenticate()
    {
      try 
      {
        let response = await fetch('https://api.themoviedb.org/3/authentication', options);
        // console.log("Successfully Authenticated");
        // toast("Successfully Authenticated !");
        configuration()
      }
      catch(error)
      {
        toast.error("Error in Authentication !");
        // console.log(`${error} in authentication`);
      }
    }

    async function configuration()
    {
      try 
      {
        let response = await fetch('https://api.themoviedb.org/3/configuration', options);
        let data = await response.json();
        let BASEURL= data.images.base_url;
        // console.log("Successfully configured");
        // toast("Successfully Configured !");
        getNormalData(BASEURL);
        gettopRated();
        getPopular();
        getUpcoming();
      }
      catch(error)
      {
        toast.error("Error in Authentication !");
        // console.log(`${error} in configuration`);
      }
    }

    async function gettopRated()
    {
      try 
      {
        let response = await fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', options)
        let val = await response.json();
        setTopRated(val);
        // toast("Fetched data successfully !");
        // console.log("Fetched normal data successfully");
      }
      catch(error)
      {
        toast.error("Error in fetching data !");
        // console.log(`${error} in getting normal data`);
      }
    }

    async function getPopular()
    {
      try 
      {
        let response = await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', options)
        let val = await response.json();
        setPopular(val);
        // toast("Fetched data successfully !");
        // console.log("Fetched normal data successfully");
      }
      catch(error)
      {
        toast.error("Error in fetching data !");
        // console.log(`${error} in getting normal data`);
      }
    }

    async function getUpcoming()
    {
      try 
      {
        let response = await fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1', options)
        let val = await response.json();
        setUpcoming(val);
        // toast("Fetched data successfully !");
        // console.log("Fetched normal data successfully");
      }
      catch(error)
      {
        toast.error("Error in fetching data !");
        // console.log(`${error} in getting normal data`);
      }
    }
    
    async function getNormalData(BASEURL)
    {
      try 
      {
        let response = await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', options);
        let val = await response.json();
        setData(val);
        setBaseUrl(BASEURL);
        // toast("Fetched data successfully !");
        // console.log("Fetched normal data successfully");
      }
      catch(error)
      {
        toast.error("Error in fetching data !");
        // console.log(`${error} in getting normal data`);
      }
    }

    if(active)
    {
      Authenticate();
    }

  },[active]);

  function createUser(email,password)
  {
      createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      toast("User created Successfully !");
      setUsername(email);
      session();
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      toast(`Error in creating user ! ${errorMessage}`);
      // console.log(errorMessage);
    });
  }

  function validateUser(email,password)
  {
      signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      session();
      setUsername(email);
      toast("Login Successfull !");
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      toast(`Error in login ! ${errorMessage}`);
      // console.log(errorMessage);
    });
  }

  function session()
  {
    if(active)
    {
      toast("Logout Successfully !");
    }
    setActive(!active);
  }

  function setSignUp()
  {
    setLogin(!login);
  }

  function movieInfoUpdate(id)
  {
    setMovieInfo(!movieInfo);
    setId(id)
  }

  function searchMovie(movie)
  {
    setSearchName(movie);
    setResult(!result);
  }

  function handleScrollTo(ref) 
  { 
    // console.log(ref)
    ref.current.scrollIntoView({ behavior: 'smooth' }); 
  }

  return (
    <>
    <ToastContainer />
        {
          (active ?
              (
                movieInfo ? <Detail  baseUrl={baseurl} movieInfoUpdate={movieInfoUpdate} username={username} id={id}/> : 
                    <div className="min-h-screen w-full bg-slate-900">
                      <Navbar session={session} searchMovie={searchMovie} handleScrollTo={handleScrollTo} refs={{ nowPlayingRef, topRatedRef, popularRef, upcomingRef , contactRef , aboutRef}}/>
                       { result ?  ( <SearchResult baseUrl={baseurl} searchMovie={searchMovie} searchName={searchName} movieInfoUpdate={movieInfoUpdate}/> ) : null}
                      <Hero data={data} baseUrl={baseurl} movieInfoUpdate={movieInfoUpdate}/>
                      <div ref={topRatedRef}>
                        <Slider name={'Top Rated'} data={topRated} baseUrl={baseurl} movieInfoUpdate={movieInfoUpdate} />
                      </div>
                      <div ref={upcomingRef}>
                        <Slider name={'Upcoming'} data={upcoming} baseUrl={baseurl} movieInfoUpdate={movieInfoUpdate} />
                      </div>
                      <div ref={popularRef}>
                        <Slider name={'Popular'} data={popular} baseUrl={baseurl} movieInfoUpdate={movieInfoUpdate} />
                      </div>
                      <div ref={nowPlayingRef}>
                        <Slider name={'Now Playing'} data={data} baseUrl={baseurl} movieInfoUpdate={movieInfoUpdate} />
                      </div>
                      <div ref={contactRef}>
                         <Contact />
                      </div>
                      <div ref={aboutRef}>
                        <About />
                      </div>
                  </div>
              )
              : 
            (login ? <Signup setSignUp={setSignUp} createUser={createUser}/> : <Login validateUser={validateUser} setSignUp={setSignUp}/>)
          )
        }

    
    </>
  )
}

export default App

