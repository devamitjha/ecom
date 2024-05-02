import React from 'react';
import Hero from '../../components/hero/Hero';
import NewArrivals from '../../components/newArrivals/NewArrivals';
import Parallaxbanner from '../../components/parallax/Parallaxbanner';
import "./home.scss";
import BlogCard from '../../components/blogCard/BlogCard';
function Home() {
    return (
        <section className="main-container">
            <section className="hero-slider">
                <Hero />
            </section>
            <section className="widget new-arrivals">
                <NewArrivals title="New Arrivals" />
            </section>
            <section className="mid-banner mt-50">
                <Parallaxbanner />
            </section>
            <section className="blog-card">
                <BlogCard title="The Blog" subTitle="Provide you with useful knowledge about fashion trend" />
            </section>
        </section>
    )
}

export default Home