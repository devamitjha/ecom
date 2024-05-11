import React, { useContext, useEffect, useState } from 'react';
import { NavLink, Link, useNavigate } from 'react-router-dom';
import "./navigation.scss";

const Navigation = () => {
    const navigation = useNavigate();
    const goToBlogHome = () => {
        navigation("/blog");
    };
    return (
        <div className="blog-container border-bottom">
            <div className="container-fluid">
                <div className="row">
                    <div className="main-navigation d-flex justify-content-between align-items-center p-3">
                        <Link className="navbar-brand" to="/">
                            <img src={process.env.PUBLIC_URL + "/images/logo-white.svg"} alt="logo" />
                        </Link>
                        <nav className="navbar navbar-expand-lg">
                            <div className="navbar-nav">
                                <span className="nav-link" onClick={goToBlogHome}>home</span>
                                <NavLink className="nav-link" to="tech">Tech</NavLink>
                                <NavLink className="nav-link" to="/">Logout</NavLink>
                            </div>
                        </nav>
                        <div className="full-screen-nav d-flex align-items-center">
                            <div className="letTalk">Let's Talk</div>
                            <div className="menu d-flex justify-content-center align-items-center flex-column">
                                <span></span>
                                <span></span>
                            </div>
                        </div>
                    </div>
                </div >
            </div >
        </div>
    )
}

export default Navigation