import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';

const BlogDetail = () => {
    const { id: slug } = useParams();
    const [blog, setBlog] = useState({});

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/blog/${slug}`);
                console.log(res.data);
                setBlog(res.data);
            } catch (err) {
                console.error('Error fetching blog:', err);
            }
        };

        if (slug) {
            fetchData();
        }
    }, [slug]);

    const createBlog = () => {
        return { __html: blog.contents };
    };

    const capitalizeFirstLetter = (word) => {
        if (word) return word.charAt(0).toUpperCase() + word.slice(1);
        return '';
    };

    return (
        <div className="container mt-3">
            {blog.title ? (
                <>
                    <h1 className="display-2">{blog.title}</h1>
                    <h2 className="text-muted mt-3">
                        Category: {capitalizeFirstLetter(blog.category)}
                    </h2>
                    <h4>
                        {blog.month} {blog.day}
                    </h4>
                   <div className='flex flex-row justify-center'><img alt="blog image" src={blog.thumbnail} style={{ maxWidth: '100%', height: 'auto' }} />
                   </div>
                    <div className="mt-5 mb-5" dangerouslySetInnerHTML={createBlog()} />
                </>
            ) : (
                <p>Loading...</p>
            )}
            <hr />
            <p className="lead mb-5">
                <Link to="/blog" className="font-weight-bold">
                    Back to Blogs
                </Link>
            </p>
        </div>
    );
};

export default BlogDetail;
