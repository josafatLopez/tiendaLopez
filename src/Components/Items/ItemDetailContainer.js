import { useState, useEffect } from "react"
import React from 'react'
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {

   const [products, setProducts] = useState([]);
   const [loaded, setLoaded] = useState(true);

   useEffect(() => {
      fetch('https://fakestoreapi.com/products/')
         .then(res => res.json())
         .then(data => setProducts(data))
         .catch(err => console.log(err))
         .finally(() => setLoaded(false))
   }, []);

   return (
      <div className='container'>
         {loaded ? <p>Loading...</p> : products.map((product) => (
            <ItemDetail
               key={product.id}
               product={product}
            />
         ))}
      </div>
   )
}

export default ItemDetailContainer