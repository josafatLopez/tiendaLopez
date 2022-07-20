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
      //console.log(quantity)
   }
   useEffect(() => {
      cartQty();
   }, [products])
   
   const addItem = (product) => {
      if (isInCart(product.id)) {
         const aux = [...products];
         const found = aux.find(prod => prod.id === product.id);
         found.quantity += product.quantity;
         setProducts(aux);
      } else {
         setProducts([...products, product])
      }
      //console.log(product)
   }

   const removeItem = (id) => setProducts(products.filter(product => product.id !== id))

   const isInCart = (id) => products.some(products => products.id === id) ? true : false;
   //console.log(products)

   const clear = () => {
      setProducts([]);
      setQtyProducts(0);
   }

   const totalPrice = () => {
      return products.reduce((prev, act) => prev + act.quantity * act.price, 0)
   }

   const totalProducts = () => products.reduce((acumulador, productoActual) => acumulador + productoActual.quantity, 0)
   

   return (
      <Provider value={{ products, isInCart, addItem, removeItem, clear, totalPrice, totalProducts, qtyProducts }}>
         {children}
      </Provider>
   )
}

export default CustomProvider