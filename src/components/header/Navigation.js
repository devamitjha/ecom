import React, { useContext, useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { IconContext } from "react-icons";
import { AiOutlineUser, AiOutlineHeart, AiOutlineSearch, AiOutlineShoppingCart } from "react-icons/ai";
import "./navigation.scss";
import data from '../../assets/data/category';


function Navigation() {
    const [category, setCategory] = useState(data);
    console.log(category);
    return (
        <div className="block border-bottom bg-white">
            <div className="container">
                <div className="row">
                    <div className="main-navigation d-flex justify-content-between align-items-center">
                        <nav className="navbar navbar-expand-lg">
                            <NavLink className="navbar-brand" to="/">
                                <img src={process.env.PUBLIC_URL + "/images/favicon/logo192.png"} alt="logo" />
                            </NavLink>
                            <div className="navbar-nav">
                                {
                                    category.map((item) => {
                                        if (item.name === "Blog") {
                                            return (
                                                <NavLink key={item.id} className="nav-link" to={`/${item.name.toLowerCase()}`}>
                                                    {item.name}
                                                </NavLink>
                                            );
                                        } else if (item.name === "About") {
                                            return (
                                                <NavLink key={item.id} className="nav-link" to={`/${item.name.toLowerCase()}`}>
                                                    {item.name}
                                                </NavLink>
                                            );
                                        } else {
                                            return (
                                                <NavLink key={item.id} className="nav-link" to={`category/${item.name.toLowerCase()}`}>
                                                    {item.name}
                                                </NavLink>
                                            );
                                        }
                                    })
                                }
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
        </div>
    )
}

export default Navigation