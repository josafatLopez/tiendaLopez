import React from 'react'

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
          <p className='cardDescription'>{product.escription}</p>

          <div className="bodyFooter">
            <button className="btnDetails">Ver Detalles</button>
            {/* <button className="btnCart"><i className="fa-solid fa-cart-shopping"></i></button> */}
          </div>
        </div>

      </div>
    </>
  )
}

export default Item