import React from 'react'
import CartWidget from './CartWidget'
import './NavBar.css'

const NavBar = () => {
   return (
      <>
         <header>
            <nav>
               <a href="#"><img src={"./img/logo/logo.png"} alt="Logo Menús México" /></a>
               <ul>
                  <li><a href="#">Menús</a></li>
                  <li><a href="#">Porta Vasos</a></li>
                  <li><a href="#">Servilleteros</a></li>
                  |
                  {/* <li><a href="#"><i className="fa-solid fa-circle-user"></i></a></li> */}
                  <CartWidget />
               </ul>
            </nav>
         </header>
      </>
   )
}

export default NavBar