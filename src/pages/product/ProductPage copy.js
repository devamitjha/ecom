import React, { useState, useEffect } from 'react';
import axios from "axios";
import { useLocation } from 'react-router-dom';

function ProductPage() {
    const [singleProduct, setSingleProduct] = useState();
    let location = useLocation();
    let { state } = useLocation();
    const url = location.pathname;
    const id = url.split("/").pop();
    console.log(id);
    console.log(state.productId);

    const fetchProduct = () => {
        axios.get(`https://fakestoreapi.com/products/${state.productId}`)
            .then(response => {
                setSingleProduct(response.data)
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    };

    useEffect(() => {
        fetchProduct();
    }, [])

    return (
        <div className="container">
            <div className="row">
                {singleProduct && singleProduct.title}
            </div>
        </div>
    )
}

export default ProductPage


