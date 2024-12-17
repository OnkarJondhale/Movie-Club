function About() {
    return (
        <div className="min-h-screen w-full bg-slate-900 text-white p-4 md:p-8 font-mono">
            <h1 className="text-xl font-bold mb-4 bg-black p-2 rounded-xl">About This Website</h1>
            <p className="mb-4 text-sm md:text-base">
                Welcome to our Movie App! This website is designed to provide users with information about the latest and most popular movies. The data is fetched from The Movie Database (TMDB) API, ensuring you get up-to-date and accurate information about your favorite films.
            </p>
            <p className="mb-4 text-sm md:text-base">
                Our goal is to offer a seamless and engaging user experience. Whether you're looking for movie ratings, summaries, or simply want to explore what's currently playing, top-rated, or upcoming, our app has got you covered.
            </p>
            <p className="mb-4 text-sm md:text-base">
                Please note that this website is created for learning purposes only and is not intended for any commercial use. All the movie data, images, and videos belong to their respective owners and are used here solely for educational and informational purposes.
            </p>
            <h2 className="text-lg md:text-xl font-semibold mt-8 mb-4 bg-black p-2 rounded-xl">Features</h2>
            <ul className="list-disc pl-8 text-sm md:text-base">
                <li className="mb-2">Explore Now Playing, Top Rated, Popular, and Upcoming movies</li>
                <li className="mb-2">Search for your favorite movies using the search bar</li>
                <li className="mb-2">Get detailed information about each movie, including synopsis, ratings, and more</li>
                <li className="mb-2">User-friendly interface with smooth navigation and responsive design</li>
            </ul>
            <h2 className="text-lg md:text-xl font-semibold mt-8 mb-4 bg-black p-2 rounded-xl">Contact Us</h2>
            <p className="text-sm md:text-base mb-10">
                If you have any questions, suggestions, or feedback, feel free to reach out to us via the Contact Us page.
            </p>
        </div>
    );
}

export default About;
