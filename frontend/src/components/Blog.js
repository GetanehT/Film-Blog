import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Blog = () => {
    const [blogs, setBlogs] = useState([]);
    const [featuredBlog, setFeaturedBlog] = useState(null); // Initialize with null

    // Fetch the featured blog
    useEffect(() => {
        const fetchFeaturedBlog = async () => {
            try {
                const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/blog/featured`);
                setFeaturedBlog(res.data[0]); // Assuming res.data is an array and you want the first item
            } catch (err) {
                console.error('Error fetching featured blog', err);
            }
        };

        fetchFeaturedBlog();
    }, []);

    // Fetch the list of blogs
    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/blog/`);
                setBlogs(res.data); // Assuming res.data is an array
            } catch (err) {
                console.error('Error fetching blogs', err);
            }
        };

        fetchBlogs();
    }, []);

    // Capitalize the first letter of a word
    const capitalizeFirstLetter = (word) => {
        if (word) return word.charAt(0).toUpperCase() + word.slice(1);
        return '';
    };

    // Generate the blog list layout
    const getBlogs = () => {
        if (!Array.isArray(blogs) || blogs.length === 0) {
            return <p>No blogs available</p>; // Display a message if no blogs are available
        }

        let list = [];
        let result = [];

        blogs.forEach(blogPost => {
            list.push(
                <div key={blogPost.id} className="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                    <div className="col p-4 d-flex flex-column position-static">
                        <strong className="d-inline-block mb-2 text-primary">{capitalizeFirstLetter(blogPost.category)}</strong>
                        <h3 className="mb-0">{blogPost.title}</h3>
                        <div className="mb-1 text-muted">{blogPost.month} {blogPost.day}</div>
                        <p className="card-text mb-auto">{blogPost.excerpt}</p>
                        <Link to={`/blog/${blogPost.slug}`} className="stretched-link">Continue reading</Link>
                    </div>
                    <div className="col-auto d-none d-lg-block">
                        <img width='200' height='250' src={blogPost.thumbnail} alt='thumbnail' />
                    </div>
                </div>
            );
        });

        for (let i = 0; i < list.length; i += 2) {
            result.push(
                <div key={i} className='row mb-2'>
                    <div className='col-md-6'>
                        {list[i]}
                    </div>
                    <div className='col-md-6'>
                        {list[i + 1] ? list[i + 1] : null}
                    </div>
                </div>
            );
        }

        return result;
    };

    return (
        <div className='container mt-3'>
            <div className="nav-scroller py-1 mb-2">
                <nav className="nav d-flex justify-content-between">
                    <Link className="p-2 text-muted" to='/category/world'>World</Link>
                    <Link className="p-2 text-muted" to='/category/technology'>Technology</Link>
                    <Link className="p-2 text-muted" to='/category/travel'>Travel</Link>
                </nav>
            </div>

            <div className="jumbotron p-4 p-md-5 text-white rounded bg-dark">
                <div className="col-md-6 px-0">
                    {featuredBlog ? (
                        <>
                            <h1 className="display-4 font-italic">{featuredBlog.title}</h1>
                            <p className="lead my-3">{featuredBlog.excerpt}</p>
                            <p className="lead mb-0">
                                <Link to={`/blog/${featuredBlog.slug}`} className="text-white font-weight-bold">
                                    Continue reading...
                                </Link>
                            </p>
                        </>
                    ) : (
                        <p>Loading featured blog...</p>  // Display while loading featured blog
                    )}
                </div>
            </div>

            {getBlogs()}  {/* Display the blogs */}
        </div>
    );
};

export default Blog;
