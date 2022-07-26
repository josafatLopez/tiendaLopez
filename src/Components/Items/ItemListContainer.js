import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getFirestore, collection, getDocs, query, where } from 'firebase/firestore'
import ItemList from './ItemList'
import './Items.css'


const ItemListContainer = () => {

  const { categoryName } = useParams()

  //For the items
  const [products, setProducts] = useState([]);
  const [loading, setLoaded] = useState(true);

  useEffect(() => {

    const queryDb = getFirestore();
    const queryCollection = collection(queryDb, 'products');

    if (categoryName) {
      const queryUrl = query(queryCollection, where('category', '==', categoryName))
      getDocs(queryUrl)
        .then(res => setProducts(res.docs.map(product => ({ id: product.id, ...product.data() }))))
        .catch(err => console.log(err))
        .finally(() => setLoaded(false))
    } else {
      getDocs(queryCollection)
        .then(res => setProducts(res.docs.map(product => ({ id: product.id, ...product.data() }))))
        .catch(err => console.log(err))
        .finally(() => setLoaded(false))
    }

    /* const url = categoryName ? `https://fakestoreapi.com/products/category/${categoryName}` : 'https://fakestoreapi.com/products/'; */

    /* fetch(url)
      .then(res => res.json())
      .then(data => setProducts(data))
      .catch(err => console.log(err))
      .finally(() => setLoaded(false)) */

  }, [categoryName]);

  return (
    <div className='container'>

      {/* Products */}
      <br /><br />
      {
        loading ? <p>Loading...</p> :
          <ItemList products={products} />
      }
    </div>
  )
}

export default ItemListContainer