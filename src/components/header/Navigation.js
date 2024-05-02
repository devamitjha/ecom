import React, { useContext, useEffect, useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { IconContext } from "react-icons";
import { AiOutlineUser, AiOutlineHeart, AiOutlineSearch, AiOutlineShoppingCart } from "react-icons/ai";
import "./navigation.scss";;

function Navigation() {
    return (
        <div className="container">
            <div className="row">
                <div className="top_nav d-flex justify-content-between mb-4">
                    <div className="time">Time</div>
                    <NavLink className="navbar-brand" to="/">Test</NavLink>
                    <div className="search-and-userinfo d-flex justify-content-end">Time</div>
                </div>
            </div>
            <div className="row">
                <div className="main-navigation d-flex justify-content-between">
                    <nav className="navbar navbar-expand-lg">
                        <div className="navbar-nav">
                            <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
                            <NavLink className="nav-link" to="category/ring">Category</NavLink>
                            <NavLink className="nav-link" to="about">About</NavLink>
                            <NavLink className="nav-link" to="login">Login</NavLink>
                            <NavLink className="nav-link" to="register">Register</NavLink>
                        </div>
                    </nav>
                    <div className="header-action d-flex justify-content-end">
                        <span className="icon-set d-flex justify-content-center align-items-center">
                            <IconContext.Provider value={{ size: 20, className: "r-icon" }}>
                                <AiOutlineSearch />
                            </IconContext.Provider>
                        </span>
                        <span className="icon-set d-flex justify-content-center align-items-center">
                            <IconContext.Provider value={{ size: 20, className: "r-icon" }}>
                                <AiOutlineUser />
                            </IconContext.Provider>
                        </span>
                        <span className="icon-set d-flex justify-content-center align-items-center">
                            <IconContext.Provider value={{ size: 20, className: "r-icon" }}>
                                <AiOutlineHeart />
                            </IconContext.Provider>
                            <span className="badge rounded-circle">1</span>
                        </span>
                        <span className="icon-set d-flex justify-content-center align-items-center">
                            <IconContext.Provider value={{ size: 20, className: "r-icon" }}>
                                <AiOutlineShoppingCart />
                            </IconContext.Provider>
                            <span className="badge rounded-circle">1</span>
                        </span>
                    </div>
                </div>
            </div >
        </div >
    )
}

export default Navigation