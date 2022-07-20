import React, { useContext } from 'react'
import { context } from '../Context/CartContext'
import { Link } from 'react-router-dom'

const CartWidget = () => {

  const { qtyProducts } = useContext(context)
  return (
    <div>
      <li>
        <Link to="/cart" className="cartIcon">
          <i className="fa-solid fa-cart-shopping"></i>
          <span className="cartNumber">{qtyProducts}</span>
        </Link>
      </li>
    </div>
  )
}

export default CartWidget