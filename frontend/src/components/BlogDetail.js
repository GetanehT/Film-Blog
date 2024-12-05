import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

const BlogDetail = () => {
    const { id } = useParams(); // Fetch `id` from route parameters
    const [blog, setBlog] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchBlogDetail = async () => {
            if (!id) {
                setError('Invalid blog ID.');
                setLoading(false);
                return;
            }

            try {
                const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/blog/${id}`);
                setBlog(res.data);
            } catch (err) {
                console.error('Error fetching blog details:', err);
                setError('Unable to load blog details. Please try again later.');
            } finally {
                setLoading(false);
            }
        };

        fetchBlogDetail();
    }, [id]);

    const createBlog = () => ({ __html: blog.content || '<p>No content available.</p>' });

    const capitalizeFirstLetter = (word) => {
        return word ? word.charAt(0).toUpperCase() + word.slice(1) : 'Uncategorized';
    };

    if (loading) {
        return (
            <div className="text-center mt-5">
                <div className="spinner-border text-primary" role="status">
                    <span className="sr-only">Loading...</span>
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="alert alert-danger text-center mt-5">
                {error}
                <br />
                <button className="btn btn-primary mt-3" onClick={() => window.location.reload()}>
                    Retry
                </button>
            </div>
        );
    }

    if (!blog.title) {
        return (
            <div className="text-center mt-5">
                <p>Blog not found or still loading...</p>
                <Link to="/blog" className="btn btn-secondary mt-3">
                    Back to Blogs
                </Link>
            </div>
        );
    }

    return (
        <div className="container mt-3">
            <h1 className="display-4">{blog.title || 'Untitled Blog'}</h1>
            <h2 className="text-muted mt-3">
                Category: {capitalizeFirstLetter(blog.category)}
            </h2>
            <h5>{blog.month} {blog.day}</h5>
            <div className="mt-5 mb-5" dangerouslySetInnerHTML={createBlog()} />
            <hr />
            <p className="lead mb-5">
                <Link to="/blog" className="btn btn-primary font-weight-bold">
                    Back to Blogs
                </Link>
            </p>
        </div>
    );
};

export default BlogDetail;
