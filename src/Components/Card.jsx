function Card(props)
{
    function clickhandler()
    {
        props.movieInfoUpdate(props.movie.id);
    }

    return(
        <>
        <div className="min-h-56 min-w-56 shadow-xl shadow-black rounded-xl p-2 text-white flex flex-col gap-2 justify-between items-center cursor-pointer" onClick={clickhandler}>
            <img src={`${props.baseurl}w154${props.movie.poster_path}`} className="rounded-xl"/>
            <h1 className="font-mono text-center content-center">  { props.movie.title } </h1>
            <p> {`⭐ ${props.movie.vote_average}`} </p>
        </div>
        </>
    )
}

export default Card;