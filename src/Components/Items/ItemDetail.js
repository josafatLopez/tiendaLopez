import React from 'react'

const ItemDetail = ({ product }) => {
   return (
      <>
         <div className="detailContainer">

            <div className="imageDetail">
               <img src={product.image} alt={product.title} />
            </div>

            <div className="contentDetail">
               <h1 className='detailTitle'>{product.title}</h1>
               <h3 className='detailCategory'>{product.category}</h3>
               <h2 className='detailPrice'>${product.price}MXN</h2>
               <p className='detailDescription'>
                  <strong className="descriptionTitle">Descripción</strong>
                  <br /><br />
                  {product.description}
               </p>

               <button className="addCart">Agregar al Carrito</button>
            </div>
         </div>
      </>
   )
}

export default ItemDetail