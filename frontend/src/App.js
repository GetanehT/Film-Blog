import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from './hocs/Layout';
import Home from './components/Home';
import Blog from './components/Blog';
import BlogDetail from './components/BlogDetail';
import Category from './components/Category';


const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/category" element={<Category />} />
                <Route path="/blog/:id" element={<BlogDetail />} />
            </Routes>
        </Router>
    );
};

export default App;
