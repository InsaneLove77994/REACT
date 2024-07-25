// src/components/Product.jsx
import React from 'react';

function Product({ product, onAddToCart }) {
    return (
        <div className="product-item">
            <img src={product.image} alt={product.name} className="product-image" />
            <h2>{product.name}</h2>
            <p>Precio: ${product.price.toLocaleString()}</p>
            <button onClick={() => onAddToCart(product)}>Añadir al carrito</button>
        </div>
    );
}

export default Product;

