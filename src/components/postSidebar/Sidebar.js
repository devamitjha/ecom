import React from 'react';
import "./sidebar.scss";
import { IconContext } from "react-icons";
import { AiOutlineSearch } from "react-icons/ai";

const Sidebar = () => {
    return (
        <>
            <div className="widget search">
                <div className="title">Search Here</div>
                <div className="widget-content search">
                    <input class="search-field" type="search" placeholder="Search..." aria-label="Search" />
                    <span class="input-text">
                        <IconContext.Provider value={{ size: 20, className: "r-icon" }}>
                            <AiOutlineSearch />
                        </IconContext.Provider>
                    </span>
                </div>
            </div>
            <div className="widget category">
                <div className="title">Category</div>
                <div className="widget-content category-lists">
                    <ul>
                        <li>Design<span>(10)</span></li>
                        <li>Experience<span>(10)</span></li>
                        <li>Uncategorized<span>(10)</span></li>
                        <li>Digital<span>(10)</span></li>
                    </ul>
                </div>
            </div>
            <div className="widget recent-posts">
                <div className="d-flex mb-4">
                    <div className="d-flex justify-content-center align-items-center thumb">
                        <img src={process.env.PUBLIC_URL + "/images/posts/blog.jpg"} alt="thumb" />
                    </div>
                    <div className="post-short-description">
                        <div className="post-title">Lazarev. got 3 CSS Design Awards</div>
                        <div className="meta d-flex justify-content-start align-items-center">
                            <span className="text-uppercase">Design</span>
                            <span className="dot"></span>
                            <span className="date">Nov 14, 2023</span>
                        </div>
                    </div>
                </div>
                <div className="d-flex mb-4">
                    <div className="d-flex justify-content-center align-items-center thumb">
                        <img src={process.env.PUBLIC_URL + "/images/posts/blog.jpg"} alt="thumb" />
                    </div>
                    <div className="post-short-description">
                        <div className="post-title">Is Graphic Design a Talent or Skill?</div>
                        <div className="meta d-flex justify-content-start align-items-center">
                            <span className="text-uppercase">Design</span>
                            <span className="dot"></span>
                            <span className="date">Nov 14, 2023</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="widget tags">
                <div className="title">Tags</div>
                <div className="widget-content active-tabs">
                    <ul className="d-flex flex-wrap">
                        <li>Design</li>
                        <li>Experience</li>
                        <li>Uncategorized</li>
                        <li>Digital</li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Sidebar