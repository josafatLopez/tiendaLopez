import React from 'react'
import CartWidget from './CartWidget'
import './NavBar.css'
import { Link } from 'react-router-dom'

const NavBar = () => {

   const categories = [
      { name: "Madera", id: 0, route: "/category/madera" },
      { name: "Papel", id: 1, route: "/category/papel" },
      { name: "Acrilico", id: 2, route: "/category/acrilico" },
      //{ name: "Women's clothing", id: 3, route: "/category/women's clothing" },
   ]
   
   return (
      <>
         <header>
            <nav>
               <Link to="/"><img src={'/img/logo/logo.png'} alt="Logo Menús México" /></Link>
               <ul>
                  <li>
                     {categories.map((category) => <Link key={category.id} to={category.route}>{category.name}</Link>)}
                  </li>
                  |
                  {/* <li><Link to="/"><i className="fa-solid fa-circle-user"></i></Link></li> */}
                  <Link to="/cart"><CartWidget /></Link>
               </ul>
            </nav>
         </header>
      </>
   )
}

export default NavBar