import React from 'react';
import "./newarrivals.scss";
import { IconContext } from "react-icons";
import { AiOutlineEye , AiOutlineHeart, AiOutlineShoppingCart } from "react-icons/ai";
import { IoStar, IoStarHalf  } from "react-icons/io5";

const NewArrivals = (props) => {
    return (
        <div className="container mb-5">
            <div className="row">
                <div className="widget-title text-center mt-50">
                    <h3>{props.title}</h3>
                </div>
            </div>
            <div className="row tab-item mt-4">
                <ul className="d-flex justify-content-center align-items-center">
                    <li className="text-uppercase active">Ring</li>
                    <li className="text-uppercase">Earring</li>
                    <li className="text-uppercase">Pendants</li>
                    <li className="text-uppercase">Mangalsutra</li>
                    <li className="text-uppercase">Bracelets</li>
                </ul>
            </div>
            <div className="row tab-content mt-4 position-relative">
                <div className="col-6 col-sm-3 mb-4 position-relative">
                    <div class="badge-product-sale">
                        <span class="new">-15%</span>
                    </div>
                    <div className="img-container rounded">
                        <img src={process.env.PUBLIC_URL + "/images/product-1.jpg"} alt="na" />
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
                <div className="col-6 col-sm-3 mb-4 position-relative">
                    <div className="img-container rounded">
                        <img src={process.env.PUBLIC_URL + "/images/product-2.jpg"} alt="na" />
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
                <div className="col-6 col-sm-3 mb-4 position-relative">
                    <div className="img-container rounded">
                        <img src={process.env.PUBLIC_URL + "/images/product-3.jpg"} alt="na" />
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
                <div className="col-6 col-sm-3 mb-4 position-relative">
                    <div class="badge-product-sale">
                        <span class="new">-15%</span>
                    </div>
                    <div className="img-container rounded">
                        <img src={process.env.PUBLIC_URL + "/images/product-4.jpg"} alt="na" />
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
                <div className="col-6 col-sm-3 mb-4 position-relative">
                    <div className="img-container rounded">
                        <img src={process.env.PUBLIC_URL + "/images/product-5.jpg"} alt="na" />
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
                <div className="col-6 col-sm-3 mb-4 position-relative">
                    <div className="img-container rounded">
                        <img src={process.env.PUBLIC_URL + "/images/product-6.jpg"} alt="na" />
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
                <div className="col-6 col-sm-3 mb-4 position-relative">
                    <div class="badge-product-sale">
                        <span class="new">-15%</span>
                    </div>
                    <div className="img-container rounded">
                        <img src={process.env.PUBLIC_URL + "/images/product-7.jpg"} alt="na" />
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
                <div className="col-6 col-sm-3 mb-4 position-relative">                   
                    <div className="img-container rounded">
                        <img src={process.env.PUBLIC_URL + "/images/product-8.jpg"} alt="na" />
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
            {/* <div className='button-load-more d-flex justify-content-center align-items-center border m-auto text-uppercase'>
                Load More
            </div> */}
        </div>
    )
}

export default NewArrivals