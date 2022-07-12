import React from 'react'
import CartWidget from './CartWidget'
import './NavBar.css'
import { Link } from 'react-router-dom'

const NavBar = () => {

   const categories = [
      { name: "Electronics", id: 0, route: "/category/electronics" },
      { name: "Jewelery", id: 1, route: "/category/jewelery" },
      { name: "Men's clothing", id: 2, route: "/category/men's clothing" },
      { name: "Women's clothing", id: 3, route: "/category/women's clothing" },
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
                  {/* <li><a href="#"><i className="fa-solid fa-circle-user"></i></a></li> */}
                  <Link to="/cart"><CartWidget /></Link>
               </ul>
            </nav>
         </header>
      </>
   )
}

export default NavBar