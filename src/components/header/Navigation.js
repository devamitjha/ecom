import React, { useContext, useEffect, useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { IconContext } from "react-icons";
import { AiOutlineUser, AiOutlineHeart, AiOutlineSearch, AiOutlineShoppingCart } from "react-icons/ai";
import "./navigation.scss";;

function Navigation() {
    return (
        <seciton className="block border-bottom bg-white">
            <div className="container">            
                <div className="row">
                    <div className="main-navigation d-flex justify-content-between align-items-center">
                        <nav className="navbar navbar-expand-lg">
                            <NavLink className="navbar-brand" to="/">
                                <img src={process.env.PUBLIC_URL + "/images/favicon/logo192.png"} alt="logo"/>
                            </NavLink>
                            <div className="navbar-nav">
                                <NavLink className="nav-link" to="category/tshirt">T-shirts</NavLink>
                                <NavLink className="nav-link" to="category/dress">Dresses</NavLink>
                                <NavLink className="nav-link" to="category/tops">Tops</NavLink>
                                <NavLink className="nav-link" to="category/bags">Bags</NavLink>
                                <NavLink className="nav-link" to="category/shoes">Shoes</NavLink>
                                <NavLink className="nav-link" to="blog">Blog</NavLink>
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
        </seciton>
    )
}

export default Navigation