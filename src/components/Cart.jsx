// src/components/Cart.jsx
import React from 'react';

function Cart({ cartItems, onRemoveFromCart }) {
    const totalAmount = cartItems.reduce((total, item) => total + item.price, 0);

    return (
        <div className="cart">
            <h2>Carrito de Compras</h2>
            {cartItems.length === 0 ? (
                <p>No hay productos en el carrito.</p>
            ) : (
                <div>
                    {cartItems.map(item => (
                        <div key={item.id} className="cart-item">
                            <h3>{item.name}</h3>
                            <p>Precio: ${item.price.toLocaleString()}</p>
                            <button onClick={() => onRemoveFromCart(item.id)}>Eliminar</button>
                        </div>
                    ))}
                    <div className="cart-total">
                        <h3>Total: ${totalAmount.toLocaleString()}</h3>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Cart;

