import React from 'react';
import "./postCard.scss";
import { Link } from 'react-router-dom';

const PostCard = (props) => {
    return (
        <article className="postCard mb-5">
            <div className="feature-image">
                <Link to="test">
                    <img src={props.image} alt={props.alt} />
                    <div className="post-date">
                        <span className="month">May</span>
                        <span className="date">18</span>
                    </div>
                </Link>
            </div>
            <div className="post-info">
                <div className="postbox-meta d-flex">
                    <span className="cat-name">UI/UX Design</span>
                    <span className="comments">0 Comment</span>
                </div>
                <Link className="post-title" to="test">
                    <span>{props.title}</span>
                </Link>
                <div className="post-details">
                    <p>Quisque volutpat non nisl idele tincidunt praesent at eros vitae the pulvinar ornare. Nuncion eleifen the interdum velit, ac accumsan dui fermentum et. In the imperdiet urna sed efficitur euismod. Vestibulum bullam...</p>
                </div>
                <Link className="read-more d-flex justify-content-center align-items-center" to="test">Read More</Link>
            </div>
        </article>
    )
}

export default PostCard