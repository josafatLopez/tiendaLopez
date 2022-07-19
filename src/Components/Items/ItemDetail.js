import React, { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import ItemCount from '../Counter.js/ItemCount'
import { context } from '../Context/CartContext'

const ItemDetail = ({ product }) => {

   const [finish, setFinish] = useState(false);
   const { addItem } = useContext(context)

   const onAdd = (counter) => {
      setFinish(true);
      addItem({ ...product, quantity: counter });
      //console.log('Productos agregados', counter)
   }
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

               {finish ?
                  <Link to="/cart">
                     <button className='btnBuy'>Finalizar compra</button>
                  </Link>
                  :
                  <ItemCount stock={10} initial={0} onAdd={onAdd} />
               }

            </div>
         </div>
      </>
   )
}

export default ItemDetail