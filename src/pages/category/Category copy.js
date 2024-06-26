import React, { useState, useEffect } from 'react';
import axios from "axios";
import ProductCard from '../../components/productCard/ProductCard';
function Category() {
    //api :
    const [product, setProduct] = useState();
    const [loading, setLoading] = useState(true);

    const fetchProduct = () => {
        axios.get(' https://fakestoreapi.com/products')
            .then(response => {
                console.log(response.data);
                setProduct(response.data);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
                setLoading(false);
            });
    };

    useEffect(() => {
        fetchProduct();
    }, []);

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
        <div className="container product-list mt-5">
            <div className="row">
                {loading && Array.from({ length: 10 }).map((_, index) => (
                    <LoadingScreen key={index} />
                ))}

                {!loading && product && product.map((productItem) => (
                    <ProductCard key={productItem.id} productItem={productItem} />
                ))}
            </div>
        </div>
    )
}

export default Category