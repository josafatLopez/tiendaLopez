import React, { useContext, useState } from 'react'
import { context } from '../Context/CartContext'
import { addDoc, collection, getFirestore, serverTimestamp, updateDoc, doc } from 'firebase/firestore'
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

      const updateCollection = doc(db, 'products', order.items[0].id)
      updateDoc(updateCollection, {stock: order.items[0].stock - order.items[0].quantity})

      clear()
   }

   return (
      <div className='container flexContainer'>
         <form>
            <input type="text" name='name' placeholder='Nombre Completo' onChange={handleChange} />
            <input type="tel" name='phone' placeholder='Teléfono' onChange={handleChange} />
            <input type="email" name='email' placeholder='Correo' onChange={handleChange} />
         </form>
         <button onClick={handleSubmit}>Finalizar Compra</button>
      </div>
   )
}

export default Order