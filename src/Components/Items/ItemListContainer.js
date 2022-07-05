import { useState, useEffect } from 'react'

import Item from './Item'
import ItemList from './ItemList'
import ItemCount from '../Counter.js/ItemCount'

const ItemListContainer = () => {

  //For the counter
  const onAdd = () => { alert('Productos agregados al carrito') }

  //For the items
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products/');
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        setError(true);
        console.err(error);
      }
      finally {
        console.log('finally');
        setLoading(false)
      }
    }
    getProducts();
  }, []);

  return (
    <div className='container'>

      {/* Item */}
      <Item title='' />

      {/* Item with counter */}
      <ItemCount productName={'productOne'} stock={4} initial={1} onAdd={onAdd} />
      <ItemCount productName={'productOne'} stock={4} initial={0} onAdd={onAdd} />

      {/* Products */}
      <br /><br />
      {loading ? <p>Loading...</p> :
        error ? <p>Error</p> :
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