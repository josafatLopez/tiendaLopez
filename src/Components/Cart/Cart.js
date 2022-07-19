import React, { useContext } from 'react'
import { context } from '../Context/CartContext'
import { Link } from 'react-router-dom'

const Cart = () => {
  const { products } = useContext(context)

  return (
    <>
      {products.length === 0
        ? <h1>No hay productos en tu carrito <Link to='/'>Busca Aquí</Link></h1>
        : <>{products.map(product =>
          <p key={product.id}>
            <strong>Producto:</strong> {product.title} <br />
            <strong>Precio:</strong> {product.price} <br />
            <strong>Cantidad:</strong> {product.quantity} <br />
          </p>)}</>
      }
    </>
  )
}

export default Cart