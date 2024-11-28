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
            <Layout>
            <Routes>
            Route exact path='/' component={Home} />
                <Route exact path='/blog' component={Blog} />
                <Route exact path='/category/:id' component={Category} />
                <Route exact path='/blog/:id' component={BlogDetail} />
            </Routes>
            </Layout>
        </Router>
    );
};

export default App;
