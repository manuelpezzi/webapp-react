import { Link } from 'react-router-dom';

export default function MovieCard({ movie }) {
    const { id, title, director, abstract, genre, image, release_year } = movie;

    return (
        <>
            <div className="card mb-4 text-danger">
                <img src={image} alt={title} />
                <div className="card-body bg-dark">
                    <h5 className="card-title text-center">{title}</h5>
                    <span>
                        <b>direct By: </b>
                        {director}
                    </span>
                    <p>
                        <b>abstract :</b>
                        {abstract}
                    </p>
                    <p>
                        <b>genre:</b>
                        {genre}
                    </p>
                    <p>
                        <b>Relase Date:</b>
                        {release_year}
                    </p>
                    <Link to={`movies/${id}`} className='text-danger'>Read More</Link>
                </div>
            </div>
        </>
    );
}