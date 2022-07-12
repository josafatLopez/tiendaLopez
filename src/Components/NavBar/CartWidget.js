import { Link } from 'react-router-dom'

const CartWidget = () => {
  return (
    <div>
      <li>
        <Link to="/cart" className="cartIcon">
          <i className="fa-solid fa-cart-shopping"></i>
          <span className="cartNumber">0</span>
        </Link>
      </li>
    </div>
  )
}

export default CartWidget