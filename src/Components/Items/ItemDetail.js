import React from 'react'
import ItemCount from '../Counter.js/ItemCount'

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

               <ItemCount stock={10} initial={1} />
               
            </div>
         </div>
      </>
   )
}

export default ItemDetail