import React from 'react';
import "./footer.scss";
import { IconContext } from "react-icons";
import { FaFacebookF , FaTwitter , FaInstagram , FaPinterestP  } from "react-icons/fa";

function Footer() {
    return (
        <footer className="border-top py-5 mt-5">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-sm-6"><span className="info">@2024 All Right Reserved. Development by devamit</span></div>
                    <div className="col-12 col-sm-6 d-flex justify-content-end align-items-center">
                            <IconContext.Provider value={{ size: 14, className: "r-icon" }}>
                                <FaFacebookF  />
                            </IconContext.Provider>
                            <IconContext.Provider value={{ size: 14, className: "r-icon" }}>
                                <FaTwitter  />
                            </IconContext.Provider>
                            <IconContext.Provider value={{ size: 14, className: "r-icon" }}>
                                <FaInstagram  />
                            </IconContext.Provider>
                            <IconContext.Provider value={{ size: 14, className: "r-icon" }}>
                                <FaPinterestP  />
                            </IconContext.Provider>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer