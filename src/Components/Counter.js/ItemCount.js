import { useState } from 'react'
import './Counter.css'
import swal from 'sweetalert';

const ItemCount = ({ stock, initial, onAdd }) => {

   const [counter, setCounter] = useState(initial);

   const del = () => { counter > 1 ? setCounter(counter - 1) : swal("¡Cuidado!", "La compra necesita al menos un producto", "error"); }
   const add = () => { counter < stock ? setCounter(counter + 1) : swal("¡Lo sentimos!", "No contamos con la cantidad de productos suficiente", "warning"); }

   const addToCart = () => {
      onAdd(counter);
      //console.log(counter)
   }

   return (
      <>
         <div className='flexCouner'>

            <button className='btnCounter' onClick={del}>-</button>
            <h3 className='counter'>{counter}</h3>
            <button className='btnCounter marginRight' onClick={add}>+</button>

            <button className='btnBuy' onClick={() => addToCart()}>Agregar al Carrito</button>
         </div>
      </>
   )
}

export default ItemCount