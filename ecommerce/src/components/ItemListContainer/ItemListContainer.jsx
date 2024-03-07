const ItemListContainer = ({ greeting, addToCart }) => {
    return (
        <div>
            <h1>{greeting}</h1>
            <div className="product-section">
                <div className="product-card">
                    <img src="./img/camisetaracing.png" alt="Camiseta" />
                    <h3>Camiseta</h3>
                    <button onClick={() => addToCart('Camisetas')}>Agregar al carrito</button>
                </div>
                <div className="product-card">
                    <img src="./img/shortracing.png" alt="Shorts" />
                    <h3>Shorts</h3>
                    <button onClick={() => addToCart('Shorts')}>Agregar al carrito</button>
                </div>
                <div className="product-card">
                    <img src="./img/chombaracing.png" alt="Chomba" />
                    <h3>Chomba</h3>
                    <button onClick={() => addToCart('Chombas')}>Agregar al carrito</button>
                </div>
                <div className="product-card">
                    <img src="./img/camperaracing.png" alt="Campera" />
                    <h3>Campera</h3>
                    <button onClick={() => addToCart('Camperas')}>Agregar al carrito</button>
                </div>
            </div>
        </div>
    )
}

export default ItemListContainer;