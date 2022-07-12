import React from 'react'
import { Link } from 'react-router-dom'
import './Items.css'

const Item = ({ product }) => {

  return (
    <>
      <div className='itemCard'>

        <div className="imageCard">
          <img src={product.image} alt={product.title} />
        </div>

        <div className='bodyCard'>
          <h2 className='cardTitle'>{product.title}</h2>
          <p className='cardCategory'>{product.category}</p>
          <h3 className='cardPrice'> ${product.price}MXN</h3>
          <p className='cardDescription'>{product.description}</p>

          <div className="bodyFooter">
            <Link to={`/item/${product.id}`} className="btnDetails">Ver Detalles</Link>
            {/* <button className="btnCart"><i className="fa-solid fa-cart-shopping"></i></button> */}
          </div>
        </div>

      </div>
    </>
  )
}

export default Item