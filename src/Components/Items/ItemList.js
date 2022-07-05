import React from 'react'
import Item from './Item'

const ItemList = ({products}) => {
   return (
      <>
         {products.map((product) => (
            <Item key={product.id} product={product}/>
         ))} 
         
         {/* {products.map((product) => (
            <Item key={product.id} product={product} />
            

            Este es el bueno
            <p key={product.id}>{product.title}</p>
         ))} */}
      </>
   )
}

export default ItemList