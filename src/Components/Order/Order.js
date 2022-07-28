import React, { useContext, useState } from 'react'
import { context } from '../Context/CartContext'
import { addDoc, collection, getFirestore } from 'firebase/firestore'
import './Order.css'

const Order = () => {
   const [buyer, setBuyer] = useState({
      name: '',
      phone: '',
      email: ''
   })

   const handleChange = (e) => {
      setBuyer({
         ...buyer,
         [e.target.name] : e.target.value
      })
   }

   const { products, totalPrice } = useContext(context)

   const order = {
      buyer: buyer,
      items: products.map(product => ({ id: product.id, title: product.title, price: product.price, quantity: product.quantity})),
      total: totalPrice(),
   }

   const handleSubmit = () => {
      const db = getFirestore();
      const ordersCollection = collection(db, 'orders');
      addDoc(ordersCollection, {
         order
      })
   }

   return (
      <div className='container flexContainer'>
         <form>
            <input type="text" name='name' placeholder='Nombre Completo' onChange={handleChange}/>
            <input type="tel" name='phone' placeholder='Apellido' onChange={handleChange}/>
            <input type="email" name='email' placeholder='Correo' onChange={handleChange}/>
            <button onClick={handleSubmit}>Finalizar Compra</button>
         </form>
      </div>
   )
}

export default Order