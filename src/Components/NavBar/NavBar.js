import React from 'react'
import './NavBar.css'

const NavBar = () => {
   return (
      <>
         <header>
            <nav>
               <a href="#"><img src={"./img/logo/logo.png"} alt="Logo Menús México" /></a>
               <ul>
                  <li><a href="#">Inicio</a></li>
                  <li><a href="#">Productos</a></li>
                  <li><a href="#">Contacto</a></li>
                  |
                  <li><a href="#"><i class="fa-solid fa-circle-user"></i></a></li>
                  <li><a href="#"><i class="fa-solid fa-cart-shopping"></i></a></li>
               </ul>
            </nav>
         </header>
      </>
   )
}

export default NavBar