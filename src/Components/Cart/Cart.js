import React, { useContext } from 'react'
import { context } from '../Context/CartContext'
import { Link } from 'react-router-dom'
import './Cart.css'

const Cart = () => {
  const { products, removeItem, clear, totalPrice, totalProducts } = useContext(context)

  return (
    <>
      {products.length === 0
        ? <div className="cartItems">
          <h1>No hay productos en tu carrito <Link to='/'>Busca Aquí</Link></h1>
        </div>
        : <div className='cartItems'>
          {products.map(product =>
            <div className="cartList" key={product.id}>
              <div className="cartList__product" >
                <div className='cartProduct__img'>
                  <img src={product.image} alt={product.title} />
                </div>
                <div className='cartProduct__info'>
                  <h2 className='cartProduct__title'> {product.title} </h2>
                  <p className='cartProduct__subtitle'>{product.subtitle}</p><br />
                  <strong>Subtotal:</strong> ${product.price * product.quantity} MXN<br />
                  <strong>Cantidad:</strong> {product.quantity} <br /><br />
                  <button onClick={() => removeItem(product.id)} className="deleteProduct">Eliminar Producto</button>
                </div>
              </div>
            </div>
          )}
          <aside className='cartInfo'>
            <h3>
              Productos Totales: {totalProducts()} <br />
              Costo Total: ${totalPrice()} MXN <br /><br />
            </h3>
            <Link to="/order" className="btnBuy">Terminar Compra</Link><br />
            <button onClick={() => clear()} className="ghostBtnBuy">Vaciar Carrito</button>
          </aside>
        </div>
      }
    </>
  )
}

export default Cart