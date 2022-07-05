import { useState, useEffect } from 'react'

import ItemList from './ItemList'
import ItemCount from '../Counter.js/ItemCount'

import './Items.css'

const ItemListContainer = () => {

  //For the counter
  const onAdd = () => { alert('Productos agregados al carrito') }

  //For the items
  const [products, setProducts] = useState([]);
  const [loading, setLoaded] = useState(true);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products/')
      .then(res => res.json())
      .then(data => setProducts(data))
      .catch(err => console.log(err))
      .finally(() => setLoaded(false))
  }, []);

  return (
    <div className='container'>

      {/* Item with counter 
        <ItemCount productName={'productOne'} stock={4} initial={1} onAdd={onAdd} />
        <ItemCount productName={'productOne'} stock={4} initial={0} onAdd={onAdd} />
      */}

      {/* Products */}
      <br /><br />
      {loading ? <p>Loading...</p> :
        <ItemList products={products} />
      }
      {/* {loading ? <p>Loading...</p> :
        error ? <p>Error</p> :
          <ItemList products={products} />
          <ul>{products.map((product) => <li key={product.id}>{product.title}</li>)}</ul>
      } */}
    </div>
  )
}

export default ItemListContainer