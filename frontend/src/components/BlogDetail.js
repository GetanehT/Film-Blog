import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom'; // Import useParams
import axios from 'axios';

const BlogDetail = () => {
    const { id } = useParams(); // Destructure the `id` from route parameters
    const [blog, setBlog] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/blog/${id}`);
                setBlog(res.data);
            } catch (err) {
                setError('Unable to load blog details. Please try again later.');
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [id]);

    const createBlog = () => ({ __html: blog.content });

    const capitalizeFirstLetter = (word) => {
        return word ? word.charAt(0).toUpperCase() + word.slice(1) : '';
    };

    if (loading) {
        return (
            <div className="spinner-border text-primary" role="status">
                <span className="sr-only">Loading...</span>
            </div>
        );
    }

    if (error) {
        return <div className="alert alert-danger">{error}</div>;
    }

    if (!blog.title) {
        return <div>Blog not found or still loading...</div>;
    }

    return (
        <div className="container mt-3">
            <h1 className="display-2">{blog.title}</h1>
            <h2 className="text-muted mt-3">
                Category: {capitalizeFirstLetter(blog.category)}
            </h2>
            <h4>{blog.month} {blog.day}</h4>
            <div className="mt-5 mb-5" dangerouslySetInnerHTML={createBlog()} />
            <hr />
            <p className="lead mb-5">
                <Link to="/blog" className="font-weight-bold">Back to Blogs</Link>
            </p>
        </div>
    );
};

export default BlogDetail;
