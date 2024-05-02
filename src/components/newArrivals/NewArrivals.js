import React from 'react';
import "./newarrivals.scss";


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
            <div className="row tab-content mt-4">
                <div className="col-6 col-sm-3 mb-4">
                    <div className="img-container rounded">
                        <img src={process.env.PUBLIC_URL + "/images/product-1.jpg"} alt="na" />
                    </div>
                </div>
                <div className="col-6 col-sm-3 mb-4">
                    <div className="img-container rounded">
                        <img src={process.env.PUBLIC_URL + "/images/product-2.jpg"} alt="na" />
                    </div>
                </div>
                <div className="col-6 col-sm-3 mb-4">
                    <div className="img-container rounded">
                        <img src={process.env.PUBLIC_URL + "/images/product-3.jpg"} alt="na" />
                    </div>
                </div>
                <div className="col-6 col-sm-3 mb-4">
                    <div className="img-container rounded">
                        <img src={process.env.PUBLIC_URL + "/images/product-4.jpg"} alt="na" />
                    </div>
                </div>
                <div className="col-6 col-sm-3 mb-4">
                    <div className="img-container rounded">
                        <img src={process.env.PUBLIC_URL + "/images/product-5.jpg"} alt="na" />
                    </div>
                </div>
                <div className="col-6 col-sm-3 mb-4">
                    <div className="img-container rounded">
                        <img src={process.env.PUBLIC_URL + "/images/product-6.jpg"} alt="na" />
                    </div>
                </div>
                <div className="col-6 col-sm-3 mb-4">
                    <div className="img-container rounded">
                        <img src={process.env.PUBLIC_URL + "/images/product-7.jpg"} alt="na" />
                    </div>
                </div>
                <div className="col-6 col-sm-3 mb-4">
                    <div className="img-container rounded">
                        <img src={process.env.PUBLIC_URL + "/images/product-8.jpg"} alt="na" />
                    </div>
                </div>
            </div>
            <div className='button-load-more d-flex justify-content-center align-items-center border m-auto text-uppercase'>
                Load More
            </div>
        </div>
    )
}

export default NewArrivals