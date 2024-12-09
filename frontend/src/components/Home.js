import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => (
    <div className="container mt-5">
        {/* Welcome Section */}
        <div className="jumbotron jumbotron-fluid bg-light text-dark">
            <div className="container text-center">
                <h1 className="display-4">Welcome to Blog Guide!</h1>
                <p className="lead">
                    Discover amazing travel guides and tech tips to enrich your journey.
                </p>
                <hr className="my-4" />
                <p>Explore our latest blog posts and stay updated with trends and insights.</p>
                <Link className="btn btn-primary btn-lg mx-2" to="/blog" role="buttcon">
                    Explore Blog
                </Link>
                <Link className="btn btn-outline-secondary btn-lg mx-2" to="/about" role="button">
                    Learn More About Us
                </Link>
            </div>
        </div>

        {/* Featured Content Section */}
        <div className="row align-items-center mt-5">
            <div className="col-md-6">
                <img
                    src="path/to/your/image.jpg" // Replace with your actual image path
                    alt="Travel guide and tech tips overview"
                    className="img-fluid rounded shadow"
                />
            </div>
            <div className="col-md-6">
                <h2 className="mb-3">Why Follow Our Blog?</h2>
                <p className="lead">
                    Stay informed with expert travel advice and the latest in technology.
                    Our blog offers insights, tips, and inspiration for your everyday life.
                </p>
                <ul>
                    <li>Comprehensive travel guides for top destinations</li>
                    <li>Easy-to-follow tech tips and tutorials</li>
                    <li>Updated content from industry experts</li>
                </ul>
                <Link to="/contact" className="btn btn-success mt-3">
                    Get in Touch
                </Link>
            </div>
        </div>
    </div>
);

export default Home;
