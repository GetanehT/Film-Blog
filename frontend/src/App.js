import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from './hocs/Layout';
import Home from './components/Home';
import Blog from './components/Blog';
import BlogDetail from './components/BlogDetail';
import Category from './components/Category';
import Navbar from "./components/Navbar";

const App = () => {
    return (
        <Router>
            <Layout>
                <Navbar /> {/* Move Navbar here so it appears across all pages */}
                <Routes>
                    {/* Updated Route syntax */}
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
