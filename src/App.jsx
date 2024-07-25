// src/App.jsx
import React, { useState } from 'react';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import './App.css';

function App() {
    const [products] = useState([
        { id: 1, name: 'Pijama Hombre', price: 30000, image: 'src/images/pijamahombre.png' },
        { id: 2, name: 'Medias Colores', price: 5000, image: 'src/images/mediascolores.png' },
        { id: 3, name: 'Blusa de Dama', price: 30000, image: 'src/images/blusadama.png' },
        { id: 4, name: 'Cobija de 2x2', price: 40000, image: 'src/images/cobija.png' },
    ]);

    const [cartItems, setCartItems] = useState([]);

    const handleAddToCart = (product) => {
        setCartItems([...cartItems, product]);
    };

    const handleRemoveFromCart = (id) => {
        setCartItems(cartItems.filter(item => item.id !== id));
    };

    return (
        <div className="App">
            <h1>CARRO DE COMPRAS DISTRIBUIDOR EL 104</h1>
            <ProductList products={products} onAddToCart={handleAddToCart} />
            <Cart cartItems={cartItems} onRemoveFromCart={handleRemoveFromCart} />
        </div>
    );
}

export default App;


