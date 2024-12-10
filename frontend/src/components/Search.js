import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Search = () => {
    const [query, setQuery] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [isSearching, setIsSearching] = useState(false);

    const handleSearch = async (e) => {
        e.preventDefault();

        if (query.trim() === '') {
            alert('Please enter a search query.');
            return;
        }

        setIsSearching(true);
        try {
            const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/blog/search/`, {
                params: { query },
            });
            setSearchResults(res.data);
        } catch (err) {
            console.error('Error fetching search results:', err);
        } finally {
            setIsSearching(false);
        }
    };

    const renderSearchResults = () => {
        if (searchResults.length === 0) {
            return <p>No results found.</p>;
        }

        return searchResults.map((blog) => (
            <div key={blog.id} className="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                <div className="col p-4 d-flex flex-column position-static">
                    <strong className="d-inline-block mb-2 text-primary">
                        {blog.category.charAt(0).toUpperCase() + blog.category.slice(1)}
                    </strong>
                    <h3 className="mb-0">{blog.title}</h3>
                    <div className="mb-1 text-muted">
                        {blog.month} {blog.day}
                    </div>
                    <p className="card-text mb-auto">{blog.excerpt}</p>
                    <Link to={`/blog/${blog.slug}`} className="stretched-link">
                        Continue reading
                    </Link>
                </div>
                {blog.thumbnail && (
                    <div className="col-auto d-none d-lg-block">
                        <img
                            width="200"
                            height="250"
                            src={blog.thumbnail}
                            alt="Thumbnail"
                        />
                    </div>
                )}
            </div>
        ));
    };

    return (
        <div className="container mt-3">
            <h1 className="display-4 text-center">Search Blogs</h1>
            <form onSubmit={handleSearch} className="mb-5">
                <div className="input-group">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Search by title..."
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                    />
                    <button type="submit" className="btn btn-primary">
                        Search
                    </button>
                </div>
            </form>

            {isSearching ? (
                <p>Searching...</p>
            ) : (
                <div>{renderSearchResults()}</div>
            )}
        </div>
    );
};

export default Search;
