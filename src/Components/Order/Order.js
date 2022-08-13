import React, { useContext, useState } from 'react'
import { context } from '../Context/CartContext'
import { addDoc, collection, getFirestore, serverTimestamp, updateDoc, doc } from 'firebase/firestore'
import swal from 'sweetalert';
import './Order.css'

const Order = () => {
   const { products, totalPrice, clear } = useContext(context)

   const [ventaId, setVentaId] = useState('')

   const [buyer, setBuyer] = useState({
      name: '',
      phone: '',
      email: ''
   })

   const handleChange = (e) => {
      setBuyer({
         ...buyer,
         [e.target.name]: e.target.value
      })
   }

   const order = {
      buyer: buyer,
      items: products.map(product => ({ id: product.id, title: product.title, price: product.price, quantity: product.quantity, stock: product.stock })),
      total: totalPrice(),
      date: serverTimestamp(),
   }

   const handleSubmit = () => {
      const db = getFirestore();
      const ordersCollection = collection(db, 'orders');
      addDoc(ordersCollection, { order })
         .then((result) => { setVentaId(result.id) })
      console.log(ventaId)

      let i
      for (i = 0; i < order.items.length; i++) {
         const updateCollection = doc(db, 'products', order.items[i].id)
         updateDoc(updateCollection, { stock: order.items[i].stock - order.items[i].quantity })
      }

      swal("¡Gracias!", "Menús México agradece tu preferencia", "success");
      
      clear()
   }

   return (
      <div className='orderContainer'>
         <div className='orderForm'>
            <img loading='lazy' src={'/img/logo/iso-orange.png'} alt="Isotipo Menús México" />
            <h2>¡Termina tu compra!</h2>
            <p>Llena el siguiente formulario con los siguientes datos para completar tu compra, siéntete tranquilo que tus datos con nosotros estarán seguros.</p>
            <form>
               <input type="text" name='name' placeholder='Nombre Completo' onChange={handleChange} />
               <input type="tel" name='phone' placeholder='Teléfono' onChange={handleChange} />
               <input type="email" name='email' placeholder='Correo' onChange={handleChange} />
            </form>
            <button className='btnBuy btnBuy__blue' onClick={handleSubmit}>Finalizar Compra</button>
         </div>
      </div>
   )
}

export default Order