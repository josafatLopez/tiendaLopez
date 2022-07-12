import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ItemList from './ItemList'
import ItemCount from '../Counter.js/ItemCount'
import './Items.css'


const ItemListContainer = () => {

  //For the counter
  //const onAdd = () => { alert('Productos agregados al carrito') }

  const { categoryName } = useParams()

  //For the items
  const [products, setProducts] = useState([]);
  const [loading, setLoaded] = useState(true);

  useEffect(() => {

    const url = categoryName ? `https://fakestoreapi.com/products/category/${categoryName}` : 'https://fakestoreapi.com/products/';

    fetch(url)
      .then(res => res.json())
      .then(data => setProducts(data))
      .catch(err => console.log(err))
      .finally(() => setLoaded(false))
  }, [categoryName]);

  return (
    <div className='container'>

      {/* Item with counter 
        <ItemCount productName={'productOne'} stock={4} initial={1} onAdd={onAdd} />
        <ItemCount productName={'productOne'} stock={4} initial={0} onAdd={onAdd} />
      */}

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