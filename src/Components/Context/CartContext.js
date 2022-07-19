import React, { useState, createContext, useEffect } from 'react'

export const context = createContext();
const { Provider } = context

const CustomProvider = ({ children }) => {

   const [products, setProducts] = useState([])
   const [qtyProducts, setQtyProducts] = useState(0)

   const cartQty = () => {
      let quantity = 0;
      products.forEach(product => quantity += product.quantity);
      setQtyProducts(quantity)

      console.log(quantity)
   }

   useEffect(() => {
      cartQty();
   }, [products])
   
   const addItem = (product) => {
      if (isInCart(product.id)) {
         const aux = [...products];
         const found = aux.find(i => i.id === product.id);
         found.quantity += product.quantity;
         setProducts(aux);
      } else {
         setProducts([...products, product])
      }
      
      //console.log(product)
   }

   const removeItem = (id) => {
      setProducts(products.filter(product => product.id !== id))
   }

   const isInCart = (id) => {
      return products.some(products => products.id === id)
   }
   console.log(products)
   

   const clear = () => {
      setProducts([])
   }

   return (
      <Provider value={{ products, addItem, removeItem, clear, qtyProducts }}>
         {children}
      </Provider>
   )
}

export default CustomProvider