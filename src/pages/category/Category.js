import React, { useState, useEffect } from 'react';
import CategoryTopBanner from '../../components/categoryTopBanner/CategoryTopbanner';
import CategorySlider from '../../components/categorySlider/CategorySlider';
import "./category.scss";
import { IconContext } from "react-icons";
import { AiOutlineEye, AiOutlineHeart, AiOutlineShoppingCart } from "react-icons/ai";
import { IoStar, IoStarHalf, IoStarOutline } from "react-icons/io5";
import SidebarFilter from '../../components/sidebarFilter/SidebarFilter';
import { Link } from 'react-router-dom';
import products from '../../assets/data/products';
import Rating from 'react-rating';

const ProductList = () => {
    return products.map((item) => (
        <Link to={`/product/${item.category.slug}`} className="col-6 col-sm-4 mb-4 position-relative" key={item._id}>
            <div className="badge-product-sale">
                <span className="new">{item.offer}</span>
            </div>
            <div className="img-container rounded">
                <img src={process.env.PUBLIC_URL + `${item.image}`} alt={item.title} />
                <div className="product-item-action d-flex justify-content-center align-items-center">
                    <div className="icon-set border d-flex justify-content-center align-items-center">
                        <IconContext.Provider value={{ size: 20, className: "r-icon" }}>
                            <AiOutlineShoppingCart />
                        </IconContext.Provider>
                    </div>
                    <div className="icon-set border d-flex justify-content-center align-items-center">
                        <IconContext.Provider value={{ size: 20, className: "r-icon" }}>
                            <AiOutlineHeart />
                        </IconContext.Provider>
                    </div>
                    <div className="icon-set border d-flex justify-content-center align-items-center">
                        <IconContext.Provider value={{ size: 20, className: "r-icon" }}>
                            <AiOutlineEye />
                        </IconContext.Provider>
                    </div>
                </div>
            </div>
            <div className="product-item-details">
                <div className="product-title">{item.title}</div>
                <div className="price-and-stars d-flex justify-content-between align-items-center my-1">
                    <div className="price"><span>&#8377;</span>{item.price} <span className="text-sm text-decoration-line-through"><span>&#8377;</span>{item.slashed_price}</span></div>
                    <div className="stars">
                        <IconContext.Provider value={{ className: "r-icon" }}>
                            <Rating
                                emptySymbol=<IoStarOutline />
                                fullSymbol=<IoStar />
                                initialRating={4.5}
                                readonly
                            />
                        </IconContext.Provider>
                    </div>

                </div>
                <div className="available-color d-flex">
                    {
                        item.colors.map((color) => (
                            <div className={`color ${color.toLowerCase()} active`}></div>
                        ))
                    }
                </div>
            </div>
        </Link>
    ));
};

function Category() {
    const LoadingScreen = () => {
        return (
            <div className="col-6 col-sm-3">
                <div className="ph-item" style={{ "borderRadius": 8 }}>
                    <div className="ph-col-12">
                        <div className="ph-picture mb-4" style={{ "height": 250 }}></div>
                        <div className="ph-row">
                            <div className="ph-col-4"></div>
                            <div className="ph-col-8 empty"></div>
                            <div className="ph-col-6"></div>
                            <div className="ph-col-6 empty"></div>
                            <div className="ph-col-2"></div>
                            <div className="ph-col-10 empty"></div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className="block">
            <CategoryTopBanner />
            <div className="container product-list mt-5">
                <div className="row">
                    <CategorySlider />
                </div>
                <div className="row my-5 border-top">
                    <div className="col-12 col-sm-3">
                        <SidebarFilter />
                    </div>
                    <div className="col-12 col-sm-9 main-category">
                        <div className="row">
                            <div className="sort-filter d-flex justify-content-between align-items-center">
                                <div className="col-3">
                                    <span className="total-item">Items 1-12 of 27</span>
                                </div>
                                <div className="col-9">
                                    other filters
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <ProductList />
                        </div>
                        <div className='my-5 button-load-more d-flex justify-content-center align-items-center border m-auto text-uppercase'>
                            Load More
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Category