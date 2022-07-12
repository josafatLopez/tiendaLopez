import { useState, useEffect } from "react"
import { useParams } from 'react-router-dom'
import React from 'react'
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {

   const { itemId } = useParams()

   const [product, setProduct] = useState([]);
   const [loaded, setLoaded] = useState(true);

   useEffect(() => {

      fetch(`https://fakestoreapi.com/products/${itemId}`)
         .then(res => res.json())
         .then(data => setProduct(data))
         .catch(err => console.log(err))
         .finally(() => setLoaded(false))
   }, [itemId]);

   return (
      <div className='container'>
         {loaded ? <p>Loading...</p> :
            <ItemDetail
               product={product}
            />
         }
      </div>
   )
}

export default ItemDetailContainer