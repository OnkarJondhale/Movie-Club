import { useState } from 'react'

function Login(props)
{

    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');

    function emailhandler(e)
    {
        setEmail(e.target.value);
    }

    function passwordhandler(e)
    {
        setPassword(e.target.value);
    }


    function loginhandler()
    {
        props.validateUser(email,password)
    }
    
    return(
    <>
     <img src="loginbackground.jpg" className="h-screen w-screen absolute -z-10"/>
     <img src="logo.png" className="h-24 w-24 m-2 bg-blue-800 rounded-xl shadow-xl shadow-black absolute"/>
     <div className="h-screen w-screen flex justify-center items-center">
        <div className="min-h-60 min-w-fit p-4 border-4 border-black rounded-xl font-mono shadow-4xl shadow-black z-10 flex flex-col justify-center gap-4 bg-slate-800">
            <h1 className=" font-bold bg-black text-white text-center content-center p-1 border-2 border-white rounded-xl"> Login </h1>
            <div className="flex flex-col justify-center gap-4">
                <label className="bg-black p-2 text-white rounded-xl border-2 border-white"> Email : </label>
                <input placeholder="Enter your email"  type='email' className="bg-black p-2 text-white rounded-xl w-64 border-2 border-white" onChange={emailhandler} />
            </div>
            <div className="flex flex-col justify-center gap-4">
                <label className="bg-black p-2 text-white rounded-xl border-2 border-white"> Password : </label>
                <input placeholder="Enter your password" type='password' className="bg-black p-2 text-white rounded-xl w-64 border-2 border-white" onChange={passwordhandler}/>
            </div>
            <div className="flex justify-center items-center">
                <button className="bg-black text-white px-2 py-1 rounded-xl cursor-pointer border-2 border-white hover:bg-blue-800" onClick={loginhandler}> Login </button>
            </div>
            <div className="bg-black text-white text-center content-center text-sm rounded-lg flex gap-1"> Don't have account? <p className='underline hover:bg-blue-800 cursor-pointer' onClick={props.setSignUp}>Sign up</p> Here </div>
        </div>
     </div>
    </>);
}

export default Login;