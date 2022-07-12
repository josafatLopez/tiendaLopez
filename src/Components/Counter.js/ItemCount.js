import { useState } from 'react'
import './Counter.css'

const ItemCount = ({ stock, initial, onAdd }) => {

   const [counter, setCounter] = useState(initial);

   const del = () => { counter > 0 ? setCounter(counter - 1) : alert('No puede bajar de 0') }
   const add = () => { counter < stock ? setCounter(counter + 1) : alert('No hay más stock') }

   return (
      <>
         <div className='flexCouner'>
            
            <button className='btnCounter' onClick={del}>-</button>
            <h3 className='counter'>{counter}</h3>
            <button className='btnCounter' onClick={add}>+</button>

            <button className='btnBuy' onClick={onAdd}>Agregar al Carrito</button>
         </div>
      </>
   )
}

export default ItemCount