import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from './hocs/Layout';
import Home from './components/Home';
import Blog from './components/Blog';
import BlogDetail from './components/BlogDetail';
import Category from './components/Category';
import Navbar from "./components/Navbar";
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
    return (
        <Router>
            <Layout>
                <Navbar /> {/* Navbar appears on all pages */}
                <Routes>
                    {/* Define all routes with their corresponding components */}
                    <Route path="/" element={<Home />} />
                    <Route path="/blog" element={<Blog />} />
                    <Route path="/category/:id" element={<Category />} />
                    <Route path="/blog/:id" element={<BlogDetail />} />
                </Routes>
            </Layout>
        </Router>
    );
};

export default App;
 