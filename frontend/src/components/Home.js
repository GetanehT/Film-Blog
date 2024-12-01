import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => (
    <div className="container">
        <div className="jumbotron mt-5 jumbotron-fluid">
            <div className="container">
                <h1 className="display-4">Welcome to Blog Guide!</h1>
                <p className="lead">We are blogs abt amazing travel guide and tech tips .</p>
                <hr className="my-4" />
                <p>Click the button below to check out our latest blog posts.</p>
                <Link className="btn btn-primary btn-lg" to="/blog" role="button">
                    Check out our Blog
                </Link>
            </div>
        </div>

        {/* Example of how to add an image with alt text for accessibility */}
        <div className="row mt-5">  
            <div className="col-md-6">
                <img
                    src="path/to/your/image.jpg" // Replace with your image path
                    alt="An example blog post with featured content"
                    className="img-fluid"
                />
            </div>
            <div className="col-md-6">
                <p className="lead">Our blog covers a variety of interesting topics, from travel guides to tech tips. Stay updated with the latest posts!</p>
            </div>
        </div>
    </div>
);

export default Home;
