import { useState } from 'react'
import './Counter.css'

const ItemCount = ( {productName, stock, initial, onAdd} ) => {

   const [counter, setCounter] = useState(initial);

   const del = () => {counter > 0 ? setCounter(counter - 1) : alert('No puede bajar de 0')}
   const add = () => {counter < stock ? setCounter(counter + 1) : alert('No hay más stock')}

   return (
      <>
         <div className='flexContainer'>
            <h2>{productName}</h2>
            <button className='btnCounter' onClick={del}>-</button>
            <h3>{counter}</h3>
            <button className='btnCounter' onClick={add}>+</button>
         </div>
         <button className='btnBuy' onClick={onAdd}>Agregar al Carrito</button>
      </>
   )
}

export default ItemCount