import React from 'react';
import Hero from '../../components/hero/Hero';
import NewArrivals from '../../components/newArrivals/NewArrivals';
import Parallaxbanner from '../../components/parallax/Parallaxbanner';
import "./home.scss";
import BlogCard from '../../components/blogCard/BlogCard';
function Home() {
    return (
        <div className="main-container">
            <div className="hero-slider">
                <Hero />
            </div>
            <div className="widget new-arrivals mb-5">
                <NewArrivals title="New Arrivals" type="home" />
            </div>
            <div className="mid-banner mt-50">
                <Parallaxbanner />
            </div>
            <div className="blog-card">
                <BlogCard title="The Blog" subTitle="Provide you with useful knowledge about fashion trend" />
            </div>
        </div>
    )
}

export default Home