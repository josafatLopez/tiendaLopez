import { useState, useEffect } from "react"
import { useParams } from 'react-router-dom'
import { getFirestore, doc, getDoc } from 'firebase/firestore'
import React from 'react'
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {

   const { itemId } = useParams()

   const [product, setProduct] = useState([]);
   const [loaded, setLoaded] = useState(true);

   useEffect(() => {

      const queryDb = getFirestore();
      const queryDoc = doc(queryDb, 'products', itemId);
      getDoc(queryDoc)
         .then(res => setProduct({id: res.id, ...res.data()}))
         .catch(err => console.log(err))
         .finally(() => setLoaded(false))

      /* fetch(`https://fakestoreapi.com/products/${itemId}`)
         .then(res => res.json())
         .then(data => setProduct(data))
         .catch(err => console.log(err))
         .finally(() => setLoaded(false)) */
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