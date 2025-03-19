import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import ReviewForm from '../components/ReviewForm';

import ReviewCard from '../components/ReviewCard';
export default function MoviePage() {

    const { id } = useParams();
    const [movie, setMovie] = useState({});
    const fetchMovie = () => {
        axios.get(`http://localhost:3000/movies/${id}`)
            .then((res) => setMovie(res.data))
            .catch((error) => console.log(error));
    };
    useEffect(fetchMovie, [id]);

    const renderReviews = () => {
        return movie.reviews?.map((review) => {
            return <ReviewCard key={review.id} review={review} />;
        });
    };
    return (
        <>
            <h1 className='text-danger'>{movie?.title}</h1>
            <img src={movie?.image} alt={movie?.title} />
            {/* qui andrà la pagina di dettaglio del prodotto */}

            <section>
                <h4 className='text-danger'>Our community reviews</h4>
                {renderReviews()}
            </section>
            <section>
                {movie?.id && <ReviewForm movie_id={movie.id} reloadReviews={fetchMovie} />}
            </section>
        </>
    );
}