function Contact() {
    return (
        <>
            <div className="min-h-48 w-full bg-slate-900 text-white p-2">
                <h1 className="text-white bg-black text-xl px-8 p-2 rounded-xl font-mono font-bold shadow-md shadow-black"> CONTACT US </h1>
                <div className="mt-4 px-8">
                    <form className="flex flex-col gap-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-300" htmlFor="name">Name</label>
                            <input type="text" id="name" name="name" className="mt-1 block w-full p-2 bg-gray-800 rounded-md border-gray-600 text-white" placeholder="Your Name" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-300" htmlFor="email">Email</label>
                            <input type="email" id="email" name="email" className="mt-1 block w-full p-2 bg-gray-800 rounded-md border-gray-600 text-white" placeholder="Your Email" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-300" htmlFor="message">Message</label>
                            <textarea id="message" name="message" className="mt-1 block w-full p-2 bg-gray-800 rounded-md border-gray-600 text-white" rows="4" placeholder="Your Message"></textarea>
                        </div>
                        <div className="bg-red-400 w-fit h-fit px-2 p-1 rounded-xl hover:bg-red-900 cursor-pointer">Send</div>
                    </form>
                </div>
            </div>
        </>
    );
}

export default Contact;
