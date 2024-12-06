import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';

const Category = () => {
    const { id: categoryId } = useParams();
    const [blogs, setBlogs] = useState([]);
    const [currentCategory, setCurrentCategory] = useState('');

    useEffect(() => {
        const category = capitalizeFirstLetter(categoryId);
        setCurrentCategory(category);

        const fetchBlogs = async () => {
            try {
                const res = await axios.post(
                    `${process.env.REACT_APP_API_URL}/api/blog/category`,
                    { category },
                    { headers: { 'Content-Type': 'application/json'} }
                    
                );
                const blogsData = Array.isArray(res.data) ? res.data : [];
                setBlogs(res.data);
            } catch (err) {
                console.error('Error fetching blogs:', err);
            }
        };

        fetchBlogs();
    }, [categoryId]);

    const capitalizeFirstLetter = (word) => {
        return word ? word.charAt(0).toUpperCase() + word.slice(1) : '';
    };

    const splitIntoRows = (items, itemsPerRow = 2) => {
        return items.reduce((rows, item, index) => {
            const rowIndex = Math.floor(index / itemsPerRow);
            if (!rows[rowIndex]) rows[rowIndex] = [];
            rows[rowIndex].push(item);
            return rows;
        }, []);
    };

    const renderBlogPosts = () => {
        const blogCards = blogs.map((blogPost) => (
            <div
                key={blogPost.slug}
                className="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative"
            >
                <div className="col p-4 d-flex flex-column position-static">
                    <strong className="d-inline-block mb-2 text-primary">
                        {capitalizeFirstLetter(blogPost.category)}
                    </strong>
                    <h3 className="mb-0">{blogPost.title}</h3>
                    <div className="mb-1 text-muted">
                        {blogPost.month} {blogPost.day}
                    </div>
                    <p className="card-text mb-auto">{blogPost.excerpt}</p>
                    <Link to={`/blog/${blogPost.slug}`} className="stretched-link">
                        Continue reading
                    </Link>
                </div>
                <div className="col-auto d-none d-lg-block">
                    <img width="200"
                         height="250" 
                         src={blogPost.thumbnail} 
                         alt={blogPost.title}
                         style={{ objectFit: 'cover' }}
                     />
                </div>
            </div>
        ));

        const rows = splitIntoRows(blogCards, 2);
        return rows.map((row, rowIndex) => (
            <div key={rowIndex} className="row mb-2">
                {row.map((item, colIndex) => (
                    <div key={colIndex} className="col-md-6">
                        {item}
                    </div>
                ))}
            </div>
        ));
    };

    return (
        <div className="container mt-3">
            <h3 className="display-4">{currentCategory} Category</h3>
            {/* Navigation Bar */}
            <div className="nav-scroller py-1 mb-2">
                <nav className="nav d-flex justify-content-between">
                    {['world', 'technology', 'travel'].map((cat) => (
                        <Link
                            key={cat}
                            className="p-2 text-muted"
                            to={`/category/${cat}`}
                        >
                            {capitalizeFirstLetter(cat)}
                        </Link>
                    ))}
                </nav>
            </div>
            {renderBlogPosts()}
        </div>
    );
};

export default Category;
