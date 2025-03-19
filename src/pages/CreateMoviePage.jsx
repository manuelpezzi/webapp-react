import axios from 'axios';
import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

export default function CreateMoviePage() {
    const initialData = {
        title: '',
        director: '',
        image: null,
        genre: '',
        release_year: '',
        abstract: '',
    };

    const navigate = useNavigate();

    const [formData, setFormData] = useState(initialData);

    const setFieldValue = (e) => {
        const { name, value } = e.target;

        if (name === 'image') {
            setFormData({
                ...formData,
                image: e.target.files[0],
            });
        } else {
            setFormData({
                ...formData,
                [name]: value,
            });
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        axios
            .post('http://localhost:3000/movies', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            })
            .then(() => {
                navigate('/');
            })
            .catch((err) => console.log(err));
    };

    return (
        <>
            <h1 className='text-danger'>Qui andrà il form</h1>

            <section className='text-danger' >
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label>Title:</label>
                        <input
                            className="form-control"
                            name="title"
                            type="text"
                            value={formData.title}
                            onChange={setFieldValue}
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label>director</label>
                        <input
                            className="form-control"
                            name="author"
                            type="text"
                            value={formData.director}
                            onChange={setFieldValue}
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label>genre</label>
                        <input
                            className="form-control"
                            name="author"
                            type="text"
                            value={formData.genre}
                            onChange={setFieldValue}
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label>release Year</label>
                        <input
                            className="form-control"
                            name="release_year"
                            type="text"
                            value={formData.release_year}
                            onChange={setFieldValue}
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label>Image:</label>
                        <input
                            className="form-control"
                            name="image"
                            type="file"
                            onChange={setFieldValue}
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label>Abstract:</label>
                        <textarea
                            value={formData.abstract}
                            className="form-control"
                            name="abstract"
                            onChange={setFieldValue}
                            required
                        ></textarea>
                    </div>
                    <div className="border-top mb-3 pt-3 d-flex justify-content-between">
                        <Link className="btn btn-secondary" to="/">
                            Back
                        </Link>
                        <button className="btn btn-success" type="submit">
                            Add movie
                        </button>
                    </div>
                </form>
            </section>
        </>
    );
}