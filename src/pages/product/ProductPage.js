import React, { useState, useEffect } from 'react';
import { IconContext } from "react-icons";
import { IoStar } from "react-icons/io5";
import "./productpage.scss";
import { AiOutlineUser, AiOutlineHeart, AiOutlineSearch, AiOutlineShoppingCart } from "react-icons/ai";
import NewArrivals from '../../components/newArrivals/NewArrivals';
import { Link } from 'react-router-dom';

function ProductPage() {


    return (
        <div className="container">
            <div className="row mt-4 mb-2">
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><a href="#">Home</a></li>
                        <li className="breadcrumb-item"><a href="#">Clothing</a></li>
                        <li className="breadcrumb-item active" aria-current="page">Shirts</li>
                    </ol>
                </nav>
            </div>
            <div className="product-details">
                <div className="row">
                    <div className="col-sm-7">
                        <div className="media-container d-flex flex-wrap">
                            <div className="product-image">
                                <img src={process.env.PUBLIC_URL + "/images/category/fashion_products_11_1.jpg"} alt="product" />
                            </div>
                            <div className="product-image">
                                <img src={process.env.PUBLIC_URL + "/images/category/fashion_products_13_1.jpg"} alt="product" />
                            </div>
                            <div className="product-image">
                                <img src={process.env.PUBLIC_URL + "/images/category/fashion_products_11_2.jpg"} alt="product" />
                            </div>
                            <div className="product-image">
                                <img src={process.env.PUBLIC_URL + "/images/category/fashion_products_13_2.jpg"} alt="product" />
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-5">
                        <div className="product-details">
                            <div className="product product-title border-bottom">
                                <div className="title-section">
                                    <h1 className="title text-xxl">KALINI</h1>
                                    <h4 className="text-lg font-normal text-body-secondary">Ethnic Motifs Yoke Design Gotta Patti Kurta With Trousers & Dupatta</h4>
                                </div>
                                <div className="rating-section justify-content-start align-items-center border">
                                    <div className="average-rating text-base d-flex align-items-center font-bold">
                                        4.1<IconContext.Provider value={{ className: "star-icon" }}><IoStar /></IconContext.Provider>
                                    </div>
                                    <span className="mx-2">|</span>
                                    <div className="total-count">1k Ratings</div>
                                </div>
                            </div>
                            <div className="product product-price">
                                <div className="price-container d-flex ali-items-center">
                                    <div className="price"><span>₹</span>870</div>
                                    <div className="cross-price"><span>₹</span>4345</div>
                                    <div className="discount">(80% Off)</div>
                                </div>
                                <p>inclusive of all taxes</p>
                            </div>
                            <div className="product product-color">
                                <span className="color-title">MORE COLORS</span>
                                <div className="color-option-images d-flex">
                                    <div className="color-image"><img src={process.env.PUBLIC_URL + "/images/category/fashion_products_16_1.jpg"} alt="product" /></div>
                                    <div className="color-image"><img src={process.env.PUBLIC_URL + "/images/category/fashion_products_1_1.jpg"} alt="product" /></div>
                                </div>
                            </div>
                            <div className="product product-sizes">
                                <span className="size-title">SELECT SIZE</span>
                                <div className="size-box d-flex align-items-center">
                                    <span className="size active">S</span>
                                    <span className="size active">M</span>
                                    <span className="size active">L</span>
                                    <span className="size active">XL</span>
                                    <span className="size active">XXL</span>
                                </div>
                            </div>
                            <div className="product add-to-cart border-bottom">
                                <div className="action-container d-flex">
                                    <Link to="/cart/1" className="atc d-flex justify-content-center align-items-center">
                                        <span className="icon-cart d-flex justify-content-center align-items-center">
                                            <IconContext.Provider value={{ size: 20, className: "r-icon" }}>
                                                <AiOutlineShoppingCart />
                                            </IconContext.Provider>
                                        </span>Add To Bag
                                    </Link>
                                    <Link className="wishlist d-flex justify-content-center align-items-center">
                                        <span className="icon-wishlist d-flex justify-content-center align-items-center">
                                            <IconContext.Provider value={{ size: 20, className: "r-icon" }}>
                                                <AiOutlineHeart />
                                            </IconContext.Provider>
                                        </span>Wishlist
                                    </Link>
                                </div>
                            </div>
                            <div className="product product-offers border-bottom mt-3">
                                <div className="title-offer">BEST OFFERS</div>
                                <div className="offers-container">
                                    <div className="pdp-offers-offerTitle">Best Price: <span>Rs. 652</span></div>
                                    <ul className="pdp-offers-offerDesc m-0 p-0">
                                        <li>Applicable on: <span>Orders above Rs. 1199 (only on first purchase)</span></li>
                                        <li>Coupon code:<span>Test200</span></li>
                                        <li>Coupon Discount: <span>Rs. 217 off (check cart for final savings)</span></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="product product-info mt-3">
                                <div className="product-info-title">PRODUCT DETAILS</div>
                                <p className="text-sm m-0 p-0">Pink, blue & gold toned yoke design Kurta with Trousers with dupatta</p>
                                <div className="pdp-product-description-content">
                                    <div className="title">Kurta design:</div>
                                    <ul>
                                        <li>Ethnic motifs yoke design</li>
                                        <li>Straight shape</li>
                                        <li>Regular style</li>
                                        <li>Round neck, three-quarter regular sleeves</li>
                                        <li>Gotta patti detail</li>
                                        <li>Calf length length with straight hem</li>
                                        <li>Cotton blend machine weave fabric</li>
                                    </ul>
                                </div>
                                <div className="pdp-product-description-content">
                                    <div className="title">Size & Fit</div>
                                    <ul>
                                        <li>The model (height 5'8) is wearing a size S</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="widget similar-product">
                    <NewArrivals title="SIMILAR PRODUCTS" />
                </div>
                <div className="widget you-may-also-like">
                    <NewArrivals title="CUSTOMERS ALSO LIKED" />
                </div>
            </div>
        </div>
    )
}

export default ProductPage


