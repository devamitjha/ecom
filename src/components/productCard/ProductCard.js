import React from 'react';
import { Link } from 'react-router-dom';
import "./card.scss";

function ProductCard(props) {
    const { title, image, price, id, description } = props.productItem;
    return (
        <div className="col-6 col-sm-3 mb-4">
            <Link to={`/product/${id}`} state={{ productId: id }} className="card">
                <div className="product-image">
                    <img src={image} alt={title} className="card-img-top" />
                </div>
                <div className="card-body">
                    <h5 className="fs-6 fw-bold">{title.length > 20 ? title.substring(0, 20) + '...' : title}</h5>
                    <p className="card-text">{description}</p>
                    <p className="card-text fs-5">${price}</p>
                </div>
            </Link>
        </div>
    );
}

export default ProductCard;
