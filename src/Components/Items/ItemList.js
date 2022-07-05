import React from 'react'
import Item from './Item'

import './Items.css'

const ItemList = ({ products }) => {
   return (
      <>
         <div className='listContainer'>
            {products.map((product) => (
               <Item
                  key={product.id}
                  product={product}
               />
            ))}
         </div>
      </>
   )
}

export default ItemList
