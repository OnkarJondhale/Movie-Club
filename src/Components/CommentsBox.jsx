function CommentBox(props)
{
    return(
    <>
        <div className="min-h-20 w-full p-1 rounded-xl bg-slate-800 text-white font-mono">
            <h1> Username : {props.username} </h1>
            <p> Posted on date : {props.posted_on} </p>
            <div>
                Comment : {props.comment}
            </div>
        </div>
    </>);
}

export default CommentBox;