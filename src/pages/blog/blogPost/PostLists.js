import React from 'react';
import "./postLists.scss";
import PostCard from '../../../components/blogList/PostCard';
import Sidebar from '../../../components/postSidebar/Sidebar';
import StickyBox from "react-sticky-box";

const PostLists = () => {
    return (
        <div className="post-list">
            <div className="container">
                <h3 className="cat-title my-5">From Our Blogs</h3>
                <div className="row">
                    <div className="col-md-8">
                        <PostCard title="Complete Guide to User Flow in UX Design" image={`${process.env.PUBLIC_URL}/images/posts/blog.jpg`} alt="blog" />
                        <PostCard title="Rental Friendly Practices for your Guests" image={`${process.env.PUBLIC_URL}/images/posts/mid-section.jpg`} alt="mid-section" />
                        <PostCard title="UX in Ecommerce - 5 things to avoid." image={`${process.env.PUBLIC_URL}/images/posts/categoryTopBanner.jpg`} alt="top" />
                    </div>
                    <div className="col-md-4">
                        <StickyBox offsetTop={80} offsetBottom={-10}>
                            <div className="blog-sidebar">
                                <Sidebar />
                            </div>
                        </StickyBox>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PostLists