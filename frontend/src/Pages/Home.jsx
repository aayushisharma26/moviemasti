import { useEffect, useState } from "react";
import "./Home.css";

const Home = () => {
    const [data, setData] = useState([]);
    const [search, setSearch] = useState("");

    useEffect(() => {
        let dat = async () => {
            let d = await fetch("https://moviemasti-ten.vercel.app/movie/get");
            let c = await d.json();
            console.log(c);
            setData(c);
        };
        dat();
    }, []);

    let filter = data.filter((e) =>
        e.genre.some((genreItem) =>
            genreItem.toLowerCase().includes(search.toLowerCase())
        )
    );

    const handleChange = (e) => {
        setSearch(e.target.value);
    };

    return (
        <>
            <h1 className="heading">Movie List</h1>

            <input
                type="text"
                placeholder="Search Genre..."
                value={search}
                onChange={handleChange}
                className="search-box"
            />

            <div className="movie-container">
                {filter.length > 0 ? (
                    filter.map((e) => (
                        <div key={e._id} className="movie-card">
                            <img src={e.poster} alt="movie" />
                            <h2>{e.title}</h2>
                            <p><strong>Year:</strong> {e.year}</p>
                            <p><strong>Genre:</strong> {e.genre.join(", ")}</p>
                            <p><strong>Rating:</strong> ⭐ {e.rating}</p>
                        </div>
                    ))
                ) : (
                    <p className="no-movie">❌ No Movie Found</p>
                )}
            </div>
        </>
    );
};

export default Home;
