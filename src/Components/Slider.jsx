import Card from "../Components/Card.jsx";
import './Scroll.css'

function Slider(props)
{
    return(
        <>
            <div className="min-h-80 w-full rounded-xl mt-10 shadow-xl shadow-black flex flex-col">
                <h1 className="text-white bg-black text-xl px-8 p-2 rounded-xl font-mono font-bold shadow-md shadow-black"> {props.name} </h1> 
                <div className="min-h-96 w-full flex justify-between gap-4 items-center p-4 overflow-x-scroll hide-scrollbar">
                
                {
                    (props.data ? 
                        props.data.results.map((movie, index) => {
                            return (
                                <Card key={movie.id} movie={movie} baseurl={props.baseUrl} movieInfoUpdate={props.movieInfoUpdate}/>
                            );
                        }) :
                        <p className="text-white">Loading...</p>
                    )                    
                }
                   
                </div>
            </div>
        </>
    )
}

export default Slider;