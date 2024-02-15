import CartWidget from "../header/CartWidget/CartWidget"

const NavBar = () => {
    return (
        <nav>
            <h3>La Escuelita de Sayago</h3>
            <div>
                <button>Camisetas</button>
                <button>Shorts</button>
                <button>Chombas</button>
                <button>Camperas</button>
            </div>
            <CartWidget/>
        </nav>
    )
}

export default NavBar