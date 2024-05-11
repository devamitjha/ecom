import React from 'react';
import "./postDetails.scss";
import { ParallaxProvider, ParallaxBanner, ParallaxBannerLayer } from 'react-scroll-parallax';
import StickyBox from "react-sticky-box";
import Sidebar from '../../../components/postSidebar/Sidebar';
import { IconContext } from "react-icons";
import { FaFacebookF, FaTwitter, FaInstagram, FaPinterestP } from "react-icons/fa";
import { Link } from 'react-router-dom';
const PostDetails = () => {
    return (
        <div className="postDetails">
            <div className="container">
                <div className="post-breadcrumb">
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item"><Link to="/blog">Blog</Link></li>
                        <li class="breadcrumb-item active" aria-current="page">BLOGComplete Guide to User Flow in UX Design</li>
                    </ol>
                </div>                
                <div className="post-title">Complete Guide to User Flow in UX Design </div>
                <div className="post-author-and-date-box d-flex align-items-center">
                    <div className="item-seperator author-section d-flex align-items-center">
                        <div className="avatar"><img src={process.env.PUBLIC_URL+"/images/2.jpg"} alt="avatar"/></div>
                        <div className="author-name">Polina Viola</div>
                    </div>
                    <div className="item-seperator date">
                        <span>May 11, 2024</span>
                    </div>
                    <div className="item-seperator comment">
                        <span>2 Comments</span>
                    </div>
                </div>
            </div>
            <div className="feature-image">
                <ParallaxProvider>
                    <ParallaxBanner
                        layers={[{ image: '/images/posts/mid-section.jpg', speed: -15 }]}
                        className="parallax-banner"
                    />
                </ParallaxProvider>
            </div>
            <div className="container pt-80">
                <div className="row">
                    <div className="col-md-8">
                        <div className="post-details-wrapper">
                            <div className="sticky-social">
                                <StickyBox offsetTop={30} offsetBottom={-10}>
                                    <div className="social-container">
                                        <span className="r-icon">
                                            <IconContext.Provider value={{ size: 16 }}>
                                                <FaFacebookF />
                                            </IconContext.Provider>
                                        </span>
                                        <span className="r-icon">
                                            <IconContext.Provider value={{ size: 16 }}>
                                                <FaTwitter />
                                            </IconContext.Provider>
                                        </span>
                                        <span className="r-icon">
                                            <IconContext.Provider value={{ size: 16 }}>
                                                <FaInstagram />
                                            </IconContext.Provider>
                                        </span>
                                    </div>
                                </StickyBox>
                            </div>
                            <div className="post-content">
                                <p className="dropcap">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean risus libero, vulputate id rutrum ut, blandit lobortis odio. Vivamus tristique pharetra luctus. Etiam nec ex accumsan, efficitur dolor accumsan, cursus mi. Morbi sit amet ultrices justo. Aenean vitae ipsum pellentesque, imperdiet augue id, posuere leo. Phasellus at lectus eget lectus efficitur luctus. Quisque interdum arcu eget commodo pharetra. Proin ut ultricies sapien. Nunc hendrerit nunc a ornare aliquet. Mauris auctor lectus sed dolor porta, ac facilisis massa accumsan.</p>

                                <p>Nulla ullamcorper elit nec neque dignissim, ut ornare tortor efficitur. Mauris eget accumsan eros, et scelerisque mi. Nullam vel scelerisque urna. Vivamus iaculis dolor vel mi porta lacinia ac sit amet magna. Ut lacinia, tellus nec ultricies dapibus, nisi dui vulputate ipsum, aliquam elementum justo orci congue turpis. Pellentesque vitae ante libero. Maecenas quam elit, sollicitudin vitae sollicitudin at, aliquam et libero. Cras lacus nisi, auctor vel blandit at, tincidunt vitae orci. Curabitur feugiat lectus ornare nisl accumsan, nec aliquet quam tincidunt. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed euismod euismod eros, ac sodales tortor ultrices sed. Nullam sagittis nisi ut odio condimentum elementum.</p>

                                <p>Aenean pulvinar enim nisl, non lacinia augue bibendum vel. Cras maximus lacus non sem congue, sit amet elementum nisi vulputate. Donec eu ipsum sed lectus volutpat lobortis. Nulla facilisi. Quisque a magna quis orci maximus facilisis. Praesent sed ligula enim. Etiam condimentum turpis vel mi vestibulum, non posuere quam ultricies. Aliquam erat volutpat. Praesent at augue quis risus iaculis varius non sed ex. Vivamus varius magna et tortor egestas, sit amet efficitur leo dapibus. Pellentesque aliquet quis dui ac rutrum. Donec aliquet eget nibh eget laoreet. Duis in suscipit mauris, vel auctor lacus. Donec congue, ex ut cursus tristique, massa velit tincidunt sapien, at egestas ligula nisl in velit. Praesent fringilla urna nisi, ut imperdiet sem porta sit amet. Nulla sollicitudin sit amet diam id ultricies.</p>
                            </div>
                        </div>
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

export default PostDetails