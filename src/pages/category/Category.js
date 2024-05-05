import React, { useState, useEffect } from 'react';
import CategoryTopBanner from '../../components/categoryTopBanner/CategoryTopbanner';
import CategorySlider from '../../components/categorySlider/CategorySlider';
import "./category.scss";
import { IconContext } from "react-icons";
import { AiOutlineEye , AiOutlineHeart, AiOutlineShoppingCart } from "react-icons/ai";
import { IoStar, IoStarHalf  } from "react-icons/io5";
import SidebarFilter from '../../components/sidebarFilter/SidebarFilter';

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
            <CategoryTopBanner/>
            <div className="container product-list mt-5">
                <div className="row">
                    <CategorySlider/>
                </div>
                <div className="row my-5 border-top">
                    <div className="col-12 col-sm-3">
                        <SidebarFilter/>
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
                            <div className="col-6 col-sm-4 mb-4 position-relative">
                                <div className="badge-product-sale">
                                    <span className="new">-15%</span>
                                </div>
                                <div className="img-container rounded">
                                    <img src={process.env.PUBLIC_URL + "/images/category/fashion_products_1_1.jpg"} alt="na" />
                                    <div className="product-item-action d-flex justify-content-center align-items-center">
                                        <div className="icon-set border d-flex justify-content-center align-items-center">
                                            <IconContext.Provider value={{ size: 20, className: "r-icon" }}>
                                                <AiOutlineShoppingCart />
                                            </IconContext.Provider>
                                        </div>
                                        <div className="icon-set border d-flex justify-content-center align-items-center">
                                            <IconContext.Provider value={{ size: 20, className: "r-icon" }}>
                                                <AiOutlineHeart  />
                                            </IconContext.Provider>
                                        </div>
                                        <div className="icon-set border d-flex justify-content-center align-items-center">
                                            <IconContext.Provider value={{ size: 20, className: "r-icon" }}>
                                                <AiOutlineEye/>
                                            </IconContext.Provider>
                                        </div>
                                    </div>
                                </div>
                                <div className="product-item-details">
                                    <div className="product-title">Cotton Button-up Shirt</div>
                                    <div className="price-and-stars d-flex justify-content-between align-items-center my-1">
                                        <div className="price"><span>$</span>200</div>
                                        <div className="stars">
                                            <IconContext.Provider value={{className: "r-icon" }}>
                                                <IoStar/>
                                                <IoStar/>
                                                <IoStar/>
                                                <IoStar/>
                                                <IoStarHalf/>
                                            </IconContext.Provider>
                                        </div>
                                    </div>
                                    <div className="available-color d-flex">
                                        <div className="color black active"></div>
                                        <div className="color blue active"></div>
                                        <div className="color red active"></div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-6 col-sm-4 mb-4 position-relative">
                                <div className="badge-product-sale">
                                    <span className="new">-15%</span>
                                </div>
                                <div className="img-container rounded">
                                    <img src={process.env.PUBLIC_URL + "/images/category/fashion_products_3_1.jpg"} alt="na" />
                                    <div className="product-item-action d-flex justify-content-center align-items-center">
                                        <div className="icon-set border d-flex justify-content-center align-items-center">
                                            <IconContext.Provider value={{ size: 20, className: "r-icon" }}>
                                                <AiOutlineShoppingCart />
                                            </IconContext.Provider>
                                        </div>
                                        <div className="icon-set border d-flex justify-content-center align-items-center">
                                            <IconContext.Provider value={{ size: 20, className: "r-icon" }}>
                                                <AiOutlineHeart  />
                                            </IconContext.Provider>
                                        </div>
                                        <div className="icon-set border d-flex justify-content-center align-items-center">
                                            <IconContext.Provider value={{ size: 20, className: "r-icon" }}>
                                                <AiOutlineEye/>
                                            </IconContext.Provider>
                                        </div>
                                    </div>
                                </div>
                                <div className="product-item-details">
                                    <div className="product-title">Cotton Button-up Shirt</div>
                                    <div className="price-and-stars d-flex justify-content-between align-items-center my-1">
                                        <div className="price"><span>$</span>200</div>
                                        <div className="stars">
                                            <IconContext.Provider value={{className: "r-icon" }}>
                                                <IoStar/>
                                                <IoStar/>
                                                <IoStar/>
                                                <IoStar/>
                                                <IoStarHalf/>
                                            </IconContext.Provider>
                                        </div>
                                    </div>
                                    <div className="available-color d-flex">
                                        <div className="color black active"></div>
                                        <div className="color blue active"></div>
                                        <div className="color red active"></div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-6 col-sm-4 mb-4 position-relative">
                                <div className="badge-product-sale">
                                    <span className="new">-15%</span>
                                </div>
                                <div className="img-container rounded">
                                    <img src={process.env.PUBLIC_URL + "/images/category/fashion_products_8_1.jpg"} alt="na" />
                                    <div className="product-item-action d-flex justify-content-center align-items-center">
                                        <div className="icon-set border d-flex justify-content-center align-items-center">
                                            <IconContext.Provider value={{ size: 20, className: "r-icon" }}>
                                                <AiOutlineShoppingCart />
                                            </IconContext.Provider>
                                        </div>
                                        <div className="icon-set border d-flex justify-content-center align-items-center">
                                            <IconContext.Provider value={{ size: 20, className: "r-icon" }}>
                                                <AiOutlineHeart  />
                                            </IconContext.Provider>
                                        </div>
                                        <div className="icon-set border d-flex justify-content-center align-items-center">
                                            <IconContext.Provider value={{ size: 20, className: "r-icon" }}>
                                                <AiOutlineEye/>
                                            </IconContext.Provider>
                                        </div>
                                    </div>
                                </div>
                                <div className="product-item-details">
                                    <div className="product-title">Cotton Button-up Shirt</div>
                                    <div className="price-and-stars d-flex justify-content-between align-items-center my-1">
                                        <div className="price"><span>$</span>200</div>
                                        <div className="stars">
                                            <IconContext.Provider value={{className: "r-icon" }}>
                                                <IoStar/>
                                                <IoStar/>
                                                <IoStar/>
                                                <IoStar/>
                                                <IoStarHalf/>
                                            </IconContext.Provider>
                                        </div>
                                    </div>
                                    <div className="available-color d-flex">
                                        <div className="color black active"></div>
                                        <div className="color blue active"></div>
                                        <div className="color red active"></div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-6 col-sm-4 mb-4 position-relative">
                                <div className="badge-product-sale">
                                    <span className="new">-15%</span>
                                </div>
                                <div className="img-container rounded">
                                    <img src={process.env.PUBLIC_URL + "/images/category/fashion_products_10_1.jpg"} alt="na" />
                                    <div className="product-item-action d-flex justify-content-center align-items-center">
                                        <div className="icon-set border d-flex justify-content-center align-items-center">
                                            <IconContext.Provider value={{ size: 20, className: "r-icon" }}>
                                                <AiOutlineShoppingCart />
                                            </IconContext.Provider>
                                        </div>
                                        <div className="icon-set border d-flex justify-content-center align-items-center">
                                            <IconContext.Provider value={{ size: 20, className: "r-icon" }}>
                                                <AiOutlineHeart  />
                                            </IconContext.Provider>
                                        </div>
                                        <div className="icon-set border d-flex justify-content-center align-items-center">
                                            <IconContext.Provider value={{ size: 20, className: "r-icon" }}>
                                                <AiOutlineEye/>
                                            </IconContext.Provider>
                                        </div>
                                    </div>
                                </div>
                                <div className="product-item-details">
                                    <div className="product-title">Cotton Button-up Shirt</div>
                                    <div className="price-and-stars d-flex justify-content-between align-items-center my-1">
                                        <div className="price"><span>$</span>200</div>
                                        <div className="stars">
                                            <IconContext.Provider value={{className: "r-icon" }}>
                                                <IoStar/>
                                                <IoStar/>
                                                <IoStar/>
                                                <IoStar/>
                                                <IoStarHalf/>
                                            </IconContext.Provider>
                                        </div>
                                    </div>
                                    <div className="available-color d-flex">
                                        <div className="color black active"></div>
                                        <div className="color blue active"></div>
                                        <div className="color red active"></div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-6 col-sm-4 mb-4 position-relative">
                                <div className="badge-product-sale">
                                    <span className="new">-15%</span>
                                </div>
                                <div className="img-container rounded">
                                    <img src={process.env.PUBLIC_URL + "/images/category/fashion_products_11_1.jpg"} alt="na" />
                                    <div className="product-item-action d-flex justify-content-center align-items-center">
                                        <div className="icon-set border d-flex justify-content-center align-items-center">
                                            <IconContext.Provider value={{ size: 20, className: "r-icon" }}>
                                                <AiOutlineShoppingCart />
                                            </IconContext.Provider>
                                        </div>
                                        <div className="icon-set border d-flex justify-content-center align-items-center">
                                            <IconContext.Provider value={{ size: 20, className: "r-icon" }}>
                                                <AiOutlineHeart  />
                                            </IconContext.Provider>
                                        </div>
                                        <div className="icon-set border d-flex justify-content-center align-items-center">
                                            <IconContext.Provider value={{ size: 20, className: "r-icon" }}>
                                                <AiOutlineEye/>
                                            </IconContext.Provider>
                                        </div>
                                    </div>
                                </div>
                                <div className="product-item-details">
                                    <div className="product-title">Cotton Button-up Shirt</div>
                                    <div className="price-and-stars d-flex justify-content-between align-items-center my-1">
                                        <div className="price"><span>$</span>200</div>
                                        <div className="stars">
                                            <IconContext.Provider value={{className: "r-icon" }}>
                                                <IoStar/>
                                                <IoStar/>
                                                <IoStar/>
                                                <IoStar/>
                                                <IoStarHalf/>
                                            </IconContext.Provider>
                                        </div>
                                    </div>
                                    <div className="available-color d-flex">
                                        <div className="color black active"></div>
                                        <div className="color blue active"></div>
                                        <div className="color red active"></div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-6 col-sm-4 mb-4 position-relative">
                                <div className="badge-product-sale">
                                    <span className="new">-15%</span>
                                </div>
                                <div className="img-container rounded">
                                    <img src={process.env.PUBLIC_URL + "/images/category/fashion_products_13_1.jpg"} alt="na" />
                                    <div className="product-item-action d-flex justify-content-center align-items-center">
                                        <div className="icon-set border d-flex justify-content-center align-items-center">
                                            <IconContext.Provider value={{ size: 20, className: "r-icon" }}>
                                                <AiOutlineShoppingCart />
                                            </IconContext.Provider>
                                        </div>
                                        <div className="icon-set border d-flex justify-content-center align-items-center">
                                            <IconContext.Provider value={{ size: 20, className: "r-icon" }}>
                                                <AiOutlineHeart  />
                                            </IconContext.Provider>
                                        </div>
                                        <div className="icon-set border d-flex justify-content-center align-items-center">
                                            <IconContext.Provider value={{ size: 20, className: "r-icon" }}>
                                                <AiOutlineEye/>
                                            </IconContext.Provider>
                                        </div>
                                    </div>
                                </div>
                                <div className="product-item-details">
                                    <div className="product-title">Cotton Button-up Shirt</div>
                                    <div className="price-and-stars d-flex justify-content-between align-items-center my-1">
                                        <div className="price"><span>$</span>200</div>
                                        <div className="stars">
                                            <IconContext.Provider value={{className: "r-icon" }}>
                                                <IoStar/>
                                                <IoStar/>
                                                <IoStar/>
                                                <IoStar/>
                                                <IoStarHalf/>
                                            </IconContext.Provider>
                                        </div>
                                    </div>
                                    <div className="available-color d-flex">
                                        <div className="color black active"></div>
                                        <div className="color blue active"></div>
                                        <div className="color red active"></div>
                                    </div>
                                </div>
                            </div>
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