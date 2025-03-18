import MovieCard from '../components/MovieCard'
import axios from 'axios';
import { useState, useEffect } from 'react';
export default function HomePage() {
    const [movies, setMoives] = useState([]);

    const fetchMovies = () => {
        console.log('fetching movies...');

        axios.get('http://localhost:3000/movies')
            .then((res) => {
                setMoives(res.data);
            })
            .catch((error) => {
                console.log(error);
            });

    }
    const renderMovies = () => {
        return movies.map((movie) => {
            return (
                <div className="col" key={movie.id}>
                    <MovieCard movie={movie} />
                </div>
            );
        });
    };
    useEffect(fetchMovies, []);

    return (
        <>
            <h1 className="text-primary">Boolmovies</h1>
            <h2>Tutti i nostri film</h2>
            <div className="row row-cols-3">

                {renderMovies()}


            </div>
        </>
    );
}
