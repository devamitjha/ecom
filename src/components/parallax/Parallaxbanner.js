import React from 'react';
import "./style.scss";
import { ParallaxProvider, ParallaxBanner, ParallaxBannerLayer } from 'react-scroll-parallax';



const Parallaxbanner = () => {
    return (
        <ParallaxProvider>
            <ParallaxBanner
                layers={[{ image: '/images/parallax.jpg', speed: -15 }]}
                className="parallax-banner"
            />
            <div className="parallax-banner-section">
                <span className="mb-4">Here's to You</span>
                <p>How to thank your closet for a year of stellar outfits. Our most loved styles are back in and on sale.</p>
                <div className="btn-shop-now d-flex justify-content-center align-items-center text-uppercase">Shop Now</div>
            </div>
        </ParallaxProvider>
    )
}

export default Parallaxbanner