import React from 'react';
import "./blogcard.scss";

const BlogCard = (props) => {
    return (
        <div className="container">
            <div className="row">
                <div className="widget-title text-center mt-50">
                    <h3 className="text-3xl">{props.title}</h3>
                    <p className="text-xs">{props.subTitle}</p>
                </div>
            </div>
            <div className="row mt-3">
                <div className="col-12 col-sm-3">
                    <div className="blog-card-item" style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/images/b1.jpg)` }}>
                        <div className="blog-content">
                            <div className="badge">Industrial</div>
                            <div className="blog-title">Lenovo’s smarter devices stoke professional passions </div>
                            <div className="author-section">
                                <div className="avatar">
                                    <img src={process.env.PUBLIC_URL + "/images/2.jpg"} alt="author" />
                                </div>
                                <div className="bio">
                                    <div className="authorName">Foulcher Nathanil</div>
                                    <span className="blog-date">May 20, 2021</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-sm-3">
                    <div className="blog-card-item" style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/images/b2.jpg)` }}>
                        <div className="blog-content">
                            <div className="badge">Industrial</div>
                            <div className="blog-title">Lenovo’s smarter devices stoke professional passions </div>
                            <div className="author-section">
                                <div className="avatar">
                                    <img src={process.env.PUBLIC_URL + "/images/2.jpg"} alt="author" />
                                </div>
                                <div className="bio">
                                    <div className="authorName">Foulcher Nathanil</div>
                                    <span className="blog-date">May 20, 2021</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-sm-3">
                    <div className="blog-card-item" style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/images/b3.jpg)` }}>
                        <div className="blog-content">
                            <div className="badge">Industrial</div>
                            <div className="blog-title">Lenovo’s smarter devices stoke professional passions </div>
                            <div className="author-section">
                                <div className="avatar">
                                    <img src={process.env.PUBLIC_URL + "/images/2.jpg"} alt="author" />
                                </div>
                                <div className="bio">
                                    <div className="authorName">Foulcher Nathanil</div>
                                    <span className="blog-date">May 20, 2021</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-sm-3">
                    <div className="blog-card-item" style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/images/b4.jpg)` }}>
                        <div className="blog-content">
                            <div className="badge">Industrial</div>
                            <div className="blog-title">Lenovo’s smarter devices stoke professional passions </div>
                            <div className="author-section">
                                <div className="avatar">
                                    <img src={process.env.PUBLIC_URL + "/images/2.jpg"} alt="author" />
                                </div>
                                <div className="bio">
                                    <div className="authorName">Foulcher Nathanil</div>
                                    <span className="blog-date">May 20, 2021</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BlogCard