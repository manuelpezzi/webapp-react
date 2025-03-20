import MovieCard from '../components/MovieCard'
import axios from 'axios';
import { useState, useEffect, useContext } from 'react';
import GlobalContext from '../contexts/globalContext';
export default function HomePage() {
    const [movies, setMoives] = useState([]);

    const { setIsLoading } = useContext(GlobalContext)

    const fetchMovies = () => {
        console.log('fetching movies...');

        setIsLoading(true)

        axios.get('http://localhost:3000/movies')
            .then((res) => {
                setMoives(res.data);
            })
            .catch((error) => {
                console.log(error);
            })
            .then(() => setIsLoading(false));

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
            <h1 className="text-danger text-center">Boolmovies</h1>
            <h2 className='text-danger'>Tutti i nostri film</h2>
            <div className="row row-cols-3 ">

                {renderMovies()}


            </div>
        </>
    );
}
