import React from 'react';
import { Outlet } from 'react-router-dom';
import Navigation from '../../components/blogNavigation/Navigation';
import Footer from '../../components/footer/Footer';
import "./styles.scss";

function BlogLayout() {
    return (
        <div className="main" id="blog">
            <Navigation />
            <Outlet />
            <Footer />
        </div>
    )
}

export default BlogLayout