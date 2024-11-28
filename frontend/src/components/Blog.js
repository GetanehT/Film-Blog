import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Blog = () => {
    const [blogs, setBlogs] = useState([]);
    const [featuredBlog, setFeaturedBlog] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const featuredRes = await axios.get(`${process.env.REACT_APP_API_URL}/api/blog/featured`);
                setFeaturedBlog(featuredRes.data[0]);

                const blogsRes = await axios.get(`${process.env.REACT_APP_API_URL}/api/blog/`);
                setBlogs(blogsRes.data);
            } catch (err) {
                setError('Failed to fetch blogs');
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, []);

    const capitalizeFirstLetter = (word) => {
        if (word) return word.charAt(0).toUpperCase() + word.slice(1);
        return '';
    };

    const renderBlogCard = (blogPost) => (
        <div className="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
            <div className="col p-4 d-flex flex-column position-static">
                <strong className="d-inline-block mb-2 text-primary">{capitalizeFirstLetter(blogPost.category)}</strong>
                <h3 className="mb-0">{blogPost.title}</h3>
                <div className="mb-1 text-muted">{blogPost.month} {blogPost.day}</div>
                <p className="card-text mb-auto">{blogPost.excerpt}</p>
                <Link to={`/blog/${blogPost.slug}`} className="stretched-link">Continue reading</Link>
            </div>
            <div className="col-auto d-none d-lg-block">
                <img width="200" height="250" src={blogPost.thumbnail} alt="thumbnail" />
            </div>
        </div>
    );

    const getBlogs = () => {
        let result = [];
        for (let i = 0; i < blogs.length; i += 2) {
            result.push(
                <div key={i} className="row mb-2">
                    <div className="col-md-6">{renderBlogCard(blogs[i])}</div>
                    <div className="col-md-6">
                        {blogs[i + 1] ? renderBlogCard(blogs[i + 1]) : null}
                    </div>
                </div>
            );
        }
        return result;
    };

    if (loading) {
        return <div className="spinner-border" role="status"><span className="sr-only">Loading...</span></div>;
    }

    if (error) {
        return <div className="alert alert-danger">{error}</div>;
    }

    return (
        <div className="container mt-3">
            <div className="nav-scroller py-1 mb-2">
                <nav className="nav d-flex justify-content-between">
                    <Link className="p-2 text-muted" to="/category/world">World</Link>
                    {/* Add more categories here */}
                </nav>
            </div>

            {featuredBlog && (
                <div className="jumbotron p-4 p-md-5 text-white rounded bg-dark">
                    <div className="col-md-6 px-0">
                        <h1 className="display-4 font-italic">{featuredBlog.title}</h1>
                        <p className="lead my-3">{featuredBlog.excerpt}</p>
                        <p className="lead mb-0">
                            <Link to={`/blog/${featuredBlog.slug}`} className="text-white font-weight-bold">
                                Continue reading...
                            </Link>
                        </p>
                    </div>
                </div>
            )}

            {getBlogs()}
        </div>
    );
};

export default Blog;
