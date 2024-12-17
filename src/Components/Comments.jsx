import { useState, useEffect } from 'react';

import { Firebase } from "../Firebase.js";
import { getFirestore, collection, addDoc, getDocs } from "firebase/firestore"; 

import CommentsBox from "./CommentsBox.jsx";
import "./Scroll.css";

const db = getFirestore(Firebase);

function Comments(props) {
    const [text, setText] = useState('');
    const [commentArr, setCommentArr] = useState(null);

    async function addData() {
        try {
            const commentsRef = collection(db, `comments/${props.id}/userComments`);
            await addDoc(commentsRef, {
                username: props.username,
                comment: text,
                posted_on: new Date().toLocaleDateString()
            });
            fetchComments();  
        } catch (error) {
            console.error("Error adding document: ", error);
        }
    }

    async function fetchComments() {
        try {
            const querySnapshot = await getDocs(collection(db, `comments/${props.id}/userComments`)); 
            const fetchedComments = []; 
            querySnapshot.forEach((doc) => { 
                fetchedComments.push(doc.data()); 
            }); 
            setCommentArr(fetchedComments);
        } catch (error) {
            console.error("Error fetching comments: ", error);
        }
    }

    useEffect(() => {
        fetchComments();
    }, [props.id]);

    function texthandler(e) {
        setText(e.target.value);
    }

    return (
        <>
        <div className="min-h-80 w-full bg-slate-900 font-mono text-white p-2">
            <h2 className="text-lg md:text-xl font-semibold mt-8 mb-4 bg-black p-2 rounded-xl">Comments</h2>
            <div className="bg-black p-2 rounded-xl mb-4">
                <textarea className="min-h-20 w-full bg-slate-800 outline-none rounded-xl p-1 hide-scrollbar" placeholder="What's on your mind" onChange={texthandler} />
                <div className="w-fit h-fit p-1 bg-red-400 rounded-xl cursor-pointer hover:bg-red-900" onClick={addData}> Add </div>
            </div>
            <div className="flex flex-col flex-wrap gap-2">
                {commentArr ? 
                    commentArr.map((it, index) => (
                        <CommentsBox key={index} username={it.username} comment={it.comment} posted_on={it.posted_on} />
                    )) 
                    : <p className='text-white font-mono bg-black p-1 text-center content-center'> Write the first comment ! </p>
                }
            </div>
        </div>
        </>
    );
}

export default Comments;
